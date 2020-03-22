
app.controller('paymentModeCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.paymentName = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo = 0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        $scope.removePaymentMode = function () {
            $scope.paymentName = "";
            $scope.status =null;
            $scope.listStatus="";
            $scope.operation = "";
        };
        $scope.companyLogoPath = "";


        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.editPayment = function(data) {
            $scope.paymentId = data.paymentId;
            $scope.paymentName = data.paymentName;
            $scope.status =data.status;
            $scope.operation='Edit';
            $('#country-title').text("Edit PaymentMode");
            $("#submit").text("Update");
            $("#add_new_paymentMode_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };


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
        $scope.getPaymentModeList = function () {
            $http.post($scope.hiposServerURL+"/getPaymentModeList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.paymentModeList = data;
            })
        };
        $scope.getPaymentModeList();
        $scope.addPaymentMode = function () {
            $scope.status="Active";
            $('#country-title').text("Add PaymentMode");
            $("#submit").text("Save");
            $("#add_new_paymentMode_modal").modal('show');
        };

        $scope.savePaymentMode = function () {
            if ($scope.paymentName == ''||$scope.paymentName==null||angular.isUndefined($scope.paymentName)) {
                Notification.warning({message: 'PaymentMode  can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveCountryDetails;
                saveCountryDetails = {
                    paymentId : $scope.paymentId,
                    paymentName: $scope.paymentName,
                    status:$scope.status
                };
                $http.post($scope.hiposServerURL + '/savePaymentMode', angular.toJson(saveCountryDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removePaymentMode();
                        $scope.getPaymentModeList();
                        $("#add_new_paymentMode_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.SearchText = "";
                        }
                        Notification.success({
                            message: 'PaymentMode Created  successfully',
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