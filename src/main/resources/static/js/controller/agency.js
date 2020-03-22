
app.controller('agencyController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$rootScope) {
        // body...\
        $scope.hiposServerURL =  "/hipos";
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
        $scope.removeDetails = function () {
            $scope.agName = "";
            $scope.StatusText ="";
            $scope.address="";
            $scope.phone = "";
        };



        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.editAgency = function(data) {
            // $scope.setupobj = data;
            $scope.agId=data.agId;
            $scope.roleName = data.roleName;
            $scope.agNameText = data.agencyName;
            $scope.address = data.agencyAddress;
            $scope.aguser = data.agName;
            $scope.agPassword = data.agPassword;
            $scope.StatusText =data.status;
            $scope.phone=data.agPhone;
            $scope.agencyCode=data.agencyCode;
            $scope.nameagency = $rootScope.userName;
            // $('#country-title').text("Edit Country");
            // $("#submit").text("Update");
            $("#add_new_agency_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.addNewagency = function () {
            $scope.country =null;
            $scope.state =null;
            $scope.city = null;
            $scope.getcountrywebList();
            $scope.nameagency=$rootScope.userName;
            $scope.getEnqGenNo();
            $scope.StatusText="Active";
            $scope.franName=null;
            $scope.roleName=null;
            $scope.phone="";
            $scope.address="";
            $scope.aguser="";
            $scope.agPassword="";
            $scope.agId="";
            $scope.agNameText="";
            $("#add_new_agency_modal").modal('show');
        };
        $scope.getUserRoleList = function () {
            $http.post($scope.hiposServerURL+"/getUserRoleList").then(function (response) {
                var data = response.data;
                $scope.userRoleList = data;
            })
        };
        $scope.getUserRoleList();

        $scope.getAgencyList = function () {
            $http.post($scope.hiposServerURL+"/getAgencyList").then(function (response) {
                var data = response.data;
                $scope.agencyList = data;
            })
        };
        $scope.getAgencyList();

        $scope.getFranchiseList = function () {
            $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
                var data = response.data;
                $scope.franchiseList = data;
            })
        };
        $scope.getFranchiseList();
        $scope.getcountrywebList = function () {

            $http.get($scope.hiposServerURL+"/getcountrywebList").then(function (response) {
                var data = response.data;
                $scope.countrywebList = data.data;
            })
        };

        $scope.getStatewebList = function (data) {
            $http.get($scope.hiposServerURL+"/getStatewebList?countryid=" + data).then(function (response) {
                var data = response.data;
                $scope.statewebList = data.data;
            })
        };

        $scope.getCitywebList = function (data) {
            $http.get($scope.hiposServerURL+"/getCitywebList?stateid="+data).then(function (response) {
                var data = response.data;
                $scope.citywebList = data.data;
            })
        };


        // $scope.getagencyList = function () {
        //     $http.post($scope.hiposServerURL+"/getagencyList").then(function (response) {
        //         var data = response.data;
        //         $scope.agencyList = data;
        //     })
        // };
        // $scope.getagencyList();

        $scope.getEnqGenNo = function () {
            $(".loader").css("display", "block");
            $http.post($scope.hiposServerURL  + "/generateAGENNo").then(function (response) {
                $scope.agencyCode= response.data;


            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.saveAgency = function () {
            if ($scope.aguser == ''||$scope.aguser==null||angular.isUndefined($scope.aguser)) {
                Notification.warning({message: 'UserName can not be empty', positionX: 'center', delay: 2000});
            }
            else if ($scope.agPassword == ''||$scope.agPassword==null||angular.isUndefined($scope.agPassword))
            {
                Notification.warning({message: 'Password Can not be empty', positionX: 'center', delay: 2000});
            }else if($scope.roleName ==''||$scope.roleName==null||angular.isUndefined($scope.roleName)){
                Notification.warning({message: 'Please Select UserRole', positionX: 'center', delay: 2000});
                }
             else if($scope.phone == ''||$scope.phone==null||angular.isUndefined($scope.phone)) {
                Notification.warning({message: 'Contact can not be empty', positionX: 'center', delay: 2000});
            }  else if($scope.agNameText == ''||$scope.agNameText==null||angular.isUndefined($scope.agNameText)) {
                Notification.warning({message: 'AgencyName can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                var saveAgencyDetails;
                saveAgencyDetails = {
                    agId: $scope.agId,
                    roleName: $scope.roleName,
                    agencyCode: $scope.agencyCode,
                    franName: $scope.franName,
                    agencyName: $scope.agNameText,
                    agencyAddress: $scope.address,
                    agPhone: $scope.phone,
                    status: $scope.StatusText,
                    userName: $scope.aguser,
                    agPassword: $scope.agPassword,
                    city: $scope.city,
                    state: $scope.state,
                    country: $scope.country,
                    parent: $scope.nameagency,
                    email: $scope.email,
                    zipCode: $scope.zipcode


                };
                $http.post($scope.hiposServerURL + '/saveAgency', angular.toJson(saveAgencyDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeDetails();
                        $scope.getAgencyList();
                        $("#add_new_agency_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Agency Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
            };
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
                    if(result == true){
                        var deleteDetails = {
                            countryId:data.countryId,
                            CountryNameText:data.countryName,
                            StatusText:data.status

                        };
                        $http.post($scope.hiposServerURL +"/deleteCountry", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginationList();
                            if(data==true){
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
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
        };

    });