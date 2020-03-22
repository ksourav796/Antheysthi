
app.controller('serviceCtrl',
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
        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/masters';
        };
        $scope.removeServiceDetails = function () {
            $scope.namee = "";
            $scope.duration = "";
            $scope.duration = "";
            $scope.price = "";
            $scope.currencyId = null;
            $scope.category = null;
            $scope.availabilities = null;
            $scope.attendants = "";
            $scope.notes =null;
            $scope.listStatus="";
            $scope.operation = "";
        };
        $scope.companyLogoPath = "";


        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.getCurrencyList = function (){
            $http.post($scope.hiposServerURL+"/getCurrencyList").then(function (response){
                var data = response.data;
                $scope.currencyList = data;
            })
        };
        $scope.getCurrencyList();
        $scope.editService = function(data) {
            $scope.sId = data.sId;
            $scope.namee = data.name;
            $scope.duration = data.duration;
            $scope.price = data.price;
            $scope.currencyId = data.currency;
            $scope.category = data.categories;
            $scope.availabilities = data.availabilities;
            $scope.attendants = data.attendants;
            $scope.notes = data.description;
            $scope.operation='Edit';
            $('#country-title').text("Edit Service");
            $("#submit").text("Update");
            $("#add_new_service_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.addService = function () {
            $('#country-title').text("Add Service");
            $("#submit").text("Save");
            $("#add_new_service_modal").modal('show');
        };

        $scope.importCountry = function(){
            $("#import_Country").modal('show');
        }



        $scope.getServiceList = function () {
            $http.post($scope.hiposServerURL+"/getServiceList").then(function (response) {
                var data = response.data;
                $scope.serviceList = data;
            })
        };
        $scope.getServiceList();
        $scope.saveCountryImport = function(){
            $scope.isDisabled= true;
            var formElement = document.getElementById("countyDetails");
            var countriesDetails = new FormData(formElement);
            $http.post($scope.hiposServerURL + '/countryImportSave',countriesDetails,
                { headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#import_Country").modal('hide');
                    $scope.getPaginationList();
                $scope.isDisabled= false;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                $scope.isDisabled= false;
                }
            )
        }

        $scope.getCategoryList = function () {
            $http.post($scope.hiposServerURL+"/getCategoryList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.categoryList = data;
            })
        };
        $scope.getCategoryList();
        $scope.saveProfile = function () {
            if ($scope.namee == ''||$scope.namee==null||angular.isUndefined($scope.namee)) {
                Notification.warning({message: 'Service Name can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.category == ''||$scope.category==null||angular.isUndefined($scope.category)) {
                Notification.warning({message: 'Category can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveServiceDetails;
            saveServiceDetails = {
                sId : $scope.sId,
                name: $scope.namee,
                    duration: $scope.duration,
                    price: $scope.price,
                currency: $scope.currencyId,
                categories: $scope.category,
                availabilities: $scope.availabilities,
                attendants: $scope.attendants,
                description: $scope.notes
                };
                $http.post("/hipos" + '/saveServiceDetails', angular.toJson(saveServiceDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {

                         $scope.getServiceList();
                        $("#add_new_service_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Service Created  successfully',
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

            }
            ;
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