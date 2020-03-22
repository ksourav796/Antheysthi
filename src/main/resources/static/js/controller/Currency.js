
app.controller('currencyCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification){
        // body...\
        $scope.hiposServerURL =  "/hipos";
        $scope.CurrrencyNameText = "";
        $scope.CurrrencyCodeText ="";
        $scope.CurrrencySymbolText ="";
        $scope.CurrrencyDescriptionText ="";
        $scope.CurrrencySymbolPlaceText ="";
        $scope.AccountCodeText ="";
        $scope.LocatioIdText ="";
        $scope.AccountIdText ="";
        $scope.StatusText = "";
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo=0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        $scope.removeCurrencyDetails = function (){
            $scope.CurrrencyNameText = "";
            $scope.CurrrencyCodeText ="";
            $scope.CurrrencySymbolText="";
            $scope.CurrrencySymbolPlaceText = "";
            $scope.AccountCodeText = "";
            $scope.LocatioIdText = "";
            $scope.AccountIdText = "";
            $scope.StatusText = null;
        };
        $scope.companyLogoPath = "";
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.inactiveCurrency = function(val){

            if($scope.clicked == false){
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
                var page="Page";
            }
            else{
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
                var page="";
            }
            $scope.clicked = !$scope.clicked;

            if (angular.isUndefined(val)){
                val = "";
            }
            //  $http.get($scope.hiposServerURL + "/" + $scope.customer + "/getCurrencyList?searchText=" + val+"&type="+  $scope.inactiveStatus).then(function (response) {
            //     var data = response.data;
            // $scope.getCurrencyList = data.data;
            // $scope.listStatus=false;
            //  })
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
            if (angular.isUndefined($scope.currencySearchText)){
                $scope.currencySearchText = "";
            }
            $http.post($scope.hiposServerURL + "/getPaginationCurrencyList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.currencySearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.currencyList1 = data.list;
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

        $scope.editCurrency = function(data){
            $scope.setupobj = data;
            $scope.currencyId = data.currencyId;
            $scope.CurrrencyCodeText = data.currencyCode;
            $scope.CurrrencyNameText = data.currencyName;
            $scope.CurrrencySymbolText = data.currencySymbol;
            $scope.CurrrencyDescriptionText = data.currencyDescription;
            $scope.CurrrencySymbolPlaceText = data.currencySymbolPlace;
            $scope.AccountCodeText = data.accountCode;
            $scope.LocatioIdText = data.locationId;
            $scope.AccountIdText = data.useraccount_id;
            $scope.StatusText =data.status;
            $scope.operation='Edit';
            $('#currency-title').text("Edit Currency");
            $("#submit").text("Update");
            $("#add_new_Currency_modal").modal('show');
        },function (error){
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };

        $scope.addNewCurrencyPopulate = function (){
            $scope.CurrrencyNameText = "";
            $scope.CurrrencyCodeText ="";
            $scope.CurrrencyDescriptionText ="";
            $scope.CurrrencySymbolText="";
            $scope.CurrrencySymbolPlaceText = "";
            $scope.AccountCodeText = "";
            $scope.LocatioIdText = "";
            $scope.AccountIdText = "";
            $scope.StatusText = "Active";
            $('#currency-title').text("Add Currency");
            $("#add_new_Currency_modal").modal('show');
        };

        $scope.importCurrency = function(){
            $("#import_Currency").modal('show');
        };
        // $scope.getCurrencyList = function (){
        //     $http.post($scope.hiposServerURL+"/getCurrencyList").then(function (response){
        //         var data = response.data;
        //         $scope.currencyList = data;
        //     })
        // };
        // $scope.getCurrencyList();

        $scope.saveCurrency = function (){
            if ($scope.CurrrencyNameText === ''){
                Notification.warning({message: 'Currency Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                var saveCurrencyDetails;
                saveCurrencyDetails = {
                    currencyId: $scope.currencyId,
                    currencyName: $scope.CurrrencyNameText,
                    currencyCode: $scope.CurrrencyCodeText,
                    currencySymbol: $scope.CurrrencySymbolText,
                    currencyDescription: $scope.CurrrencyDescriptionText,
                    currencySymbolPlace: $scope.CurrrencySymbolPlaceText,
                    accountCode: $scope.AccountCodeText,
                    locationId: $scope.LocatioIdText,
                    useraccount_id: $scope.AccountIdText,
                    status: $scope.StatusText
                };
                $http.post($scope.hiposServerURL + '/saveCurrency', angular.toJson(saveCurrencyDetails, "Create")).then(function (response){
                    var data = response.data;
                    if (data == ""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getPaginationList();
                        $("#add_new_Currency_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null){
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'Currency Created  successfully',
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
        $scope.deleteCurrency = function (data) {
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

                callback: function (result){
                      alert("delete");
                    if(result == true){
                        $scope.currencyId = data.currencyId;
                        $scope.CurrrencyNameText=data.currencyName;
                        $scope.CurrrencyCodeText = data.currencyCode;
                        $scope.CurrrencySymbolText = data.currencySymbol;
                        $scope.CurrrencyDescriptionText = data.currencyDescription;
                        $scope.CurrrencySymbolPlaceText = data.currencySymbolPlace;
                        $scope.AccountCodeText = data.accountCode;
                        $scope.LocatioIdText = data.locationId;
                        $scope.AccountIdText = data.useraccount_id;
                        $scope.StatusText=data.status;
                        var deleteDetails = {
                            currencyId : $scope.currencyId,
                            currencyName: $scope.CurrrencyNameText,
                            currencyCode:$scope.CurrrencyCodeText,
                            currencySymbol:$scope.CurrrencySymbolText,
                            currencyDescription:$scope.CurrrencyDescriptionText,
                            currencySymbolPlace:$scope.CurrrencySymbolPlaceText,
                            accountCode:$scope.AccountCodeText,
                            locationId:$scope.LocatioIdText,
                            useraccount_id:$scope.AccountIdText,
                            status : $scope.status

                        };
                        $http.post($scope.hiposServerURL + "/" + $scope.currencyId + '/deleteCurrency', angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            if(data==""){
                                $scope.getPaginationList();
                                Notification.error({message: 'It Is Already In Use Cant be Deleted', positionX: 'center', delay: 2000});
                            }
                            else {
                                $("#add_new_Currency_modal").modal('hide');
                                if (!angular.isUndefined(data) && data !== null) {
                                    $scope.currencySearchText = "";
                                }
                                if($scope.StatusText=="InActive") {
                                    $scope.getCurrencyList("","InActive");
                                    Notification.success({
                                        message: 'Status has been changed to Active',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                                else{
                                    $scope.getPaginationList("","");
                                    Notification.success({
                                        message: 'Status has been changed to InActive',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                            }
                        }, function (error) {
                            Notification.error({
                                message: 'Something went wrong, please try again',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

    });







