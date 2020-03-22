
app.controller('ResCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification,$rootScope,$window) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.franchise=$rootScope.franchise;
        $scope.CountryNameText = "";
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $rootScope.userName = $scope.userName;
        $scope.StatusText = "";
        $scope.user=null;
        $scope.operation='Create';
        $rootScope.AssignName =$scope.parent;
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.makeItemSearchTextReadonly = false;
        // $scope.date=new Date();
        $scope.List=[];
        $scope.format = 'dd/MM/yyyy';
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        $scope.openA = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.open = true;
        };
        $scope.popupA = {
            opened: false
        };
        $scope.openB = function() {
            $scope.popupB.opened = true;
        };
        $scope.popupB = {
            opened: false
        };
        $scope.openC = function() {
            $scope.popupC.opened = true;
        };
        $scope.popupC = {
            opened: false
        };
        $scope.openD = function() {
            $scope.popupD.opened = true;
        };
        $scope.popupD = {
            opened: false
        };
        $scope.openE = function() {
            $scope.popupE.opened = true;
        };
        $scope.popupE = {
            opened: false
        };
        $scope.select = function (data) {
            if(data.checkbox==true){
                $scope.List.push(data)
            }
        };

        $scope.previousserviceDetails=[];
        $scope.addNewTopic = function(){
            if($scope.previousserviceDetails==""){
                $scope.previousserviceDetails = [];
            }
            $scope.previousserviceDetails.push({
                categoryId:null,
                service:null
            });
        };

        $scope.getCategoryList = function () {
            $http.post($scope.hiposServerURL+"/getCategoryList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.categoryList = data;
            })
        };
        $scope.getCategoryList();
        $scope.getcuisines = function () {
            $http.get($scope.hiposServerURL+"/getcuisines").then(function (response) {
                var data = response.data.data;
                $scope.cusineListttt = data;
            })
        };
        $scope.getcuisines();
        $scope.getClientServiceList = function () {
            $http.get($scope.hiposServerURL+"/getClientServiceList").then(function (response) {
                var data = response.data.data;
                $scope.clientserviceListttt = data;
            })
        };
        $scope.getClientServiceList();
        $scope.getOrderFacilityList = function () {
            $http.get($scope.hiposServerURL+"/getOrderFacilityList").then(function (response) {
                var data = response.data.data;
                $scope.orderfacilityListttt = data;
            })
        };
        $scope.getOrderFacilityList();
        $scope.getCountryList = function () {
            $http.post($scope.hiposServerURL+"/getCountryList").then(function (response) {
                var data = response.data;
                $scope.countryList = data;
            })
        };
        $scope.getCountryList();
        $scope.getStatewebList = function (data) {
            $http.post($scope.hiposServerURL+"/getCountryState?countryid=" + data).then(function (response) {
                var data = response.data;
                $scope.statewebListttt = data;
            })
        };
        // $scope.getStatewebList();
        $scope.getCitywebList = function (data) {
            $http.post($scope.hiposServerURL+"/getStateCity?stateid="+data).then(function (response) {
                var data = response.data;
                $scope.citywebListttt = data;
            })
        };
        // $scope.getCitywebList();
        $scope.getLocationwebList = function (data) {
            $http.get($scope.hiposServerURL+"/getLocationwebList?cityid="+data).then(function (response) {
                var data = response.data.data;
                $scope.locationwebListttt = data;
            })
        };
        // $scope.getLocationwebList();
        $scope.getDiscountwebList = function () {
            $http.get($scope.hiposServerURL+"/getDiscountwebList").then(function (response) {
                var data = response.data.data;
                $scope.discountwebList = data;
            })
        };
        $scope.getDiscountwebList();
        $scope.getRestypewebList = function () {
            $http.get($scope.hiposServerURL+"/getRestypewebList").then(function (response) {
                var data = response.data.data;
                $scope.restypewebList = data;
            })
        };
        $scope.getRestypewebList();
        $scope.gettagswebList = function () {
            $http.get($scope.hiposServerURL+"/gettagswebList").then(function (response) {
                var data = response.data.data;
                $scope.tagswebListttt = data;
            })
        };
        $scope.gettagswebList();
        $scope.removecross = function(data){
            $scope.index=data;
            $scope.previousserviceDetails.splice($scope.index,1);
        };
        $scope.removeresDetails = function(){
            $scope.rid ="";
            $scope.parent = "";
            $scope.categoryId =null;
            $scope.subscription =null;
            $scope.service = null;
            $scope.user = null;
            $scope.Name ="";
            $scope.Rname = "";
            $scope.slug = "";
            $scope.Emailid = "";
            $scope.Contact = "";
            $scope.country =null;
            $scope.state =null;
            $scope.city = null;
            $scope.Zipcode = "";
            $scope.location = null;
            $scope.address1 = "";
            $scope.address2 = "";
            $scope.updateStatus="";
            $scope.owner="",
                $scope.openingStatus="",
                $scope.alcohal="";
                $scope.cardsCash="",
                $scope.serv="",
                $scope.orderfac="",
                $scope.seating="",
                $scope.deliveryTime="",
                $scope.deliveryPrice="",
                $scope.restaurantType=null,
                $scope.discountType=null,
                $scope.cusin="",
            $scope.tagggg="",
            $scope.Rname="",
                $scope.paymentMode="",
                $scope.amountPaid=""

        };
        $scope.removeApp = function(){
            $scope.workProgress = "";
            $scope.appUser="";
            $scope.appDate = "";
            $scope.appTime = "";
            $scope.appRemarks = "";
        };



        $scope.companyLogoPath = "";

        $scope.format = 'dd/MM/yyyy';
        $scope.open12 = function() {
            $scope.popup12.opened = true;
        };
        $scope.popup12 = {
            opened: false
        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.restaurentDetails = function(data) {
            $scope.rid = data.rid;
            $scope.parent = data.parent;
            $scope.categoryId = $scope.CategoryBasedOnService(data.product);
            $scope.categoryId = data.product;
            $scope.subscription = data.subscriptionName;
            $scope.service = data.service;
            $scope.user = data.user;
            $scope.Name =data.name;
            $scope.Rname = data.rName;
            $scope.Emailid = data.email;
            $scope.Contact = data.contact;
            $scope.country =parseInt(data.country);
            $scope.getStatewebList(data.country);
            $scope.state =parseInt(data.state);
            $scope.getCitywebList(data.state);
            $scope.city = parseInt(data.city);
            $scope.Zipcode = data.zipcode;
            $scope.slug = data.slug;
            $scope.getLocationwebList(data.city);
            $scope.location = data.location;
            $scope.address1 = data.addressOne;
            $scope.address2 = data.addressTwo;
            $scope.updateStatus=data.updateStatus;
            $scope.radioValue=data.radioValue;
            $scope.paymentStatus=data.paymentStatus;
            $scope.custstatus=data.custStatus;
            $scope.status=data.status;
            $scope.operation='Edit';
            $('#res-title').text("Edit Restaurant");
            $("#submit").text("Update");
            $("#add_new_res_modal").modal('show');
        }
        $scope.clientsDetailsss = function(data) {
            $scope.aaa=data;
            $scope.rid = data.rid;
            $scope.parent = data.parent;
            $scope.categoryId = $scope.CategoryBasedOnService(data.product);
            $scope.categoryId = data.product;
            $scope.subscription = data.subscriptionName;
            $scope.service = data.service;
            $scope.user = data.user;
            $scope.Name =data.name;
            $scope.Rname = data.rName;
            $scope.Emailid = data.email;
            $scope.Contact = data.contact;
            $scope.slug = data.slug;
            $scope.country =parseInt(data.country);
            $scope.getStatewebList(data.country);
            $scope.state =parseInt(data.state);
            $scope.getCitywebList(data.state);
            $scope.city = parseInt(data.city);
            $scope.Zipcode = data.zipcode;
            $scope.getLocationwebList(data.city);
            $scope.location = data.location;
            $scope.address1 = data.addressOne;
            $scope.address2 = data.addressTwo;
            $scope.updateStatus=data.updateStatus;
            $scope.radioValue=data.radioValue;
            $scope.paymentStatus=data.paymentStatus;
            $scope.status=data.status;
            $scope.getCountryList();
            $scope.operation='Edit';
            $('#res-title').text("Edit Restaurant");
            $("#submit").text("Update");
            $("#add_new_Client_modal").modal('show');
        }
        $scope.renew = function (data) {
            $scope.name=data.rName;
            $http.post( $scope.hiposServerURL + '/getRestrauntName?rname=' +  $scope.name).then(function (response) {
                var data = response.data;
                $scope.amount=data.amountPaid;
                $scope.rName1=data.rName;
                $scope.due=null;
                $scope.transactionDate=new Date();
                $scope.expDate=data.expiryDate;
                $scope.subStatus=data.subscriptionStatus;
                $scope.subName=data.subscriptionName;
                $scope.validityyy=data.validity;
                $scope.actualprice=data.actualPrice;
                $scope.balAmountt = data.actualPrice - data.amountPaid;
                $('#menu-title').text('Add List');
                $("#add_FranchisePay_modal").modal('show');})

        };
     $scope.viewRemark=function(data){
     $http.post($scope.hiposServerURL+'/getUser?rName='+data.rName+ '&user=' + data.user ).then(function (response) {
        var data = response.data;
        $scope.appUserrr=data.appUser;
        $scope.appTime=data.appTime;
        $scope.rName=data.rName;
        $scope.appDate= data.appDate;

    })
    $("#add_new_View_modal").modal('show');
}
        $scope.getUserListBasedOnParent = function () {
            $http.post($scope.hiposServerURL+"/getUserListBasedOnParent").then(function (response) {
                var data = response.data;
                $scope.userList = data;
            })
        };
        $scope.getUserListBasedOnParent();
        $scope.removeUpload=function(){
            // $window.location.reload();
        }

        $scope.appendItemSelected = function (sb) {
            var itemObj = $filter('filter')($scope.itemList, {
                name: sb.itemname
            }, true);
            if (itemObj.length > 0) {
                sb.name = itemObj[0];
            }

        };
        $scope.addEScheduler = function (data) {
            $scope.status="Active";
            $scope.restName=data.rName;
            $scope.restemail=data.email;
            $('#country-title').text("Add Escheduler");
            $("#submit").text("Save");
            $("#add_new_escheduler_modal").modal('show');
        };
        $scope.Notify = function (res) {
            $scope.rid=res.rid;
            $scope.remainderDate= new Date();
            $scope.remainderData="";
            $('#rmarks-title').text("Add Remarks");
            $("#submit").text("Save");
            $("#add_new_ResRemarks_modal").modal('show');
        };

        $scope.AddResRemarks = function (res) {
            $scope.rid = res.rid;
            if (res.resRemarks == null) {
                resRemarks:$scope.resRemarks;
            } else {
                $scope.operation = 'Edit'
                $scope.resRemarks = res.resRemarks;
            }
            $("#add_new_ResRemarks_modal").modal('show');
        };

        $scope.saveResRemarks= function () {
           var details ;
           details={
               rid : $scope.rid,
               resRemarks: $scope.resRemarks
           };
            $http.post($scope.hiposServerURL + '/saveResRemarks', angular.toJson(details, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if(data==""){
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getPaginationList('',$scope.statusName);

                    $("#add_new_ResRemarks_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Remarks Saved successfully',
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

            ;
        };
        $scope.getDocumentList = function () {
            $http.post($scope.hiposServerURL+"/getDocumentList").then(function (response) {
                var data = response.data;
                $scope.documentList = data;
            })
        };
        $scope.getDocumentList();
        $scope.getFranchiseList = function () {
            $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
                var data = response.data;
                $scope.franchiseList = data;
            })
        };
        $scope.getFranchiseList();

        $scope.selectedGrades = [];
        $scope.pushSelectedGrades = function (id) {
            var index = $scope.selectedGrades.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedGrades.splice(index, 1);
            }else {
                $scope.selectedGrades.push(id);
            }
            $scope.fran=$scope.selectedGrades;
        };
        var expanded = false;
        $scope.showCheckboxes=function() {
            var checkboxes = document.getElementById("checkboxes");
            if (!expanded) {
                checkboxes.style.display = "block";
                expanded = true;
            } else {
                checkboxes.style.display = "none";
                expanded = false;
            }
        }
        $scope.saveschedular = function () {
            angular.forEach($scope.documentList, function (val, key) {
                val.docDate=new Date(val.docDate).setHours(10);
            });
            var schdetails;
            schdetails = {
                id: $scope.id,
                // franchise: angular.toJson($scope.fran),
                franchise:$scope.restName,
                franchiseEmail:$scope.restemail,
                documentPojoList: $scope.documentList
            };
            $http.post($scope.hiposServerURL + "/saveschedular", angular.toJson(schdetails)).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already Exists', positionX: 'center', delay: 2000});
                }
                else {
                    $("#add_new_escheduler_modal").modal('hide');
                    if ($scope.operation == 'Edit') {
                        Notification.success({
                            message: 'Schedular is Updated successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    } else {
                        Notification.success({
                            message: 'Schedular is Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    $scope.isDisabled = false;

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
        $scope.generateQr = function (data) {
            $http.post($scope.hiposServerURL+"/generateQr?id="+data.rid).then(function (response) {
                var data = response.data;
                $scope.generatedQr = data;
                $scope.getPaginationList('',$scope.statusName);
                if(data==null){
                    Notification.warning({
                        message: 'GenerateQr Failed',
                        positionX: 'center',
                        delay: 2000
                    });
                }else {
                    Notification.warning({
                        message: 'QR Generated Successfully',
                        positionX: 'center',
                        delay: 2000
                    });
                    $("#add_new_QR").modal('show');
                }
            })
        };
        // $scope.getClientsList = function () {
        //     if (angular.isUndefined($scope.location)) {
        //         $scope.location = "";
        //     }
        //     if (angular.isUndefined($scope.rNam)) {
        //         $scope.rNam = "";
        //     }
        //     if (angular.isUndefined($scope.TxnDate)) {
        //         $scope.TxnDate = "";
        //     }
        //     if (angular.isUndefined($scope.subStatus)) {
        //         $scope.subStatus = "";
        //     }
        //     $http.post($scope.hiposServerURL + '/getClientsList?location=' + $scope.location + '&rName=' + $scope.rNam + '&TxnDate=' + $scope.TxnDate +'&subStatus='+ $scope.subStatus).then(function (response) {
        //         var data = response.data;
        //         $scope.clientsList = data;
        //         angular.forEach($scope.clientsList, function (val, key) {
        //             $http.post($scope.hiposServerURL + '/getBankDetailsList?code=' + val.code).then(function (response) {
        //                 var data = response.data;
        //                 $scope.bankDetailsList = data;
        //                 if($scope.bankDetailsList.length>0) {
        //                     val.showDetails = true;
        //                 }
        //             })
        //     })
        //     })
        // };
        // $scope.getClientsList();

        // $scope.getResList = function () {
        //     if (angular.isUndefined($scope.searchText)) {
        //         $scope.searchText = "";
        //     }
        //     $http.post($scope.hiposServerURL + '/getResList?searchText=' + $scope.searchText).then(function (response) {
        //         var data = response.data;
        //         $scope.resList = data;
        //     })
        // }; $scope.getResList();



        // $scope.getRestaurantList = function () {
        //
        //     $http.post($scope.hiposServerURL+'/getRestaurant?searchText=' + $scope.userName ).then(function (response) {
        //         var data = response.data;
        //         $scope.restaurantList = data;
        //     })
        // };
        // $scope.getRestaurantList();

        $scope.getPaginationList = function (page,status){
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

            $http.post($scope.hiposServerURL+'/getPaginationgetRestaurant?searchText=' + $scope.searchText + '&Status=' +status, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                // console.log(data);
                $scope.restaurantList = data.list;
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
        $scope.getPaymentModeList = function () {
            $http.post($scope.hiposServerURL+"/getPaymentModeList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.paymentModeList = data;
            })
        };
        $scope.getPaymentModeList();
        $scope.getClientsList = function () {
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.hiposServerURL + '/getClientsList?searchText=' + $scope.searchText).then(function (response) {
                var data = response.data;
                $scope.clientsList = data;
            })
        };
        $scope.getClientsList();
        // $scope.removeRestaurentDetails = function () {
        //     $scope.rid = "";
        //     $scope.categoryId="";
        //     $scope.service = "";
        //     $scope.user = "";
        //     $scope.Name = "";
        //     $scope.Rname = "";
        //     $scope.Emailid = "";
        //     $scope.Contact = "";
        //     $scope.country = "";
        //     $scope.state = "";
        //     $scope.city = "";
        //     $scope.slug = "";
        //     $scope.Zipcode = "";
        //     $scope.Location = "";
        //     $scope.address1 = "";
        //     $scope.address2 = "";
        //     $scope.cuisinessss = "";
        //     $scope.restaurantType = "";
        //     $scope.tagswebListttt = "";
        //     $scope.orderfacilityyy = "";
        //     $scope.clientServiceee = "";
        //     $scope.discountType = "";
        // };
        $scope.removeMenuList=function(){
            $scope.questionList=[];
        }
        $scope.removeFile = function (index) {
            angular.forEach($scope.fileList,function (val,key) {
                if(index==key){
                    $scope.fileList.splice(index,1)
                }
            })
        };
$scope.Appointment=function (data) {
    $scope.removeApp();
    $scope.id=data.rid;
    $scope.userName=data.appUser;
    $scope.restaurant=data.rName;
    $scope.workProgress=data.workExpCompany;
    $scope.appUser=data.appUser;
    $scope.appTime=data.appUser;
    $scope.appRemarks=data.appRemarks;
    $scope.appDate=data.appDate;
    $("#add_new_Appointment_modal").modal('show');
}

        $scope.Sms = function(res) {
    $http.post($scope.hiposServerURL + '/sendsms?contact=' + res.contact+"&rName="+res.rName +"&appDate="+res.appDate+"&appTime="+res.appTime+"&appUser="+res.appUser).then(function (response) {

    });

    };
$scope.Validity = function () {
            // $scope.rid = rid;
            // $http.post($scope.hiposServerURL + '/New?rid=' + rid).then(function (response) {
            //     var data = response.data;
            $("#add_validity_modal").modal('show');

        };
        $scope.myFunction= function(data) {
            $scope.rid =data.rid;
            $scope.restaurantdata =data;
            $scope.WorkStatus= data.radioValue;
            $scope.active= data.active;
            $scope.assignstatus= data.assignstatus;
            document.getElementById("myDropdown").classList.toggle("show");
        };
        // $scope.myFunction1= function(data) {
        //     $scope.rid =data.rid;
        //     $scope.restaurantdata =data;
        //     document.getElementById("myDropdown1").classList.toggle("show");
        // };
        //
        // $scope.ShareURL=function (data) {
        //     // $window.location.href="https://eatinng.com/restaurantlistdetail/"+'uPeq2J';
        //     $http.post($scope.hiposServerURL+"/ShareURL?id="+data.rid).then(function (response) {
        //         var data = response.data;
        //         Notification.success({
        //             message: ' Message Sent Successfully',
        //             positionX: 'center',
        //             delay: 2000
        //
        //         })
        //     });
        //     };
        $scope.Invoice = function (data) {
            $scope.removeInvoice();
            $http.post($scope.hiposServerURL+"/getInvoiceList?name="+data.parent+"&restName="+data.rName).then(function (response) {
                var data= response.data;
                $scope.paymentList = data;
                $scope.Tamount = $scope.paymentList[0].totalAmount;
                $scope.AgencyName = $scope.paymentList[0].agencyName;
                $scope.Rname  = $scope.paymentList[0].rName;
            })
            $('#modelName').text("Add PriceList");
            $("#submit").text("Save");
            $("#add_new_Invoice_modal").modal('show');
        };
        $scope.getsubscription = function () {
            $http.post($scope.hiposServerURL+"/getsubscriptionList").then(function (response) {
                var data = response.data;
                $scope.subscriptionList = data;
            })
        };
        $scope.getsubscription();
        $scope.getDateList11 = function (document) {
            document.date = new Date();
        };
        $scope.getDateList = function (appDate) {
            $scope.date = $filter('date')(new Date(appDate), 'yyyy-MM-dd');
            $http.post($scope.hiposServerURL + '/getDateList?appDate=' + $scope.date +"&restaurant=" + $scope.restaurant +"&userName=" +$scope.userName).then(function (response) {
                var data = response.data;
                // $("#add_new_Appointment_modal").modal('show');
                $scope.timesList=[];
                var i=9;
                for(var i=9;i<=20;i++){
                    var j=i+":00";
                    if(data.length>0) {
                        if (data.indexOf(j)== -1) {
                            $scope.timesList.push({
                                time: j
                            });
                        }
                    }else {
                        $scope.timesList.push({
                            time: j
                        });
                    }
                }
                // angular.forEach(data, function (val, key) {
                //     // if()
                //     $scope.timesList.push(i)
                // })
            })
        }
        $scope.SaveNotify = function () {

            var saveResDetails;
            saveResDetails = {
                rid : $scope.rid,
                remainderDate: $scope.remainderDate,
                remainderData:$scope.remainderData
            };
            $http.post($scope.hiposServerURL + '/SaveNotify', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if(data==""){
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getPaginationList('',$scope.statusName);

                    $("#add_new_Remainder_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Country Created  successfully',
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



        };
        $scope.New = function (rid) {
            $scope.rid=res.rid;
            $http.post($scope.hiposServerURL + '/New?rid=' + rid).then(function (response) {
                var data = response.data;
                $("#add_new_Status_modal").modal('show');
            })
        }
        $scope.saveNew = function () {
            var saveResDetails;
            saveResDetails = {
                rid : $scope.rid,
                radioValue: $scope.type

            };
            $http.post("/hipos" + '/saveNew', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if(data==""){
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {

                    $scope.getPaginationList('',$scope.statusName);

                    $("#add_new_Status_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Enquiry Created  successfully',
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

            // }
            ;
        };
  $scope.SaveApp = function () {
      $scope.appDate = $filter('date')(new Date($scope.appDate), 'yyyy-MM-dd');
            var saveResDetails;
            saveResDetails = {
                rid : $scope.id,
                rName : $scope.restaurant,
                workProgress : $scope.workProgress,
                appDate : $scope.appDate,
                appUser : $scope.appUserrr,
                appTime : $scope.appTime,
                appRemarks : $scope.appRemarks

            };
            $http.post("/hipos" + '/SaveApp', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if(data==""){
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {

                    $scope.getPaginationList('',$scope.statusName);

                    $("#add_new_Appointment_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Appointment Created  successfully',
                        positionX: 'center',
                        delay: 2000
                    });
                }
            },
                function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });

            // }
            ;
        };


        $scope.Approval=function (data) {
            $http.post('/hipos'+ '/editPayment?rid=' + data.rid).then(function (response) {
                $scope.paymode=data.paymentMode;
                 $scope.actualPricee = data.actualPrice;
                // $scope.amountPaid = data.amountPaid;
                // $scope.balAmountt = $scope.actualPricee - $scope.amountPaid;
                $scope.transactionDate = new Date(data.transactionDate);
                $scope.statusOnline = data.statusOnline;
                $scope.expiryDate =data.expiryDate;
                $("#add_new_payment_modal").modal('show');
                   });
        };
        $scope.balAmount ="";
        $scope.getBalTotal=function(amount){
            if($scope.actualPrice<$scope.totalAmount){
                $scope.amountPaid=0;
                Notification.error({
                    message: 'Amount Paid Should Not Be More Than Total Amount',
                    positionX: 'center',
                    delay: 2000
                });
            }
            $scope.balAmountt = $scope.actualPrice - $scope.amountPaid;
        };
        // $scope.getvalDays=function(data){
        //     $scope.valDays = parseInt(data.amountPaid/10);
        //     $scope.mydate = new Date(data.transactionDate);
        //     var numberOfDaysToAdd = $scope.valDays;
        //     $scope.newdate = $scope.mydate.setDate($scope.mydate.getDate() + numberOfDaysToAdd);
        //     $scope.expiryDate = new Date($scope.newdate);
        // };
        $scope.savepayment = function () {
            var saveDetails;
            saveDetails = {
                rid: $scope.rid,
                paymentMode: $scope.mode,
                actualPrice:$scope.actualPricee,
                amountPaid:$scope.amountPaid,
                balanceAmount: $scope.balAmountt,
                transactionDate: $scope.transactionDate,
                statusOnline: $scope.statusOnline
            };
            $http.post($scope.hiposServerURL +'/savepayment', angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                $scope.getPaginationList('',$scope.statusName);

                if (data == "") {
                    Notification.success({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                $("#add_new_payment_modal").modal('hide');
                Notification.success({
                    message: 'Payment Saved  successfully',
                    positionX: 'center',
                    delay: 2000
                });

            });

        }
        $scope.Assign = function (res) {
            $scope.userAssignedList="";
            $scope.ResObj = res;
            $scope.rid = res.rid;
            $scope.status="assign";
            $http.post($scope.hiposServerURL+"/getUserAssignedList").then(function (response) {
                var data = response.data;
                $scope.userAssignedList = data;
            })
            $("#add_new_Assign_modal").modal('show');
        };
        $scope.download = function () {
            $http.post($scope.hiposServerURL + "/getdownloads?id=" + $scope.rid).then(function (response) {
                var data = response.data;
                $scope. resLiaast = response.data;
                $rootScope.filee=data.file;
                angular.forEach($scope.data,function (val,key) {
                    $scope.filee.push(val.file);
                })
                      });
        };


        $scope.AssignToUser = function(){
            var Details;
            Details = {
                arr:angular.toJson($scope.List)
            };
            $http.post($scope.hiposServerURL+"/AssignToUser?user="+$scope.assigneduser+"&id="+$scope.rid, angular.toJson(Details)).then(function (response) {
                var data = response.data;
                $window.location.reload();
                Notification.success({
                    message: ' Assigned  successfully',
                    positionX: 'center',
                    delay: 2000
                });
                $("#add_new_Assign_modal").modal('hide');
                $scope.getPaginationList('',$scope.statusName);


            })
        }
        $scope.upload = function () {
            $scope.type  = false;
            $http.post($scope.hiposServerURL+"/getUploadDetails?id="+$scope.rid).then(function (response) {
                var data = response.data;
            if(data.file!=null){
                $scope.type = true;
                $scope.showZip = data.file;

            }
                $scope.fileName = data.file;
                $scope.Act = data.uploadStatus;
            });
            $("#add_new_upload_modal").modal('show');
        };
        $scope.imageUpload = function (event) {
            var files = event.target.files;
            var file = files[0];
            var srcString;
            var imageCompressor = new ImageCompressor;
            var compressorSettings = {
                toWidth: 200,
                toHeight: 200,
                mimeType: 'image/png',
                mode: 'strict',
                quality: 1,
                grayScale: false,
                sepia: false,
                threshold: false,
                speed: 'low'
            };
            if (files && file) {
                var reader = new FileReader();
                reader.onload = function (readerEvt) {
                    binaryString = readerEvt.target.result;
                    $('.image-preview').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                };
            }
        };
        function proceedCompressedImage(compressedSrc) {
            $('#image-preview').attr('src', compressedSrc);
            $scope.fileToUpload = compressedSrc;
        }


        $scope.editRes = function(data) {
            $scope.rid = data.rid;
            $scope.categoryId = $scope.CategoryBasedOnService(data.product);
            $scope.service = data.service;
            $scope.user = data.user;
            $scope.Name =data.name;
            $scope.Rname = data.rName;
            $scope.Emailid = data.email;
            $scope.Contact = data.contact;
            $scope.country =parseInt( data.country);
            $scope.state =parseInt( data.state);
            $scope.city = data.city;
            $scope.Zipcode = data.zipcode;
            // $scope.Emailid = data.email;
            $scope.location = data.location;
            $scope.address1 = data.addressOne;
            $scope.address2 = data.addressTwo;
            // $scope.Zipcode = data.zipcode;
            $scope.operation='Edit';
            $('#res-title').text("Edit Restaurant");
            $("#submit").text("Update");
            $("#add_new_res_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.inactiveButton = function (){
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
                var page = "Page";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
                var page = "";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginationList('',$scope.statusName);

        };

        $scope.addRes = function () {
            $scope.getCountryList();
                $scope.categoryId=null;
                $scope.service=null;
                $scope.location=null;
                $scope.subscription=null;
            $scope.removeresDetails();
            $scope.parent=$rootScope.nameagency;
            $('#res-title').text("Add Restaurant");
            $("#submit").text("Save");
            $("#add_new_res_modal").modal('show');
        }
        $scope.orderfacility=[];
        $scope.addMore = function (aaa) {
            $("#add_new_Client_modal").modal('hide');
            if(angular.isUndefined(aaa)){
                $("#add_new_Cleint_MoreDetails_modal").modal('show');
            }else {
                $scope.Rname = $scope.Rname,
                $scope.owner = aaa.owner,
                    $scope.openingStatus = aaa.opening_status,
                    $scope.alcohal = aaa.alcohal,
                    $scope.cardsCash = aaa.cardsCash
                    // $scope.clientService=parseInt(aaa.clientService);
                    $scope.clientService=[];
                    $scope.serv=angular.fromJson(aaa.clientService);
                    angular.forEach($scope.clientserviceListttt,function (val,key) {
                    if($scope.serv.indexOf(val.id)!=-1){
                        val.clientServiceee=true;
                    }else {
                        val.clientServiceee=false;
                    }
                })
                    // $scope.orderfacility=parseInt(aaa.orderfacility);
                $scope.orderfac=angular.fromJson(aaa.orderfacility);
                angular.forEach($scope.orderfacilityListttt,function (val,key) {
                    if($scope.orderfac.indexOf(val.id)!=-1){
                        val.orderfacilityyy=true;
                    }else {
                        val.orderfacilityyy=false;
                    }
                })
                    //  $scope.clientService = aaa.serv,
                    // $scope.orderfacility = aaa.orderfacility,
                    $scope.seating = aaa.seating,
                    $scope.deliveryTime = aaa.deliveryTime,
                    $scope.deliveryPrice = aaa.deliveryPrice,
                    $scope.restaurantType = parseInt(aaa.resturent_type_id),
                    $scope.discountType = parseInt(aaa.discountType),
                        $scope.cusin=[];
                // $scope.cusin=parseInt(aaa.cuisines);
                $scope.cusin=angular.fromJson(aaa.cuisines);
                angular.forEach($scope.cusineListttt,function (val,key) {
                    if($scope.cusin.indexOf(val.id)!=-1){
                        val.cuisinessss=true;
                    }else {
                        val.cuisinessss=false;
                    }
                })
                    // $scope.cusin = aaa.cuisines,
                $scope.tagggg=[];
                // $scope.tagggg=parseInt(aaa.tags);
                $scope.tagggg=angular.fromJson(aaa.tags);
                angular.forEach($scope.tagswebListttt,function (val,key) {
                    if($scope.tagggg.indexOf(val.id)!=-1){
                        val.tagss=true;
                    }else {
                        val.tagss=false;
                    }
                })
                    // $scope.tagggg = aaa.tags,
                    $scope.Rname = $scope.Rname,
                    $scope.paymentMode = aaa.paymentMode,
                    $scope.amountPaid = aaa.amountPaid,
                    $scope.transactionDate=new Date(aaa.transactionDate)
                $("#add_new_Cleint_MoreDetails_modal").modal('show');
            }

        };
        $scope.listing=null;
        $scope.MoreDetails = function (res) {
            $scope.gettagswebList();
            $scope.getClientServiceList();
            $scope.getOrderFacilityList();
            $scope.getRestypewebList();
            $scope.getDiscountwebList();
            $scope.getcuisines();
            $scope.rid=res.rid;
            $scope.rName=res.rName;
            $scope.categoryId=res.product;
            $scope.service=res.service;
            $scope.user=res.user;
            $scope.Name=res.name;
            $scope.RName=res.rName;
            $scope.Emailid=res.email;
            $scope.Contact=res.contact;
            $scope.country=res.country;
            $scope.state=res.state;
            $scope.city=res.city;
            $scope.location=res.location;
            $scope.address1=res.addressOne;
            $scope.address2=res.addressTwo;
            $scope.Zipcode=res.zipcode;
            $scope.company=res.rName;
            $scope.address2=res.addressTwo;
            $scope.transactionDate=new Date();
            $scope.statusOnline=res.statusOnline;
            $("#add_new_More_res_modal").modal('show');

        };

        $scope.removeList = function () {
            $scope.clientserviceListttt=[];
        };
        $scope.addClientRes = function () {
            $scope.rid = "";
            $scope.categoryId = "";
            $scope.service = "";
            $scope.user = "";
            $scope.Name = "";
            $scope.Rname = "";
            $scope.Emailid = "";
            $scope.Contact = "";
            $scope.country = null;
            $scope.state = null;
            $scope.city = null;
            $scope.slug = "";
            $scope.Zipcode = "";
            $scope.address1 = "";
            $scope.address2 = "";
            $scope.cuisinessss = "";
            $scope.restaurantType = null;
            $scope.tagswebListttt = "";
            $scope.orderfacilityyy = "";
            $scope.clientServiceee = "";
            $scope.discountType = null;
            $scope.categoryId = null;
            $scope.paymentMode = null;
            $scope.service = null;
            $scope.subscription = null;
            $scope.location = null;
            $scope.transactionDate = new Date();
            $scope.removeresDetails();
            $scope.parent = $rootScope.nameagency;
            $scope.getCountryList();
            $scope.gettagswebList();
            $scope.getDiscountwebList();
            $scope.getClientServiceList();
            $scope.getOrderFacilityList();
            $scope.getcuisines();
            $scope.getRestypewebList();
            $('#res-title').text("Add Restaurant");
            $("#submit").text("Save");
            $("#add_new_Client_modal").modal('show');
        };

        $scope.AgencyPay = function (res) {
            $scope.rid=res.rid;
            $scope.rName=res.rName;
            $scope.parent=$rootScope.nameagency;
            $('#res-title').text("Payment Details");
            $("#submit").text("Save");
            $("#add_new_pay_modal").modal('show');
        };

        $scope.importCountry = function(){
            $("#import_Country").modal('show');
        }

        $scope.getBankDetailsList = function (res) {
                $http.post($scope.hiposServerURL+"/getBankDetailsList?code="+res.code).then(function (response) {
                var data = response.data;
                $scope.bankDetailsList = data;
                angular.forEach($scope.bankDetailsList,function (val,key) {
                    $scope.code=val.code;
                $scope.rName1 = res.rName;
                $scope.registration = val.registration;
                $scope.panCard = val.panCard;
                $scope.gst = val.gst;
                $scope.gstState = val.gstState;
                $scope.legalStatus = val.legalStatus;
                $scope.natureBusiness = val.natureBusiness;
                $scope.office = val.office;
                $scope.person = val.person;
                $scope.personNo = val.personNo;
                $scope.personEmail = val.personEmail;
                $scope.beneficiaryName = val.beneficiaryName;
                $scope.accNo = val.accNo;
                $scope.ifscCode = val.ifscCode;
                $scope.bankName = val.bankName;
                $scope.accountType = val.accountType;
                $scope.merchantId = val.merchantId;
                $scope.apiKey = val.apiKey;
                $scope.merchantUname = val.merchantUname;
                $scope.merchantPswd = val.merchantPswd;
                $scope.pancardimages = val.pancardImages;
                $scope.gstimages = val.gstImages;
                $("#add_new_bank_modal").modal('show');
                })

            })
        };


        $scope.CategoryBasedOnService = function(category){
            var url = "/hipos/CategoryBasedOnService?categoryId=" + category;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.serviceList = angular.copy(data);

            })
        }
        $scope.saveRes = function () {
            if ($scope.categoryId == ''||$scope.categoryId==null||angular.isUndefined($scope.categoryId)) {
                Notification.warning({message: 'Product can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.service == ''||$scope.service==null||angular.isUndefined($scope.service)) {
                Notification.warning({message: 'Service can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.Name == ''||$scope.Name==null||angular.isUndefined($scope.Name)) {
                Notification.warning({message: 'CustomerName can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.address1 == ''||$scope.address1==null||angular.isUndefined($scope.address1)) {
                Notification.warning({message: 'Address1 can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.address2 == ''||$scope.address2==null||angular.isUndefined($scope.address2)) {
                Notification.warning({message: 'Address2 can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.country == ''||$scope.country==null||angular.isUndefined($scope.country)) {
                Notification.warning({message: 'Country can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.state == ''||$scope.state==null||angular.isUndefined($scope.state)) {
                Notification.warning({message: 'State can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.city == ''||$scope.city==null||angular.isUndefined($scope.city)) {
                Notification.warning({message: 'City can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.user == ''||$scope.user==null||angular.isUndefined($scope.user)) {
                Notification.warning({message: 'User can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.Rname == ''||$scope.Rname==null||angular.isUndefined($scope.Rname)) {
                Notification.warning({message: 'Restaurant Name can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.Emailid == ''||$scope.Emailid==null||angular.isUndefined($scope.Emailid)) {
                Notification.warning({message: 'Email can not be empty', positionX: 'center', delay: 2000});
            } else if($scope.Contact == ''||$scope.Contact==null||angular.isUndefined($scope.Contact)) {
                Notification.warning({message: 'Contact can not be empty', positionX: 'center', delay: 2000});
            } else if($scope.slug == ''||$scope.slug==null||angular.isUndefined($scope.slug)) {
                Notification.warning({message: 'URL can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveResDetails;
            saveResDetails = {
                rid : $scope.rid,
                product: $scope.categoryId,
                parent: $scope.parent,
                service: $scope.service,
                subscriptionName: $scope.subscription,
                user: $scope.user,
                name: $scope.Name,
                rName: $scope.Rname,
                email: $scope.Emailid,
                contact: $scope.Contact,
                country: $scope.country,
                state: $scope.state,
                city: $scope.city,
                location: $scope.location,
                slug: $scope.slug,
                companyname: $scope.Rname,
                addressOne: $scope.address1,
                addressTwo: $scope.address2,
                zipcode: $scope.Zipcode,
                radioValue: $scope.radioValue,
                paymentStatus: $scope.paymentStatus,
                statusOnline: "Pending",
                status: $scope.status,
                subscriptionName: $scope.subscription,
                listing:$scope.listing,
                custStatus:$scope.custstatus,
                callbackDate:$scope.callbackDate,
                callbackTime:$scope.callbacktime
                };
                $http.post("/hipos" + '/saveResDetails', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {

                        $scope.getPaginationList('',$scope.statusName);
                        $("#add_new_res_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Enquiry Created  successfully',
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
        $scope.importEnq = function () {
            $("#add_new_enq_import_modal").modal('show');
        };

        $scope.viewQR = function (res) {
            $http.post("/hipos" + '/viewQr?id='+res.rid).then(function (response) {
                var data = response.data;
                $scope.qr = data.qrImage;
                $("#add_new_QR").modal('show');
            });
        }
        $scope.saveClients = function () {
            rid : $scope.rid,
                $scope.CSlist = [];
            angular.forEach($scope.clientserviceListttt, function (val, key) {
                if (val.clientServiceee == true) {
                    $scope.CSlist.push(val.id);
                }
            })
            $scope.OfList = [];
            angular.forEach($scope.orderfacilityListttt, function (val, key) {
                if (val.orderfacilityyy == true) {
                    $scope.OfList.push(val.id);
                }
            })
            $scope.CuiList = [];
            angular.forEach($scope.cusineListttt, function (val, key) {
                if (val.cuisinessss == true) {
                    $scope.CuiList.push(val.id);
                }
            })
            $scope.TgList = [];
            angular.forEach($scope.tagswebListttt, function (val, key) {
                if (val.tagss == true) {
                    $scope.TgList.push(val.id);
                }
            })
            if ($scope.seating == '' || $scope.seating == null || angular.isUndefined($scope.seating)) {
                Notification.warning({message: 'Seating can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.openingStatus == '' || $scope.openingStatus == null || angular.isUndefined($scope.openingStatus)) {
                Notification.warning({message: 'Opening Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.alcohal == '' || $scope.alcohal == null || angular.isUndefined($scope.alcohal)) {
                Notification.warning({message: 'Alchohal Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.cardsCash == '' || $scope.cardsCash == null || angular.isUndefined($scope.cardsCash)) {
                Notification.warning({message: 'Payment Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.serv == '' || $scope.serv == null || angular.isUndefined($scope.serv)) {
                Notification.warning({
                    message: 'Client Services Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.orderfac == '' || $scope.orderfac == null || angular.isUndefined($scope.orderfac)) {
                Notification.warning({
                    message: 'OrderFacility Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.seating == '' || $scope.seating == null || angular.isUndefined($scope.seating)) {
                Notification.warning({message: ' Seating Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.deliveryTime == '' || $scope.deliveryTime == null || angular.isUndefined($scope.deliveryTime)) {
                Notification.warning({message: 'DeliveryTime  can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.deliveryPrice == '' || $scope.deliveryPrice == null || angular.isUndefined($scope.deliveryPrice)) {
                Notification.warning({message: 'DeliveryPrice can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.restaurantType == '' || $scope.restaurantType == null || angular.isUndefined($scope.restaurantType)) {
                Notification.warning({message: 'RestaurantType can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.cusin == '' || $scope.cusin == null || angular.isUndefined($scope.cusin)) {
                Notification.warning({message: 'Cuisines can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.tagggg == '' || $scope.tagggg == null || angular.isUndefined($scope.tagggg)) {
                Notification.warning({message: 'Tags can not be empty', positionX: 'center', delay: 2000});
            }else if ($scope.slug == '' || $scope.slug == null || angular.isUndefined($scope.slug)) {
                Notification.warning({message: 'URL can not be empty', positionX: 'center', delay: 2000});
            } else {
                $scope.isDisabled = true;
                $timeout(function () {
                    $scope.isDisabled = false;
                }, 3000)
                var saveResDetails;
                saveResDetails = {
                    rid: $scope.rid,
                    subscriptionName: $scope.subscription,
                    product: $scope.categoryId,
                    parent: $scope.parent,
                    service: $scope.service,
                    user: $scope.user,
                    name: $scope.Name,
                    rName: $scope.Rname,
                    email: $scope.Emailid,
                    contact: $scope.Contact,
                    country: $scope.country,
                    slug: $scope.slug,
                    state: $scope.state,
                    city: $scope.city,
                    location: $scope.location,
                    companyname: $scope.Rname,
                    addressOne: $scope.address1,
                    addressTwo: $scope.address2,
                    zipcode: $scope.Zipcode,
                    radioValue: $scope.radioValue,
                    owner: $scope.owner,
                    opening_status: $scope.openingStatus,
                    alcohal: $scope.alcohal,
                    cardsCash: $scope.cardsCash,
                    // clientService: angular.toJson($scope.CSlist),
                    // orderfacility: angular.toJson($scope.OfList),
                    clientService:angular.toJson($scope.serv),
                    orderfacility:angular.toJson($scope.orderfac),
                    seating: $scope.seating,
                    deliveryTime: $scope.deliveryTime,
                    deliveryPrice: $scope.deliveryPrice,
                    resturent_type_id: $scope.restaurantType,
                    discountType: $scope.discountType,
                    // cuisines: angular.toJson($scope.CuiList),
                    // tags: angular.toJson($scope.TgList),
                    cuisines: angular.toJson($scope.cusin),
                    tags: angular.toJson($scope.tagggg),
                    companyname: $scope.Rname,
                    paymentMode: $scope.paymentMode,
                    amountPaid: $scope.amountPaid,
                    transactionDate: $scope.transactionDate,
                    statusOnline: "Success",
                    status: $scope.status
                };
                $http.post("/hipos" + '/saveClients', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getPaginationList('',$scope.statusName);
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }else{
                        if (data.status == 'success') {
                        $("#add_new_Cleint_MoreDetails_modal").modal('hide');
                        $("#add_new_Client_modal").modal('hide');
                            $scope.getPaginationList('',$scope.statusName);
                            Notification.success({
                            message:'Saved Successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }else if(data.message=='Email id is duplicate'){
                            Notification.warning({
                                message:data.message,
                                positionX: 'center',
                                delay: 2000
                            });
                        }else{
                            if(data=='success'){
                                Notification.success({
                                    message:data,
                                    positionX: 'center',
                                    delay: 2000
                                });
                                $("#add_new_Cleint_MoreDetails_modal").modal('hide');
                                $("#add_new_Client_modal").modal('hide');
                            }
                        }
                    }

                });
            }
            ;
        };
        $scope.selectedservice= [];
        $scope.selectServices = function (id) {
            var index = $scope.selectedservice.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedservice.splice(index, 1);
            }else {
                $scope.selectedservice.push(id);
            }
            $scope.serv= $scope.selectedservice;
        };
        var expanded5 = false;
        $scope.showCheckboxes5=function() {
            var checkboxes5 = document.getElementById("checkboxes5");
            if (!expanded5) {
                checkboxes5.style.display = "block";
                expanded5 = true;
            } else {
                checkboxes5.style.display = "none";
                expanded5 = false;
            }
        };
        $scope.selectedordfer= [];
        $scope.selectOrderFac = function (id) {
            var index = $scope.selectedordfer.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedordfer.splice(index, 1);
            }else {
                $scope.selectedordfer.push(id);
            }
            $scope.orderfac= $scope.selectedordfer;
        };
        var expanded6 = false;
        $scope.showCheckboxes6=function() {
            var checkboxes6 = document.getElementById("checkboxes6");
            if (!expanded6) {
                checkboxes6.style.display = "block";
                expanded6 = true;
            } else {
                checkboxes6.style.display = "none";
                expanded6 = false;
            }
        }
        $scope.selectedcui= [];
        $scope.selectCuisines = function (id) {
            var index = $scope.selectedcui.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedcui.splice(index, 1);
            }else {
                $scope.selectedcui.push(id);
            }
            $scope.cusin= $scope.selectedcui;
        };
        var expanded3 = false;
        $scope.showCheckboxes3=function() {
            var checkboxes3 = document.getElementById("checkboxes3");
            if (!expanded3) {
                checkboxes3.style.display = "block";
                expanded3 = true;
            } else {
                checkboxes3.style.display = "none";
                expanded3 = false;
            }
        }
        $scope.selectedtag= [];
        $scope.selectTags = function (id) {
            var index = $scope.selectedtag.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedtag.splice(index, 1);
            }else {
                $scope.selectedtag.push(id);
            }
            $scope.tagggg= $scope.selectedtag;
        };
        var expanded4 = false;
        $scope.showCheckboxes4=function() {
            var checkboxes4 = document.getElementById("checkboxes4");
            if (!expanded4) {
                checkboxes4.style.display = "block";
                expanded4 = true;
            } else {
                checkboxes4.style.display = "none";
                expanded4 = false;
            }
        }


        // $scope.getCityList = function (){
        //     $http.post($scope.hiposServerURL+"/getCityList").then(function (response) {
        //         var data = response.data;
        //         $scope.cityList = data;
        //     })
        // };
        // $scope.getCityList();
        // $scope.getStateList = function () {
        //     $http.post($scope.hiposServerURL+"/getStateList").then(function (response) {
        //         var data = response.data;
        //         $scope.stateList = data;
        //     })
        // };
        // $scope.getStateList();
        // $scope.getCountryList = function () {
        //     $http.post($scope.hiposServerURL+"/getCountryList").then(function (response) {
        //         var data = response.data;
        //         $scope.countryList = data;
        //     })
        // };
        // $scope.getCountryList();
        // $scope.countryState = function(country){
        //     var url = "/hipos/getCountryState?countryId=" + country;
        //     $http.post(url).then(function (response) {
        //         var data = response.data;
        //         $scope.stateList = angular.copy(data);
        //
        //     })
        // }
        // $scope.stateCity = function(state){
        //     var url = "/hipos/getStateCity?stateId=" + state;
        //     $http.post(url).then(function (response) {
        //         var data = response.data;
        //         $scope.cityList = angular.copy(data);
        //     })
        // }

        $scope.saveUpload = function () {

            if ($scope.Act === ''||$scope.Act==null||angular.isUndefined($scope.Act)) {
                Notification.warning({message: 'Please Add Status', positionX: 'center', delay: 2000});
            }
            var data = new FormData();
            angular.forEach($scope.fileList,function (val,key) {
                $scope.files.push(val.file);
            })
            for (var i = 0; i < $scope.files.length; i++) {
                data.append("files", $scope.files[i]);
            }
            var config = {
                transformRequest: angular.identity,
                transformResponse: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
            {
                var saveRoleDetails;
                saveRoleDetails = {
                    rid:$scope.rid,
                    file: $scope.data,
                    uploadStatus: $scope.Act
                };
                data.set("saveRoleDetails",angular.toJson(saveRoleDetails));
                $http.post($scope.hiposServerURL + "/saveuploadFile", data,config).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'UploadImage', positionX: 'center', delay: 2000});
                    }
                    else {
                        // $scope.removeRoles();
                       // $scope.removeUpload();
                        $scope.getPaginationList('',$scope.statusName);

                        $("#add_new_upload_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: ' Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                }, function (error) {
                    Notification.warning({
                        message: 'FileSize Should be lessthan 1MB',
                        positionX: 'center',
                        delay: 2000
                    });
                });

            }
            ;
        };

        $scope.fileList=[];
        $scope.fileList.push({id:$scope.fileList.length});
        $scope.addNewFile=function () {
            $scope.fileList.push({id:$scope.fileList.length});
        }
        $scope.files=[];
        $scope.showFileName=function (event) {
            angular.forEach($scope.fileList,function (val,key) {
                if($scope.fileId==key){
                    val.file=event.target.files[0];

                    var files = event.target.files;
                    var file = files[0];
                    var srcString;
                    var imageCompressor = new ImageCompressor;
                    var compressorSettings = {
                        toWidth: 200,
                        toHeight: 200,
                        mimeType: 'image/png',
                        mode: 'strict',
                        quality: 1,
                        grayScale: false,
                        sepia: false,
                        threshold: false,
                        speed: 'low'
                    };
                    if (files && file) {
                        var reader = new FileReader();
                        reader.onload = function (readerEvt) {
                            binaryString = readerEvt.target.result;
                            $('.image-preview').attr('src', binaryString);
                        };
                        reader.readAsDataURL(file);
                        reader.onloadend = function () {
                            srcString = $('.image-preview').attr("src");
                            imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                        };
                    }}
            })
        }
        $scope.setId=function (id) {
            $scope.fileId=id;
        }
        $scope.savePay = function () {
            if ($scope.agAmount == ''||$scope.agAmount==null||angular.isUndefined($scope.agAmount)) {
                Notification.warning({message: 'Amount can not be empty', positionX: 'center', delay: 2000});
            }
            var saveAgPayDetails;
            saveAgPayDetails = {
                rid : $scope.rid,
                agAmount: $scope.agAmount

            };
            $http.post("/hipos" + '/saveAgPayment', angular.toJson(saveAgPayDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                // if(data==""){
                //     Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                // }
                {
                    // $scope.removeCountryDetails();
                    $scope.getPaginationList('',$scope.statusName);

                    $("#add_new_pay_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Payment Created  successfully',
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


        };
        $scope.saveEnqImport = function(){
            $scope.isDisabled= true;
            var formElement = document.getElementById("enqDetails");
            var enqDetails = new FormData(formElement);
            $http.post("/hipos" + '/saveEnqImport',enqDetails,
                { headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#add_new_enq_import_modal").modal('hide');
                $scope.getPaginationList('',$scope.statusName);

                $scope.isDisabled= false;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                }
            )
        }
        $scope.deleteList = function (data) {
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
                callback: function (result) {
                    var Details;
                    Details = {
                        arr:angular.toJson($scope.List)
                    };
                    if (result == true) {
                        $http.post("/hipos" + '/deleteList?listId='+ data,angular.toJson(Details)).then(function (response) {
                            var data = response.data;
                            // $scope.status = data.getResList;
                            if ($scope.status == "InActive") {
                                Notification.success({
                                    message: 'It is Already in use So Status Changes to Inactive',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            } else {
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                            $scope.getPaginationList('',$scope.statusName);

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

        $scope.saveAccountDetails = function () {
            var saveAccountDetails;
            saveAccountDetails = {
                code: $scope.code,
                registration: $scope.registration,
                panCard:$scope.panCard,
                gst:$scope.gst,
                gstState: $scope.gstState,
                legalStatus: $scope.legalStatus,
                natureBusiness: $scope.natureBusiness,
                office: $scope.office,
                person: $scope.person,
                personNo: $scope.personNo,
                personEmail: $scope.personEmail,
                beneficiaryName: $scope.beneficiaryName,
                accNo: $scope.accNo,
                ifscCode: $scope.ifscCode,
                bankName: $scope.bankName,
                accountType: $scope.accountType,
                merchantId: $scope.merchantId,
                apiKey: $scope.apiKey,
                merchantUname: $scope.merchantUname,
                merchantPswd: $scope.merchantPswd,
                pancardImages: $scope.pancardimages,
                gstImages: $scope.gstimages,
            };
            $http.post($scope.hiposServerURL +'/saveAccountDetails', angular.toJson(saveAccountDetails)).then(function (response) {
                var data = response.data;
                $scope.getPaginationList('',$scope.statusName);

                if (data == "") {
                    Notification.success({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                $("#add_new_bank_modal").modal('hide');
                Notification.success({
                    message: 'Payment Saved  successfully',
                    positionX: 'center',
                    delay: 2000
                });

            });

        }
        $scope.BankApproval = function (data) {
            $scope.merchantId="";
            $scope.apiKey="";
            $scope.merchantUname="";
            $scope.merchantPswd="";
            $scope.code=data;
            $("#add_new_Approval_modal").modal('show');
        };
        $scope.menuDetails = function (res) {
            $scope.rid=res.rid;
            $scope.categoryName=null;
            $rootScope.resDetails=res;
            $scope.addNewQuestions();
            $scope.getAllCategoryList();
            $scope.getAllShiftList();
            $scope.getItemList();
            $("#add_new_assessment_Questions_modal").modal('show');
        };
        $scope.questionList=[];
        $scope.addNewQuestions = function () {
            $scope.questionList.push({
                categoryName:''
            })
            $scope.multipleChoiceList=[];
        }
        $scope.removeaaa = function () {
            $scope.questionList.pop();
        };
        $scope.multipleChoiceList=[];
        $scope.getmultipleList = function (q) {
            if(q.multipleChoiceList==undefined){
                q.multipleChoiceList=[];
            }
            q.multipleChoiceList.push({
                price: ''
            })
        };
        $scope.categoryAdd = function () {
            $scope.CategoryNameText="";
            $scope.DescText="";
            $scope.StatusText="Active";
            $("#add_new_category_modal").modal('show');
        };
          $scope.shiftTime = function (res) {
              $scope.shiftname= null;
              $scope.days= null;
              $scope.fromTime= "";
              $scope.toTime= "";
              $scope.status= "Active";
              $scope.openingStatus= "open";
              $rootScope.resDetails=res;
              $scope.getAllShiftList();
              $("#add_new_Item_modal").modal('show');
        };
        
        $scope.removemultiplechoice = function(index,q){
            q.multipleChoiceList.splice(index,1);
        };
        $scope.getItemList = function () {
            var resDetails=$rootScope.resDetails;
            $http.post($scope.hiposServerURL + '/getAllItemList?searchText=' +""+"&restConnectId=" +resDetails.locationConnectId+"&restCode=" +resDetails.code).then(function (response) {
                var data = response.data;
                $scope.itemList = data.data;
            })
        };
        $scope.getAllCategoryList = function () {
            var resDetails=$rootScope.resDetails;
            $http.post($scope.hiposServerURL + '/getAllCategoryList?&restConnectId=' +resDetails.locationConnectId+"&restCode=" +resDetails.code).then(function (response) {
                var data = response.data;
                $scope.menucategorys = data.data;
            })
        };
        $scope.restLogin = function (res) {
            var resDetails=res;
            $http.post($scope.hiposServerURL + '/restLogin?&email=' +resDetails.email+"&contact=" +resDetails.contact).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.success({message: data.message, positionX: 'center', delay: 2000});
                }
                Notification.success({
                    message: data.message,
                    positionX: 'center',
                    delay: 2000
                });

            })
        };
        $scope.getAllShiftList = function () {
            var resDetails=$rootScope.resDetails;
            $http.post($scope.hiposServerURL + '/getAllShiftList?&restConnectId=' +resDetails.locationConnectId+"&restCode=" +resDetails.code).then(function (response) {
                var data = response.data;
                $scope.shiftList = data.data;

            })
        };
        // $scope.getItemList();
        $scope.SaveBankApproval = function () {
            var saveAccountDetails;
            saveAccountDetails = {
                 code:$scope.code,
                merchantId: $scope.merchantId,
                apiKey: $scope.apiKey,
                merchantUname: $scope.merchantUname,
                merchantPswd: $scope.merchantPswd

            };
            $http.post($scope.hiposServerURL +'/saveAccountDetails', angular.toJson(saveAccountDetails)).then(function (response) {
                var data = response.data;
                $scope.getPaginationList('',$scope.statusName);

                if (data == "") {
                    Notification.success({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                $("#add_new_Approval_modal").modal('hide');
                Notification.success({
                    message: 'Payment Saved  successfully',
                    positionX: 'center',
                    delay: 2000
                });

            });

        }
        $scope.isDisabled = false;
        $scope.saveList = function () {
            var flag = false;
            $scope.isDisabled= true;
                angular.forEach($scope.questionList, function (val, key) {
                    if (val.categoryName == null || val.categoryName == "" || angular.isUndefined(val.categoryName)) {
                        Notification.warning({message: 'Please Select Category', positionX: 'center', delay: 2000})
                        flag = true;
                        $scope.isDisabled= false;
                    }
                });
                if(flag==false) {
                    angular.forEach($scope.questionList, function (value, key) {
                        if (value.multipleChoiceList.length == 0) {
                            Notification.warning({message: 'Please Select Item', positionX: 'center', delay: 2000})
                            flag = true;
                            $scope.isDisabled= false;

                        } else {
                            angular.forEach(value.multipleChoiceList, function (val, key) {
                                if (val.itemname == null || val.itemname == "" || angular.isUndefined(val.itemname)) {
                                    Notification.warning({
                                        message: 'Please Select Item Name',
                                        positionX: 'center',
                                        delay: 2000
                                    })
                                    flag = true;
                                    $scope.isDisabled= false;

                                } else if (val.price == null || val.price == "" || angular.isUndefined(val.price)) {
                                    Notification.warning({
                                        message: 'Please Add Price',
                                        positionX: 'center',
                                        delay: 2000
                                    })
                                    flag = true;
                                    $scope.isDisabled= false;

                                } else if (val.shiftname == null || val.shiftname == "" || angular.isUndefined(val.shiftname)) {
                                    Notification.warning({
                                        message: 'Please Select Shift',
                                        positionX: 'center',
                                        delay: 2000
                                    })
                                    flag = true;
                                    $scope.isDisabled= false;

                                }
                            });
                        }
                    })
                }

            if(flag==false) {
                var resDetails = $rootScope.resDetails;
                $rootScope.questionLists = angular.copy($scope.questionList);
                angular.forEach($rootScope.questionLists, function (val, key) {
                    val.categoryId = val.categoryName.category_id;
                    angular.forEach(val.multipleChoiceList, function (value, key) {
                        value.item_creater_id = value.name.item_creater_id;
                        value.itemName = value.name.name;
                        value.type = value.name.type;
                        value.name = "";
                    })
                    val.categoryName = [];
                })
                var saveDetails;
                saveDetails = {
                    rid: $scope.rid,
                    list: angular.toJson($rootScope.questionLists)
                };
                $http.post($scope.hiposServerURL + '/saveList?&restConnectId=' + resDetails.locationConnectId + "&restCode=" + resDetails.code, angular.toJson(saveDetails)).then(function (response) {
                    var data = response.data;
                    $("#add_new_assessment_Questions_modal").modal('hide');
                    $scope.removeMenuList();
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: ' Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    $scope.isDisabled= false;
                }, function (error) {
                    $scope.isDisabled= false;
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            }
        };
        $scope.removeCategoryDetails = function () {
            $scope.CategoryNameText = "";
            $scope.DescText = "";
            $scope.StatusText =null;
        };
       
        
        $scope.saveCategory = function () {
            var resDetails=$rootScope.resDetails;
            if ($scope.CategoryNameText == ''||$scope.CategoryNameText==null||angular.isUndefined($scope.CategoryNameText)) {
                Notification.warning({message: 'Category Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                var saveCategoryDetails;
                saveCategoryDetails = {
                    categoryName: $scope.CategoryNameText,
                    description:$scope.DescText,
                    price:$scope.PriceText,
                    status:$scope.StatusText
                };
                $http.post($scope.hiposServerURL + '/saveMenuCategory?&restConnectId=' +resDetails.locationConnectId+"&restCode=" +resDetails.code, angular.toJson(saveCategoryDetails, "Create")).then(function (response, status, headers, config) {
                    var resdata = response.data;
                    if(resdata==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeCategoryDetails();
                        $http.post($scope.hiposServerURL + '/getAllCategoryList?&restConnectId=' +resDetails.locationConnectId+"&restCode=" +resDetails.code).then(function (response) {
                            var data = response.data;
                            $scope.menucategorys.push(data.data[data.data.length-1]);
                            $("#add_new_category_modal").modal('hide');
                            Notification.success({
                                message: resdata.message,
                                positionX: 'center',
                                delay: 2000
                            });
                        })
                    }
                }, function (error) {
                    Notification.error({
                        message:"Please Click on Rest Login",
                        positionX: 'center',
                        delay: 2000
                    });
                    $("#add_new_category_modal").modal('show');
                });

            };
        };



        $scope.removeShiftDetails = function () {
            $scope.shiftId = "";
            $scope.shiftname = "";
            $scope.toTime ="";
            $scope.fromTime ="";
            $scope.status ="Active";
            $scope.openingStatus ="Open";
            $scope.days ="allDays";
        };
        $scope.saveShiftTime = function () {
            var resDetails=$rootScope.resDetails;
            if ($scope.shiftname == ''||$scope.shiftname==null||angular.isUndefined($scope.shiftname)) {
                Notification.warning({message: 'Shift Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveCategoryDetails;
                saveCategoryDetails = {
                    shiftId : $scope.shiftId,
                    shiftname: $scope.shiftname,
                    toTime:$scope.toTime,
                    fromTime:$scope.fromTime,
                    status:$scope.status,
                    openingStatus:$scope.openingStatus,
                    days:$scope.days,
                    
                };
                $http.post($scope.hiposServerURL + '/saveShiftTime?&restConnectId=' +resDetails.locationConnectId+"&restCode=" +resDetails.code, angular.toJson(saveCategoryDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeShiftDetails();
                        $("#add_new_Item_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.categorySearchText = "";
                        }
                        Notification.success({
                            message:data.message,
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

        $scope.TaskCompleted = function (data) {
            bootbox.confirm({
                title: "Alert",
                message: "Do you want to Submit your Task ?",
                buttons: {
                    confirm: {
                        label: 'OK'
                    },
                    cancel: {
                        label: 'Cancel'
                    }
                },
                callback: function (result) {
                    if (result == true) {
                        $http.post($scope.hiposServerURL + "/TaskCompleted?id=" + data.rid).then(function (response) {
                            var data = response.data;
                            $window.location.reload();
                            Notification.success({
                                message: 'Task Completed Successfully',
                                positionX: 'center',
                                delay: 2000
                            });

                        });
                    }
                }
            });
        }
        $scope.CheckUrlAvailability=function (slug) {
            $scope.urlValue=false;
            $http.post("/hipos" + '/CheckUrlAvailability?slug='+slug).then(function (response, status, headers, config) {
                var data = response.data;
                $scope.message=data.message;
                if(data.status=="success"){
                    $scope.urlValue=true;
                }
            });
        }

        $scope.ClientOpen = function (data) {
            $scope.raj=false;
            $scope.resData = data;

            $("#add_new_Open_modal").modal('show');
        };
        $scope.ClientPayment=function (res) {
            $scope.raj=true;
            $("#add_new_Open_modal").modal('show');
            $http.post("/hipos" + '/ClientPayment', angular.toJson(res, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                $scope.getPaginationList('',$scope.statusName);
                if(data.status!="success"){
                    Notification.warning({
                        message: data.message,
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.raj=false;
                    $("#add_new_Open_modal").modal('show');
                } else if(data.status=="success"){
                    $scope.raj=false;
                    Notification.success({
                        message: data.message,
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.getPaginationList('',$scope.statusName);
                    $("#add_new_Open_modal").modal('hide');

                }
            });
            };

        $scope.saveCMore = function (data) {
            rid : $scope.rid,
                $scope.CSlist = [];
            angular.forEach($scope.clientserviceList, function (val, key) {
                if (val.clientServiceee == true) {
                    $scope.CSlist.push(val.id);
                }
            })
            $scope.OfList = [];
            angular.forEach($scope.orderfacilityList, function (val, key) {
                if (val.orderfacilityyy == true) {
                    $scope.OfList.push(val.id);
                }
            })
            $scope.CuiList = [];
            angular.forEach($scope.cusineList, function (val, key) {
                if (val.cuisinessss == true) {
                    $scope.CuiList.push(val.id);
                }
            })
            $scope.TgList = [];
            angular.forEach($scope.tagswebList, function (val, key) {
                if (val.tagss == true) {
                    $scope.TgList.push(val.id);
                }
            })
            if ($scope.seating == '' || $scope.seating == null || angular.isUndefined($scope.seating)) {
                Notification.warning({message: 'Seating can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.openingStatus == '' || $scope.openingStatus == null || angular.isUndefined($scope.openingStatus)) {
                Notification.warning({message: 'Opening Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.alcohal == '' || $scope.alcohal == null || angular.isUndefined($scope.alcohal)) {
                Notification.warning({message: 'Alchohal Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.cardsCash == '' || $scope.cardsCash == null || angular.isUndefined($scope.cardsCash)) {
                Notification.warning({message: 'Payment Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.serv == '' || $scope.serv == null || angular.isUndefined($scope.serv)) {
                Notification.warning({
                    message: 'Client Services Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.orderfac == '' || $scope.orderfac == null || angular.isUndefined($scope.orderfac)) {
                Notification.warning({
                    message: 'OrderFacility Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.seating == '' || $scope.seating == null || angular.isUndefined($scope.seating)) {
                Notification.warning({message: ' Seating Status can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.deliveryTime == '' || $scope.deliveryTime == null || angular.isUndefined($scope.deliveryTime)) {
                Notification.warning({message: 'DeliveryTime  can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.deliveryPrice == '' || $scope.deliveryPrice == null || angular.isUndefined($scope.deliveryPrice)) {
                Notification.warning({message: 'DeliveryPrice can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.restaurantType == '' || $scope.restaurantType == null || angular.isUndefined($scope.restaurantType)) {
                Notification.warning({message: 'RestaurantType can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.cusin == '' || $scope.cusin == null || angular.isUndefined($scope.cusin)) {
                Notification.warning({message: 'Cuisines can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.tagggg == '' || $scope.tagggg == null || angular.isUndefined($scope.tagggg)) {
                Notification.warning({message: 'Tags can not be empty', positionX: 'center', delay: 2000});
            }
            else if ($scope.owner == '' || $scope.owner == null || angular.isUndefined($scope.owner)) {
                Notification.warning({message: 'OwnerStatus can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                var saveResDetails;
                saveResDetails = {
                    rid: $scope.rid,
                    subscriptionName: $scope.subscription,
                    rName: $scope.restaurant,
                    owner: $scope.owner,
                    opening_status: $scope.openingStatus,
                    alcohal: $scope.alcohal,
                    location: $scope.location,
                    cardsCash: $scope.cardsCash,
                    clientService: angular.toJson($scope.serv),
                    orderfacility: angular.toJson($scope.orderfac),
                    seating: $scope.seating,
                    deliveryTime: $scope.deliveryTime,
                    deliveryPrice: $scope.deliveryPrice,
                    resturent_type_id: $scope.restaurantType,
                    discountType: $scope.discountType,
                    cuisines: angular.toJson($scope.cusin),
                    tags: angular.toJson($scope.tagggg),
                    companyname: $scope.Rname,
                    paymentMode: $scope.paymentMode,
                    amountPaid: $scope.amountPaid,
                    transactionDate: $scope.transactionDate,
                    statusOnline: $scope.statusOnline,
                    status: $scope.status,
                    listing:$scope.listing

                };

                $http.post("/hipos" + '/saveCMore', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getPaginationList('',$scope.statusName);
                    if (data.status == "fail") {
                        Notification.warning({
                            message: data.message,
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {

                        $scope.getPaginationList('',$scope.statusName);

                        $("#add_new_More_res_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Enquiry Created  successfully',
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

                ;
            }
            ;
        }
        $scope.saveNewPayments = function () {
            var data = new FormData();
            angular.forEach($scope.fileList,function (val,key) {
                $scope.files.push(val.file);
            })
            for (var i = 0; i < $scope.files.length; i++) {
                data.append("files", $scope.files[i]);
            }
            var config = {
                transformRequest: angular.identity,
                transformResponse: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
            var saveNewPayments;
            saveNewPayments = {
                // paymentId : $scope.paymentId,
                amount: $scope.amount,
                agencyName: $scope.agId,
                franchiseName: $scope.franId,
                rName: $scope.rName1,
                approvalStatus: $scope.approvalStatus,
                amount:$scope.amountPaid,
                expiryDate:$scope.expDate,
                SubscriptionStatus:$scope.subStatus,
                subscriptionName:$scope.subName,
                validity:$scope.validityyy,
                actualPrice:$scope.actualPrice,
                transactionDate:$scope.transactionDate,
                due: $scope.due,
                file:$scope.data

            };
            data.set("saveRoleDetails",angular.toJson(saveNewPayments));
            $http.post("/hipos" + '/savePaymentDetails', data,config).then(function (response) {
                var data = response.data;
                {
                    $scope.getpaymentList();
                    $("#add_FranchisePay_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Payment Created  successfully',
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


        };
        var url=$window.location.href;
        if(url.indexOf('/clients')>-1){
            $scope.statusName='Success';
            $scope.getPaginationList('',$scope.statusName);
        }else{
            $scope.statusName='Pending';
            $scope.getPaginationList('',$scope.statusName);
        }

        $scope.imageUpload = function (event) {
            var files = event.target.files;
            var file = files[0];
            var srcString;
            var imageCompressor = new ImageCompressor;
            var compressorSettings = {
                toWidth: 200,
                toHeight: 200,
                mimeType: 'image/png',
                mode: 'strict',
                quality: 1,
                grayScale: false,
                sepia: false,
                threshold: false,
                speed: 'low'
            };
            if (files && file) {
                var reader = new FileReader();
                reader.onload = function (readerEvt) {
                    binaryString = readerEvt.target.result;
                    $('.image-preview').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                };
            }
        };
        function proceedCompressedImage(compressedSrc) {
            $('#image-preview').attr('src', compressedSrc);
            $scope.fileToUpload = compressedSrc;
        }
        $scope.addItem = function () {
            $scope.itemId="";
            $scope.itemName="";
            $scope.Calories="";
            $scope.receipe="";
            $scope.receipeLink="";
            $scope.Ingredients="";
            $scope.Allergies="";
            $scope.variety=null;
            $scope.cussine=null;
            $scope.type=null;
            $scope.subtype=null;
            $scope.StatusText="Active";
            $scope.DescText="";
            $scope.fileName="";
            $scope.fileToUpload="";
            $("#addNewItem").modal('show');
        };


        $scope.getvarietyList = function () {
            $http.post($scope.hiposServerURL +'/getvarietyList').then(function (response) {
                var data = response.data.data;
                $scope.varietyList = data;
            })
        };
        $scope.getvarietyList();
        $scope.getTypeList = function () {
            $http.post($scope.hiposServerURL +'/getTypeList').then(function (response) {
                var data = response.data.data;
                $scope.typeList = data;
            })
        };
        $scope.getTypeList();
        $scope.getSubTypeList = function (type) {
            $http.post($scope.hiposServerURL +'/getSubTypeList?type='+type).then(function (response) {
                var data = response.data.data;
                $scope.subTypeList = data;
            })
        };
        $scope.saveItem = function () {
            if (angular.isUndefined($scope.itemName) || $scope.itemName == '' || $scope.itemName == null) {
                Notification.warning({message: 'Item Name can not be Empty', positionX: 'center', delay: 2000});
            // }else if (angular.isUndefined($scope.Calories) || $scope.Calories == '' || $scope.Calories == null) {
            //     Notification.warning({message: 'Calories can not be Empty', positionX: 'center', delay: 2000});
            // }else if (angular.isUndefined($scope.receipe) || $scope.receipe == '' || $scope.receipe == null) {
            //     Notification.warning({message: 'Receipe can not be Empty', positionX: 'center', delay: 2000});
            // }else if (angular.isUndefined($scope.receipeLink) || $scope.receipeLink == '' || $scope.receipeLink == null) {
            //     Notification.warning({message: 'receipeLink can not be Empty', positionX: 'center', delay: 2000});
            // }else if (angular.isUndefined($scope.Ingredients) || $scope.Ingredients == '' || $scope.Ingredients == null) {
            //     Notification.warning({message: 'Ingredients can not be Empty', positionX: 'center', delay: 2000});
            }else if (angular.isUndefined($scope.StatusText) || $scope.StatusText == '' || $scope.StatusText == null) {
                Notification.warning({message: 'Status can not be Empty', positionX: 'center', delay: 2000});
            }else if (angular.isUndefined($scope.variety) || $scope.variety == '' || $scope.variety == null) {
                Notification.warning({message: 'variety can not be Empty', positionX: 'center', delay: 2000});
            }else if (angular.isUndefined($scope.cussine) || $scope.cussine == '' || $scope.cussine == null) {
                Notification.warning({message: 'Cussine can not be Empty', positionX: 'center', delay: 2000});
            }else if (angular.isUndefined($scope.type) || $scope.type == '' || $scope.type == null) {
                Notification.warning({message: 'Please Select Type', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.subtype) || $scope.subtype == '' || $scope.subtype == null) {
                Notification.warning({message: 'Please Select Sub Type', positionX: 'center', delay: 2000});
            }
            else {
                var details;
                details = {
                    itemId: $scope.itemId,
                    itemName: $scope.itemName,
                    calories: $scope.Calories,
                    receipe: $scope.receipe,
                    receipeLink: $scope.receipeLink,
                    ingredients: $scope.Ingredients,
                    allergies: $scope.Allergies,
                    varietyList: $scope.variety,
                    cussinesList: $scope.cussine,
                    type: $scope.type,
                    subTypeList: $scope.subtype,
                    status: $scope.StatusText,
                    description: $scope.DescText,
                    image: $scope.fileToUpload
                };
                $http.post($scope.hiposServerURL + '/saveItem', angular.toJson(details)).then(function (response) {
                    var data = response.data;
                    if (data.status == "fail") {
                        Notification.warning({message: data.message, positionX: 'center', delay: 2000})
                    } else {
                        $scope.getItemList();
                        $("#addNewItem").modal('hide');
                        Notification.success({message: data.message, positionX: 'center', delay: 2000})
                    }
                })
            }
        }

    });