app.controller('applicationCtrl',
    function ($scope, $rootScope, $http, $location, $timeout, $filter, Notification) {
        $scope.hiposServerURL =  "/hipos";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.inactiveStatus = "Active";
        $scope.removeApplication = function () {
            $scope.name="";
            $scope.id = "";
        };
        // $scope.getApplicationList = function () {
        //     $http.post($scope.hiposServerURL + '/getApplicationList').then(function (response) {
        //         var data = response.data;
        //         $scope.actiontypeList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getApplicationList();
        $scope.getApplicationPaginationList = function (page){
            switch (page){
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
            $http.post($scope.hiposServerURL + "/getApplicationPaginationList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.actiontypeList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getApplicationPaginationList();
        $scope.editApplication  = function(data) {
            $scope.id=data.id;
            $scope.name=data.name;
            $scope.status=data.status;
            $scope.operation = 'Edit';
            $('#country-title').text("Edit Application");
            $("#add_new_Application_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.addNewApplication = function () {
            $scope.status ="Active";
            $scope.removeApplication();
            $("#add_new_Application_modal").modal('show');

        };

        $scope.saveApplication = function () {
            if ($scope.name == ''||$scope.name==null||angular.isUndefined($scope.name)) {
                Notification.warning({message: 'Application Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveApplication;
                saveApplication = {
                    id: $scope.id,
                    name: $scope.name,
                    status: $scope.status
                };
                $http.post($scope.hiposServerURL + '/saveApplications', angular.toJson(saveApplication, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeApplication();
                        $scope.getApplicationPaginationList();
                        $("#add_new_Application_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Application Created  successfully',
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

        // $scope.saveApplication = function () {
        //     {
        //         var saveApplication;
        //         saveApplication = {
        //             id: $scope.id,
        //             name: $scope.name,
        //             status: $scope.status
        //         };
        //         $http.post($scope.hiposServerURL + '/saveApplications', angular.toJson(saveApplication, "Create")).then(function (response, status, headers, config) {
        //             var data = response.data;
        //             if (data == "") {
        //                 Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
        //             }
        //             else {
        //                 $scope.getApplicationPaginationList();
        //                 $("#add_new_Application_modal").modal('hide');
        //                 Notification.success({
        //                     message: 'Application Created successfully',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //             }
        //         }, function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //         });
        //     }
        //
        //
        // }

    });