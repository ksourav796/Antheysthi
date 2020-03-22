app.controller('enqsourceController',
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

        $scope.removeActivity = function () {
            $scope.sourceName="";
            $scope.enqSourceId = "";
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
            $scope.getenqSourceList();

        };
        $scope.getenqSourceList = function () {
            $http.post($scope.hiposServerURL+"/getenqSourceList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.enqsourcelist = data;
            })
        };
        $scope.getenqSourceList();

        $scope.editActivity = function(data) {
            $scope.enqSourceId=data.enqSourceId;
            $scope.sourceName=data.sourceName;
            $scope.status=data.status;
            $scope.operation = 'Edit';
            $('#country-title').text("Edit Source Of Enquiry");
            $("#add_new_Activity_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.addActivity = function () {
            $scope.status ="Active";
            $scope.removeActivity();
            $("#add_new_Activity_modal").modal('show');

        };

        $scope.saveEnquirySource = function () {
            if ($scope.sourceName == ''||$scope.sourceName==null||angular.isUndefined($scope.sourceName)) {
                Notification.warning({message: 'sourceName Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveActivity;
                saveActivity = {
                    enqSourceId: $scope.enqSourceId,
                    sourceName: $scope.sourceName,
                    status: $scope.status
                };
                $http.post($scope.hiposServerURL + '/saveEnquirySource', angular.toJson(saveActivity, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getenqSourceList();
                        $scope.removeActivity();
                        $("#add_new_Activity_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Source of Enquiry Created  successfully',
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