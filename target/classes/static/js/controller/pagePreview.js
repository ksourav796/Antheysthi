
app.controller('pagePreviewController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window) {
        // body...\
        $scope.hiposServerURL = "/hipos/";
        $scope.CountryNameText = "";
        $scope.StatusText = "";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.customer = 1;
        $scope.inactiveStatus = "Active";
    });