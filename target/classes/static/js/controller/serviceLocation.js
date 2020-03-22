app.controller('ServiceLocationCtrl',
    function ($scope, $rootScope, $http, $location, $timeout, $filter, Notification,$window) {
        $scope.hiposServerURL =  "/hipos";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.removeServiceLocation = function () {
            $scope.servicelName="";
            $scope.serlocId = "";
        };
        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/admin';
        };
        $scope.inactiveButton = function (){
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getServiceLocationList();

        };
        $scope.getServiceLocationList = function () {
            $http.post($scope.hiposServerURL+"/getServiceLocationList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.serviceLocationlist = data;
            })
        };
        $scope.getServiceLocationList();

        $scope.editServiceLocation = function(data) {
            $scope.serlocId=data.serlocId;
            $scope.servicelName=data.servicelName;
            $scope.status=data.status;
            $scope.operation = 'Edit';
            $('#country-title').text("Edit Service Location");
            $("#add_new_Activity_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.addSLocation = function () {
            $scope.status ="Active";
            $scope.removeServiceLocation();
            $("#add_new_Activity_modal").modal('show');

        };

        $scope.saveServiceLocation = function () {
            if ($scope.servicelName == ''||$scope.servicelName==null||angular.isUndefined($scope.servicelName)) {
                Notification.warning({message: 'Location Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                var saveActivity;
                saveActivity = {
                    serlocId: $scope.serlocId,
                    servicelName: $scope.servicelName,
                    status: $scope.status
                };
                $http.post($scope.hiposServerURL + '/saveServiceLocation', angular.toJson(saveActivity)).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getServiceLocationList();
                        $scope.removeServiceLocation();
                        $("#add_new_Activity_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Service Location Created Successfully',
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


    });