
app.controller('discountCtrl',
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
        $scope.companyLogoPath = "";
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/masters';
        };

        $scope.format = 'dd/MM/yyyy';

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
        $scope.DiscountList=[];
        $scope.DiscountList .push({
            day:null,
            shift:null,
            discount:'',
            toDate:new Date(),
            fromDate:new Date(),
            maxPerson:'',
        });
        $scope.openA = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.open = true;
        };
        $scope.openB = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.open1 = true;
        };
        $scope.addNewFile = function(){
            $scope.DiscountList.push($scope.DiscountList.length);
        };
        $("#add_new_multi_Offer").modal('show');
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
            if (angular.isUndefined($scope.countrySearchText)) {
                $scope.countrySearchText = "";
            }
            $http.post($scope.hiposServerURL + "/getpaginatedcountry?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.countrySearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.countryList = data.list;
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

        $scope.saveOffer = function () {
            var details;
            details={
                restaurantName:angular.toJson($scope.DiscountList)
            }
           $http.post($scope.hiposServerURL+'/saveOffer',angular.toJson(details)).then(function (response) {
               var data= response.data;
           })
        }

    });