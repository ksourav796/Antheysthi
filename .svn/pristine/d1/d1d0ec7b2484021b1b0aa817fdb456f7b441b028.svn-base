
app.controller('masterController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window,$rootScope) {
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



        $scope.getcreatePageList = function () {
            $http.post($scope.hiposServerURL+"/getCreatePageList").then(function (response) {
                var data = response.data;
                $scope.createPAgeList = data;
                angular.forEach($scope.createPAgeList,function (val,key) {
                    if(val.details!=null){
                        $scope.keyList = angular.fromJson(val.details);
                    }
                })
            })
        }
        $scope.getcreatePageList();



        $scope.masterName = function (data) {
            localStorage.setItem('pageName', data);
            $window.location.href="/anthyesti#!/page";
        }


});