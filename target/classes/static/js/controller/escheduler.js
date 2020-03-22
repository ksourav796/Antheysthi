
app.controller('eschCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.CountryNameText = "";
        $scope.StatusText = "";
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo = 0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        $scope.removeCountryDetails = function () {
            $scope.CountryNameText = "";
            $scope.StatusText =null;
            $scope.listStatus="";
            $scope.operation = "";
        };
        $scope.companyLogoPath = "";
        $scope.format = 'dd/MM/yyyy';

        $scope.openA = function() {
            $scope.popupA.opened = true;
        };
        $scope.popupA = {
            opened: false
        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.getDateList = function (document) {
            document.docDate = new Date();
        };

        $scope.editCountry = function(data) {
            $scope.setupobj = data;
            $scope.countryId = data.countryId;
            $scope.CountryNameText = data.countryName;
            $scope.StatusText =data.status;
            $scope.operation='Edit';
            $('#country-title').text("Edit Country");
            $("#submit").text("Update");
            $("#add_new_country_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.getDocumentList = function () {
            $http.post($scope.hiposServerURL+"/getDocumentList").then(function (response) {
                var data = response.data;
                $scope.documentList = data;
            })
        };
        $scope.getDocumentList();

        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/masters';
        };
        $scope.inactiveButton = function (){
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
                var page = "Page";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
                var page = "";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginationList();

        };

        $scope.addEScheduler = function () {
            $scope.status="Active";
            $('#country-title').text("Add Escheduler");
            $("#submit").text("Save");
            $("#add_new_escheduler_modal").modal('show');
        };

        $scope.importCountry = function(){
            $("#import_Country").modal('show');
        }

        $scope.downloadSheet = function(){
            var countries = "Country";
            $http({
                url: $scope.hiposServerURL + "/" + $scope.customer + '/countrySheet' + "/" + countries ,
                method: "POST",
                responseType: 'arraybuffer'
            }).success(function (data) {
                var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
                var objectUrl = url.createObjectURL(blob);
                window.open(objectUrl);
            }).error(function (data, status, headers, config) {
                //upload failed
            });

        };
        // $scope.getFranchiseList = function () {
        //     $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
        //         var data = response.data;
        //         $scope.franchiseList = data;
        //     })
        // };
        // $scope.getFranchiseList();
        $scope.getResList = function () {
            if (angular.isUndefined($scope.rName)) {
                $scope.rName = "";
            }
            if (angular.isUndefined($scope.appDatee)) {
                $scope.appDatee = "";
            }
            if (angular.isUndefined($scope.location)) {
                $scope.location = "";
            }
            if (angular.isUndefined($scope.parentt)) {
                $scope.parentt = "";
            }
            $http.post($scope.hiposServerURL + '/getResList?parent=' + $scope.parentt + ' &rName=' + $scope.rName + '&date=' + $scope.appDatee+  '&location=' + $scope.location).then(function (response) {
                var data = response.data;
                $scope.resList = data;
            })
        };
        $scope.getResList();
        $scope.selectedGrades = [];
        $scope.pushSelectedGrades = function (id) {
            var index = $scope.selectedGrades.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedGrades.splice(index, 1);
            }else {
                $scope.selectedGrades.push(id);
            }
            $scope.fran=$scope.selectedGrades;
        };
        var expanded = false;
        $scope.showCheckboxes=function() {
            var checkboxes = document.getElementById("checkboxes");
            if (!expanded) {
                checkboxes.style.display = "block";
                expanded = true;
            } else {
                checkboxes.style.display = "none";
                expanded = false;
            }
        }
        $scope.saveschedular = function () {
            angular.forEach($scope.documentList, function (val, key) {
                val.docDate=new Date(val.docDate).setHours(10);
            });
            var schdetails;
            schdetails = {
                id: $scope.id,
                franchise: angular.toJson($scope.fran),
                documentPojoList: $scope.documentList
                };
                $http.post($scope.hiposServerURL + "/saveschedular", angular.toJson(schdetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already Exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_new_schedular_modal").modal('hide');
                        if ($scope.operation == 'Edit') {
                            Notification.success({
                                message: 'Schedular is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        } else {
                            Notification.success({
                                message: 'Schedular is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.isDisabled = false;

                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled = false;
                });

        }

        $scope.SchedularmodalList = function () {
            $http.post($scope.hiposServerURL + "/getSchedularmodalList").then(function (response) {
                var data = response.data;
                $scope.schedularList = data;
            })
        }
        $scope.editSchedular = function (data) {
            $http.post($scope.hiposServerURL + "/editSchedular?id="+data.id).then(function (response) {
                var data = response.data;
                $scope.id = data.id;
                $scope.franchise = JSON.parse(data.franchiseId);
                $scope.List=JSON.parse(data.details);
                angular.forEach( $scope.List,function (val,key) {
                    val.date = new Date(parseInt(val.date));
                });
                angular.forEach($scope.franchiseList,function (val,key) {
                    var index=$scope.franchise.indexOf(val.franchiseId);
                    if(index>-1){
                        val.franchise = true;
                    }

                })

            });
            $("#add_new_escheduler_modal").modal('show');
        };

        $scope.SchedularmodalList();
            $scope.deleteCountry = function (data) {
                bootbox.confirm({
                    title: "Alert",
                    message: "Do you want to Continue ?",
                    buttons: {
                        confirm: {
                            label: 'OK'
                        },
                        cancel: {
                            label: 'Cancel'
                        }
                    },
                    callback: function (result) {
                        if (result == true) {
                            var deleteDetails = {
                                countryId: data.countryId,
                                CountryNameText: data.countryName,
                                StatusText: data.status

                            };
                            $http.post($scope.hiposServerURL + "/deleteCountry", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                                var data = response.data;
                                $scope.getPaginationList();
                                if (data == true) {
                                    Notification.success({
                                        message: 'Successfully Deleted',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                } else {
                                    Notification.warning({
                                        message: 'Cannot delete Already in Use',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                            }, function (error) {
                                Notification.warning({
                                    message: 'Cannot be delete,already it is using',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            });
                        }
                    }
                });
            }

    });