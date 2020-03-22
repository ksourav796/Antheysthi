
app.controller('subscriptionCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification) {
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
        $scope.removeSubscriptionDetails = function () {
            $scope.subscriptionName="";
            $scope.applicationurl="";
            $scope.validityText="";
            $scope.validityTypeText="";
            $scope.subscriptionForText="";
            $scope.orgnlchrgText="";
            $scope.versionText="";
            $scope.permissionText="";
            $scope.addonPerText="";
            $scope.users="";
            $scope.companies="";
            $scope.subscriptionId="";
            $scope.offerPrice="";
            $scope.actualPrice="";
        };
        $scope.editSubscription = function(data) {
            $scope.subscriptionId = data.subscriptionId;
            $scope.subscriptionName = data.subscriptionName;
            $scope.validityText = data.validity;
            $scope.subscriptionForText = data.subscriptionFor;
            $scope.versionText = data.version;
            $scope.applicationurl = data.applicationurl;
            $scope.application = parseInt(data.application);
            $scope.permissionText = data.permission;
            $scope.addonPerText = data.addonPermission;
            $scope.users = data.users;
            $scope.companies = data.companies;
            $scope.offerPrice = data.offerPrice;
            $scope.actualPrice = data.actualPrice;
            $scope.statusText = data.status;
            $scope.operation = 'Edit';
            $('#title').text("Edit Subscription");
            $("#add_subscription_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.getApplicationList = function () {
            $http.post($scope.hiposServerURL + '/getApplicationList').then(function (response) {
                var data = response.data;
                $scope.actiontypeList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getApplicationList();

        $scope.addSubscription = function () {
            $scope.statusText="Active";
            $('#country-title').text("Add Subscription");
            $("#submit").text("Save");
            $("#add_subscription_modal").modal('show');
        };


        $scope.saveNewSubscription = function () {
            if ($scope.subscriptionName == ''||$scope.subscriptionName==null||angular.isUndefined($scope.subscriptionName)) {
                Notification.warning({message: 'Subscription Name can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.validityText == ''||$scope.validityText==null||angular.isUndefined($scope.validityText)) {
                Notification.warning({message: 'Validity can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveDetails;
                saveDetails = {
                    subscriptionId : $scope.subscriptionId,
                    subscriptionName: $scope.subscriptionName,
                    validity:$scope.validityText,
                    subscriptionFor:$scope.subscriptionName,
                    version:$scope.versionText,
                    applicationurl:$scope.applicationurl,
                    application:$scope.application,
                    permission:$scope.permissionText,
                    addonPermission:$scope.addonPerText,
                    users:$scope.users,
                    companies:$scope.companies,
                    offerPrice:$scope.offerPrice,
                    actualPrice:$scope.actualPrice,
                    status:$scope.statusText
                };
                $http.post($scope.hiposServerURL + '/saveSubscription', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeSubscriptionDetails();
                        $scope.getPaginationList();
                        $("#add_subscription_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Subscription Created  successfully',
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
            if (angular.isUndefined($scope.SearchText)) {
                $scope.SearchText = "";
            }
            $http.post($scope.hiposServerURL + "/getpaginatedsubscription?&searchText="+ $scope.SearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.subscriptionList = data.list;
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
    });