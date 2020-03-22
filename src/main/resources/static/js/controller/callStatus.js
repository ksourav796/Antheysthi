app.controller('callStatusController',
    function ($scope, $http, $location, $filter, Notification,$window) {
        $scope.roleId = "";
        $scope.roleName = "";
        $scope.status = "Active";
        $scope.hiposServerURL =  "/hipos/";
        $scope.deductionDescription = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;

        $scope.removeRoleDetails = function () {
            $scope.roleId = "";
            $scope.roleName = "";
            $scope.roleStatus = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };
        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/admin';
        };
        $scope.inactiveButton = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginatedUserRoleList();

        };
        //TO ADD//
        $scope.addCallStatus = function () {
            $(".loader").css("display", "block");
            $scope.id = "";
            $scope.name = "";
            $scope.status = "Active";
            $('#modelName').text("Add Role");
            $("#submit").text("Save");
            $("#add_new_call").modal('show');
        };
        $scope.getCallStatusList = function () {
            $http.post($scope.hiposServerURL+"/getCallStatusList").then(function (response) {
                var data = response.data;
                $scope.callStatusList = data;
            })
        };
        $scope.getCallStatusList();

        $scope.editCallStatus = function (data) {
            $scope.id=data.id;
            $scope.name=data.name;
            $scope.status=data.status;
            $("#add_new_call").modal('show');

        }

        //   ToSAVE//
        $scope.saveCallStatus = function () {
            if ($scope.name == '' || $scope.name == null || angular.isUndefined($scope.name)) {
                Notification.warning({message: 'Name can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveCallStatus;
                saveCallStatus = {
                    id: $scope.id,
                    name: $scope.name,
                    status: $scope.status

                };
                $http.post($scope.hiposServerURL  + '/saveCallStatus', angular.toJson(saveCallStatus, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getCallStatusList();
                    if (data === "") {
                        $scope.isDisabled = false;
                        Notification.error({
                            message: 'CallStatus  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_call").modal('hide');
                        Notification.success({
                            message: 'CallStatus  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });

                        // $scope.removeRoleDetails();
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
            ;
        }

        $scope.getActivityList = function () {
            $http.post($scope.hiposServerURL+"/getactivityList").then(function (response) {
                var data = response.data;
                $scope.activityList = data;

            })
        };
        $scope.getActivityList();

        $scope.getPaginatedUserRoleList = function (page) {
            switch (page) {
                case 'firstPage':
                    $scope.firstPage = true;
                    $scope.lastPage = false;
                    $scope.isNext = false;
                    $scope.isPrev = false;
                    $scope.pageNo = 0;
                    break;
                case 'lastPage':
                    $scope.lastPage = true;
                    $scope.firstPage = false;
                    $scope.isNext = false;
                    $scope.isPrev = false;
                    $scope.pageNo = 0;
                    break;
                case 'nextPage':
                    $scope.isNext = true;
                    $scope.isPrev = false;
                    $scope.lastPage = false;
                    $scope.firstPage = false;
                    $scope.pageNo = $scope.pageNo + 1;
                    break;
                case 'prevPage':
                    $scope.isPrev = true;
                    $scope.lastPage = false;
                    $scope.firstPage = false;
                    $scope.isNext = false;
                    $scope.pageNo = $scope.pageNo - 1;
                    break;
                default:
                    $scope.firstPage = true;
            }
            var paginationDetails;
            paginationDetails = {
                firstPage: $scope.firstPage,
                lastPage: $scope.lastPage,
                pageNo: $scope.pageNo,
                prevPage: $scope.prevPage,
                prevPage: $scope.isPrev,
                nextPage: $scope.isNext
            }
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.hiposServerURL + "/getPaginatedUserRoleList?&type=" +  $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.roleList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeRoleDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedUserRoleList();

    });

