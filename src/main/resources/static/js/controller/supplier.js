
app.controller('supplierController',
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
        $scope.removeCountryDetails = function () {
            $scope.CountryNameText = "";
            $scope.StatusText =null;
            $scope.listStatus="";
            $scope.operation = "";
        };
        $scope.companyLogoPath = "";


        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.next_wizardEdit = function(){
            $("#sub_step12").removeClass("in active");
            $("#sub_step22").addClass("tab-pane fade in active");
        }
        $scope.back_wizardEdit = function(){
            $("#sub_step22").removeClass("in active");
            $("#sub_step12").addClass("tab-pane fade in active");
        }

        $scope.editSupplier = function(data) {
            $scope.setupobj = data;
            $scope.id = data.id;
            $scope.supplierNameText = data.supplierName;
            $scope.supplierEmailText =data.email;
            $scope.supplierContactText =data.contact;
            $scope.supplierAddressText =data.address;
            $scope.GSTINText =data.gst;
            $scope.selectedState =parseInt(data.state);
            $scope.personInchargeText =data.personIncharge;
            $scope.selectedCountry =parseInt(data.country);
            $scope.selectedCurrency =parseInt(data.currency);
            $scope.bankNameText =data.bankName;
            $scope.accNoText =data.accNo;
            $scope.bankBranchText =data.bankBranch;
            $scope.IFSCText =data.ifsc;
            $scope.websiteText =data.website;
            $scope.panNumberText =data.panNo;
            $scope.creditLimitText =data.creditLimit;
            $scope.creditTermText =data.creditTerm;
            $scope.supStatusText =data.status;
            $scope.serviceList =angular.fromJson(data.serviceList);
            $scope.operation='Edit';
            $('#supplier_title').text("Edit Supplier");
            $("#submit").text("Update");
            $("#addSupplier").modal('show');
        };


        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/admin';
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
            $scope.getPaginationList();

        };

        $scope.addSupplier = function () {
            $scope.id="";
            $scope.supplierNameText="";
            $scope.supplierEmailText="";
            $scope.supplierContactText="";
            $scope.supplierAddressText="";
            $scope.GSTINText="";
            $scope.selectedState=null;
            $scope.selectedCountry=null;
            $scope.selectedCurrency=null;
            $scope.personInchargeText="";
            $scope.bankNameText="";
            $scope.accNoText="";
            $scope.creditTermText="";
            $scope.bankBranchText="";
            $scope.panNumberText="";
            $scope.creditLimitText="";
            $scope.websiteText="";
            $scope.IFSCText="";
            $scope.serviceList = [];
            $scope.serviceList.push({
                type: null,
                price:''
            });
            $scope.supStatusText="Active";
            $('#supplier_title').text("Add Supplier");
            $("#submit").text("Save");
            $("#addSupplier").modal('show');
        };
        $scope.saveSupplier = function () {
            $scope.service = true;
            angular.forEach($scope.serviceList, function (val, key) {
                if (val.type == null || val.type == '' || angular.isUndefined(val.type)) {
                    $scope.service = false;
                }
            })
            if ($scope.supplierNameText == ''||$scope.supplierNameText==null||angular.isUndefined($scope.supplierNameText)) {
                Notification.warning({message: 'Supplier Name can not be empty', positionX: 'center', delay: 2000});
            }else if ($scope.service == false) {
                Notification.warning({message: 'Service Type can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveSupplierDetails;
                saveSupplierDetails = {
                    id: $scope.id,
                    supplierName: $scope.supplierNameText,
                    email: $scope.supplierEmailText,
                    contact: $scope.supplierContactText,
                    address: $scope.supplierAddressText,
                    // gst: $scope.companyRegNo,
                    // notificationFlag: $scope.notificationFlag,
                    // from_Reg_Comp: $scope.fromRegNo,
                    // to_Reg_Comp: $scope.toRegNo,
                    gst: $scope.GSTINText,
                    state: $scope.selectedState,
                    personIncharge: $scope.personInchargeText,
                    country: $scope.selectedCountry,
                    currency: $scope.selectedCurrency,
                    bankName: $scope.bankNameText,
                    accNo: $scope.accNoText,
                    bankBranch: $scope.bankBranchText,
                    ifsc: $scope.IFSCText,
                    website: $scope.websiteText,
                    panNo: $scope.panNumberText,
                    creditTerm: $scope.creditTermText,
                    creditLimit: $scope.creditLimitText,
                    status:$scope.supStatusText,
                    serviceList:angular.toJson($scope.serviceList)
                    //  accountid:$scope.supplierAccountId,
                };
                $http.post($scope.hiposServerURL + '/saveSupplier', angular.toJson(saveSupplierDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getPaginationList();
                        $("#addSupplier").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.SearchText = "";
                        }
                        Notification.success({
                            message: 'Supplier Created  successfully',
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
            $http.post($scope.hiposServerURL + "/getpaginatedSupplier?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.SearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.supplierList = data.list;
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
        $scope.getCountryList = function () {
            $http.post($scope.hiposServerURL + "/getCountryList").then(function (response) {
                var data = response.data;
                $scope.countryList = data;
            })
        };
        $scope.getCountryList();
        $scope.getStateList = function () {
            $http.post($scope.hiposServerURL + "/getStateList" ).then(function (response) {
                var data = response.data;
                $scope.stateList = data;
            })
        };
        $scope.getStateList();
        $scope.getCurrencyList = function () {
            $http.post($scope.hiposServerURL + "/getCurrencyList" ).then(function (response) {
                var data = response.data;
                $scope.currencyList = data;
            })
        };
        $scope.getCurrencyList();
        $scope.getServiceTypeList = function () {
            $http.post($scope.hiposServerURL + "/getAllServiceTypeList" ).then(function (response) {
                var data = response.data;
                $scope.serviceTypeList = data;
            })
        };
        $scope.getServiceTypeList();
        $scope.removeServiceTypeList = function (index) {
            angular.forEach($scope.serviceList,function (val,key) {
                if(index==key){
                    $scope.serviceList.splice(index,1);
                }
            })
        };
        $scope.serviceList=[];
        $scope.serviceList.push({
            type:null,
            price:''
        });
        $scope.addNewServicetypeList = function () {
            $scope.serviceList.push({
                type:null,
                price:''
            });
        };
    });