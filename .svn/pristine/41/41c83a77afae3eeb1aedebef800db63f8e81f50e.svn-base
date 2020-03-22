
app.controller('paymentController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$rootScope,$window) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.CountryNameText = "";
        $scope.StatusText = "";
        $rootScope.AssignName =$rootScope.userName;
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo = 0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        $scope.format = 'dd/MM/yyyy';
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        $scope.removeDetails = function () {
            $scope.paymentId = "";
            $scope.StatusText ="";
            $scope.amount="";
            $scope.phone = "";
        };
     $scope.wallet=function (data) {
         $scope.rName=data.rName;
         // $http.post( $scope.hiposServerURL + '/wallet?rName=' +  $scope.rName).then(function (response) {
         //     var data = response.data;
             $("#add_new_wallet_modal").modal('show');
         //     })
         }

        $scope.Confirm = function (data) {
         $scope.email=data.resEmail;
            bootbox.confirm({
                title: "Alert",
                message: "Do you want to Confirm?",
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
                        $http.post($scope.hiposServerURL + "/TaskCompleted1?rName=" + data.rName+'&email='+$scope.email).then(function (response) {
                            var data = response.data;
                            // $window.location.reload();
                            Notification.success({
                                message: 'Payment Done Successfully',
                                positionX: 'center',
                                delay: 2000
                            });

                        });
                    }
                }
            });
        }
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
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.hiposServerURL + "/getpaginatedPaymentList?searchText=" + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.paymentList = data.list;
                angular.forEach( $scope.paymentList,function (val,key) {
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
$scope.savewallet=function (data) {
    var savewallet;
    savewallet = {
        amountPaid: $scope.amountPaid
    };
    $http.post($scope.hiposServerURL  + '/savewallet?rName='+data, angular.toJson(savewallet, "Create")).then(function (response, status, headers, config) {
        var data = response.data;
        $scope.getPaginationList();
        if (data === "") {
            $scope.isDisabled = false;
            Notification.error({
                message: 'Amount Adding Failed',
                positionX: 'center',
                delay: 2000
            });
        }
        else {
            $("#add_new_wallet_modal").modal('hide');
            Notification.success({
                message: 'Amount  Added  successfully',
                positionX: 'center',
                delay: 2000
            });

            $scope.removeDetails();
        }

    }, function (error) {
        Notification.error({
            message: 'Something went wrong, please try again',
            positionX: 'center',
            delay: 2000
        });
        $scope.isDisabled = false;

    });
};

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.getagencyListBasedOnFranchise = function () {
            $http.post($scope.hiposServerURL+"/getagencyListBasedOnFranchise").then(function (response) {
                var data = response.data;
                $scope.agencyList = data;
            })
        }; $scope.getagencyListBasedOnFranchise();
        $scope.removefuncOperation = function () {
            var newDataList = [];
            $scope.selectedAll = false;
            angular.forEach($scope.paymentList, function (selected) {
                if (!selected.selected) {
                    newDataList.push(selected);
                }
            });
            $scope.paymentList = newDataList;
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

        $scope.addFranPay = function (data) {

            $scope.name=data;
            $http.post( $scope.hiposServerURL + '/getRestrauntName?rname=' +  $scope.name).then(function (response) {
                var data = response.data;
                $scope.amount=data.amountPaid;
                $scope.rName=data.rName;
                $scope.expDate=data.expiryDate;
                $scope.subStatus=data.subscriptionStatus;
                $scope.subName=data.subscriptionName;
                $scope.validity=data.validity;
                $scope.actualprice=data.actualPrice;
                $scope.balAmountt = data.actualPrice - data.amountPaid;
            $('#menu-title').text('Add List');
            $("#add_FranchisePay_modal").modal('show');})

        };
        $scope.editFranPay = function(data) {
            $scope.paymentId = data.paymentId;
            $scope.rName = data.rName;
            $scope.agencyName = data.agencyName;
            $scope.due = data.due;
            $scope.amount = data.amount;
            $scope.approvalStatus = data.approvalStatus;
            $scope.operation='Edit';
            $('#country-title').text("Edit Payment");
            $("#submit").text("Update");
            $("#add_FranchisePay_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };


        $scope.subMenuBuilderList1=[];
        // $scope.editpayment = function(data) {
        //     $rootScope.paymentId=data.paymentId;
        //     $http.post("/hipos/editpayment?id="+data.paymentId).then(function (response) {
        //         var data = response.data;
        //         // $scope.payList = data;
        //     })
        //     $scope.paymentLists = (angular.fromJson(data.paymentDetails));
        //     $scope.paymentDetails=[];
        //     angular.forEach($scope.paymentLists,function (val,key) {
        //         var create={};
        //         create.paymenetId = val.paymenetId,
        //         create.agencyName = val.agencyName,
        //         create.activity = val.activity,
        //         create.employee = val.employee,
        //         create.amount = val.amount,
        //         create.due = val.due,
        //         create.rName = val.rName
        //         $scope.paymentDetails.push(create);
        //         // val.paymentDetails=angular.fromJson(val);
        //
        //     });
        //     $('#menu-title').text("Edit Payment");
        //
        //     $("#add_new_modal").modal('show');
        // },function (error) {
        //     Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});
        //
        // };


        $scope.getemployList = function () {
            $http.post($scope.hiposServerURL+"/getemployList").then(function (response) {
                var data = response.data;
                $scope.employList = data;
            })
        };$scope.getemployList();

        $scope.addNewpayment = function () {
            $scope.StatusText="Active";
            $scope.parent=$rootScope.userName;


            $("#add_new_payment_modal").modal('show');
        };
        $scope.paymentList = [];
        $scope.subMenuBuilderList = [];
        $scope.paymentLists = [];
        $scope.addOperation = function (data) {
            angular.forEach(data, function (data) {
                $scope.agencyName = data.agencyName;
                $scope.rName = data.rName;
                // $scope.status = data.status;
            });
            $scope.subMenuBuilderList.push({
                paymentId:data.paymentId,
                agencyName: data.agencyName,
                rName: data.rName,
                employeeName:data.employee,
                activity:data.activity,
                amount:data.amount,
                due:data.due
            });

            if ($scope.paymentLists == "") {
                $scope.paymentLists = [];
            }
            $scope.paymentLists.push({
                paymentId:$scope.paymentId,
                agencyName: $scope.agencyName,
                rName: $scope.rName,
                activity: $scope.activity,
                employee:$scope.employee,
                activityName:$scope.activity,
                amount:$scope.amount,
                due:data.due
            });
        };

        $scope.removeaddnew = function(){
            $scope.paymentLists.pop({
            })
        };
        $scope.paymentHistory=function(){
            $window.location.href="home#!/paymentHistory";
            // $("#add_new_payment_modal").modal('show');
        }
        // $scope.saveNewPayments = function () {
        //     $scope.result = [];
        //     angular.forEach($scope.paymentLists, function (val, key) {
        //         $scope.val = {};
        //
        //         if (angular.isUndefined(val.employee) || val.employee === null) {
        //             val.employee = "";
        //         }
        //
        //         $scope.employee = val.employee;
        //         if (angular.isUndefined(val.agencyName) || val.agencyName === null) {
        //             val.agencyName = "";
        //         }
        //
        //         $scope.agencyName = val.agencyName;
        //         if (angular.isUndefined(val.activity) || val.activity === null) {
        //             val.activity = "";
        //         }
        //         $scope.rName = val.rName;
        //         if (angular.isUndefined(val.rName) || val.rName === null) {
        //             val.rName = "";
        //         }
        //
        //         $scope.activity = val.activity;
        //         $scope.amount = val.amount;
        //         $scope.due = val.due;
        //     });
        //     // $scope.menuBuilders = (angular.toJson($scope.result));
        //     var JsonData;
        //     JsonData = {
        //         paymentDetails: angular.toJson($scope.paymentLists),
        //         agencyName: $scope.agencyName,
        //         rName: $scope.rName,
        //         employeeName: $scope.employee,
        //         paymentId:$rootScope.paymentId
        //
        //     };
        //     $http.post($scope.hiposServerURL +'/savePaymentDetails', JsonData).then(function (response) {
        //         var data = response.data;
        //         if (data == "") {
        //             Notification.error({message: 'Already exists ', positionX: 'center', delay: 2000});
        //         }
        //         else {
        //             $scope.getpaymentList();
        //
        //             $("#add_new_modal").modal('hide');
        //             Notification.success({
        //                 message: 'Saved  successfully',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //         }
        //     });
        // };
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
                rName: $scope.rName,
                approvalStatus: $scope.approvalStatus,
                amount:$scope.amountPaid,
                expiryDate:$scope.expDate,
                SubscriptionStatus:$scope.subStatus,
                subName:$scope.subName,
                validity:$scope.validity,
                actualPrice:$scope.actualPrice,
                transactionDate:$scope.transactionDate,
                due: $scope.due,
                file:$scope.data

            };
            data.set("saveRoleDetails",angular.toJson(saveNewPayments));
            $http.post("/hipos" + '/savePaymentDetails', data,config).then(function (response) {
                var data = response.data;
                {
                    $scope.getPaginationList();
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
        $scope.getResList = function () {
            $http.post($scope.hiposServerURL+"/getResList").then(function (response) {
                var data = response.data;
                $scope.resList = data;
            })
        };
        $scope.getResList();
        $scope.getsubscription = function () {
            $http.post($scope.hiposServerURL+"/getsubscriptionList").then(function (response) {
                var data = response.data;
                $scope.subscriptionList = data;
            })
        };
        $scope.getsubscription();
        $scope.getagencybasedrest=function(){
            $http.post( $scope.hiposServerURL + '/getagencybasedRname?agency=' +  $rootScope.AssignName).then(function (response) {
                var data = response.data;
                $scope.agBasedREstLIst = data;
        })
};
        $scope.getagencybasedrest();

        $scope.gerestaurant=function(data){
            $scope.name=data;
            $http.post( $scope.hiposServerURL + '/getRestrauntName?rname=' +  $scope.name).then(function (response) {
                var data = response.data;
                $scope.amount=data.amountPaid;
                $scope.expDate=data.expiryDate;
                $scope.subStatus=data.subscriptionStatus;
                $scope.subName=data.subscriptionName;
                $scope.validity=data.validity;
                $scope.actualprice=data.actualPrice;
                $scope.balAmountt = $scope.actualPrice - $scope.amount;

            })
        };
        $scope.validitylist=function(data){
            $scope.name=data;
            $http.post( $scope.hiposServerURL + '/getvalidity?subnamename=' +  $scope.name).then(function (response) {
                var data = response.data;

                $scope.validity=data.validity;


            })
        };
        $scope.getFirstLevel1=function(data){
            $scope.name=data;
            $http.post( $scope.hiposServerURL + '/getagencybasedRname?agency=' +  $scope.name).then(function (response) {
                var data = response.data;
                $scope.agBasedREstLIst = data;
            })
        };
        // $scope.getagencybasedrest();
        $scope.getactivityList = function () {
            $http.post($scope.hiposServerURL+"/getactivityList").then(function (response) {
                var data = response.data;
                $scope.activList = data;
            })
        };$scope.getactivityList();

        // $scope.getpaymentList = function () {
        //     $http.post($scope.hiposServerURL+"/getpaymentsList").then(function (response) {
        //         var data = response.data;
        //         $scope.paymentList = data;
        //         angular.forEach( $scope.paymentList,function (val,key) {
        //             val.transactionDate=new Date(val.transactionDate);
        //         })
        //     })
        // };
        // $scope.getpaymentList();
        $scope.editFranPay = function(data) {
            $scope.paymentId = data.paymentId;
            $scope.rName =data.rName;
            $scope.agencyName = data.agencyName;
            $scope.due = data.due;
            $scope.amount = data.amount;
            $scope.approvalStatus = data.approvalStatus;
            $scope.operation='Edit';

            $('#country-title').text("Edit Payment");
            $("#submit").text("Update");
            $("#add_FranchisePay_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };

        $scope.getFranchiseList = function () {
            $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
                var data = response.data;
                $scope.franchiseList = data;
            })
        };
        $scope.getFranchiseList();


    });