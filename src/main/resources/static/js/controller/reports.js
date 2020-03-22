/**
 * Created by sneharika on 10/5/2017.
 */
// angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('reportsController', function($scope, $http,$timeout,$rootScope,Notification) {
    $scope.hiposServerURL = "/hipos/";
    $scope.customer = 1;
    $scope.firstPage=true;
    $scope.lastPage=false;
    $scope.pageNo=0;
    $scope.prevPage=false;
    $scope.isPrev=false;
    $scope.isNext=false;
    $scope.today = function() {
        $scope.dt = new Date();
        $scope.dt1 = new Date();
        $scope.fromDate = new Date();
        $scope.toDate = new Date();
    };
    $scope.today();
    $scope.format = 'dd/MM/yyyy';

    $scope.open1 = function() {

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };
    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.popup2 = {
        opened: false
    };
        $scope.popup1.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };
    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.popup2 = {
        opened: false
    };



    $scope.
    $scope.getPaginationList = function (page){
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
        if($scope.searchText==undefined){
            $scope.searchText="";
        }

        $http.post($scope.hiposServerURL+'/getPaginationgetRestaurant?searchText=' + $scope.searchText + '&Status=' +"Success", angular.toJson(paginationDetails)).then(function (response) {
            var data = response.data;
            // console.log(data);
            $scope.clientsList = data.list;
            angular.forEach( $scope.restaurantList,function (val,key) {
                val.transactionDate=new Date(val.transactionDate);
            })
            $scope.first = data.firstPage;
            $scope.last = data.lastPage;
            $scope.prev = data.prevPage;
            $scope.next = data.nextPage;
            $scope.pageNo = data.pageNo;
            $scope.listStatus = true;

        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        })
    };
    $scope.getPaginationList();
    // $scope.getClientsList = function () {
    //     if (angular.isUndefined($scope.searchText)) {
    //         $scope.searchText = "";
    //     }
    //     $http.post($scope.hiposServerURL + '/getClientsList?searchText=' + $scope.searchText).then(function (response) {
    //         var data = response.data;
    //         $scope.clientsList = data;
    //     })
    // };
    // $scope.getClientsList();
    $scope.getReportList = function () {
        $http.post($scope.hiposServerURL+'/getReportListBasedOnTwoDates?fromDate='+$scope.dt+'&toDate='+$scope.dt1).then(function (response) {
            var data = response.data;
            $scope.clientsList = data;
        })
    };
    $scope.getDayEndReportList = function (page) {
        $scope.totalAmt=0;
        switch (page) {
            case 'firstPage':
                $scope.firstPage = true;
                $scope.lastPage = false;
                $scope.pageNo = 0;
                break;
            case 'lastPage':
                $scope.lastPage = true;
                $scope.firstPage = false;
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
        $http.get("/hipos/getDayEndReportList", {
            params: {
                "fromDates": $scope.dt,
                "toDate": $scope.dt1,
                "firstPage": $scope.firstPage,
                "lastPage": $scope.lastPage,
                "pageNo": $scope.pageNo,
                "prevPage": $scope.prevPage,
                "prevPage": $scope.isPrev,
                "nextPage": $scope.isNext
            }
        }).then(function (data) {
            $scope.reportList = data.data.mapList;


            })

    }

});
