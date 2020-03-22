app.controller('listingCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification,$rootScope,$window) {
        $scope.hiposServerURL = "/hipos/";
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.format = 'dd/MM/yyyy';
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        $scope.transactionDate = new Date();
        $scope.format = 'dd/MM/yyyy';
        $scope.openC = function () {
            $scope.popupC.opened = true;
        };
        $scope.popupC = {
            opened: false
        };
        $scope.getlisting = function () {
            $http.post($scope.hiposServerURL + '/getlisting').then(function (response) {
                var data = response.data;
                $scope.listingList = data;
            })
        };
        $scope.getlisting();

        $scope.getsubscription = function () {
            $http.post($scope.hiposServerURL + "/getsubscriptionList").then(function (response) {
                var data = response.data;
                $scope.subscriptionList = data;
            })
        };
        $scope.getsubscription();
        $scope.viewRemark = function (data) {
            $http.post($scope.hiposServerURL + '/getUser?rName=' + data.rName + '&user=' + data.user).then(function (response) {
                var data = response.data;
                $scope.appUserrr = data.appUser;
                $scope.appTime = data.appTime;
                $scope.rName = data.rName;
                $scope.appDate = data.appDate;

            })
            $("#add_new_View_modal").modal('show');
        }
        $scope.myFunction= function(data) {
            $scope.rid =data.rid;
            $scope.restaurantdata =data;
            $scope.WorkStatus= data.radioValue;
            $scope.active= data.active;
            $scope.assignstatus= data.assignstatus;
            document.getElementById("myDropdown").classList.toggle("show");
        };
        $scope.Assign = function (res) {
            $scope.ResObj = res;
            $scope.rid = res.rid;
            $scope.status="assign";
            $http.post($scope.hiposServerURL+"/getUserAssignedList").then(function (response) {
                var data = response.data;
                $scope.userAssignedList = data;
            })
            $("#add_new_Assign_modal").modal('show');
        };
        $scope.Appointment=function (data) {
            // $scope.removeApp();
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
        $scope.getDateList = function (appDate) {
            $scope.date = $filter('date')(new Date(appDate), 'yyyy-MM-dd');
            $http.post($scope.hiposServerURL + '/getDateList?appDate=' + $scope.date +"&restaurant=" + $scope.restaurant +"&userName=" +$scope.userName).then(function (response) {
                var data = response.data;
                $("#add_new_Appointment_modal").modal('show');
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
        $scope.getUserListBasedOnParent = function () {
            $http.post($scope.hiposServerURL+"/getUserListBasedOnParent").then(function (response) {
                var data = response.data;
                $scope.userList = data;
            })
        };
        $scope.getUserListBasedOnParent();
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
                    if (result == true) {
                        $http.post("/hipos" + '/deleteList?listId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.getResList;
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
                            $scope.getlisting();
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
        $scope.Subscribe = function (res) {
            $scope.type=false;
            $scope.resid = res.rid;
            $scope.statusOnline = "";
            $scope.subscriptionName = "";
            $http.post($scope.hiposServerURL+'/Subscribe?rid='+res.rid).then(function (response) {
                var data = response.data;
                if(data.subscriptionName!=null){
                    $scope.type=true;
                }
              $scope.subscription=data.subscriptionName;
              $scope.paymentMode=data.paymentMode;
              $scope.amountPaid=data.amountPaid;
              $scope.transactionDate=new Date(data.transactionDate);
              $scope.statusOnline="Success";

              $("#add_new_FreeList_modal").modal('show');
            })
        }
        $scope.getPaymentModeList = function () {
            $http.post($scope.hiposServerURL + "/getPaymentModeList?&status=" + $scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.paymentModeList = data;
            })
        };
        $scope.getPaymentModeList();
        $scope.saveSubcribe = function () {
            $scope.aaa=true;
            angular.forEach($scope.subscriptionList,function (val,key) {
                if(parseFloat($scope.amountPaid)<val.actualPrice){
                    Notification.warning({message:'Amount Should Not be Less than'+" "+ val.actualPrice,positionX:'center',delay:2000})
                $scope.aaa=false;
                }
            })
            if($scope.aaa==true){
            // else {
                var saveSubcribe;
                saveSubcribe = {
                    rid: $scope.resid,
                    subscriptionName: $scope.subscription,
                    paymentMode: $scope.paymentMode,
                    amountPaid: $scope.amountPaid,
                    transactionDate: $scope.transactionDate,
                    statusOnline: $scope.statusOnline

                };
                $http.post("/hipos" + '/saveSubcribe', angular.toJson(saveSubcribe, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $("#add_new_FreeList_modal").modal('hide');
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
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });

                });
            }
        };

        $scope.upload = function () {
            $http.post($scope.hiposServerURL+"/getUploadDetails?id="+$scope.rid).then(function (response) {
                var data = response.data;
                if(data.file!=null){
                    $scope.showZip = data.file;
                }
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
                    rid: $scope.rid,
                    file: $scope.data,
                    uploadStatus: $scope.Act
                };
                data.set("saveRoleDetails", angular.toJson(saveRoleDetails));
                $http.post($scope.hiposServerURL + "/saveuploadFile", data, config).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'UploadImage', positionX: 'center', delay: 2000});
                    }
                    else {
                        // $scope.removeRoles();
                        // $scope.removeUpload();
                        $scope.getlisting();
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

        $scope.fileList = [];
        $scope.fileList.push({id: $scope.fileList.length});
        $scope.addNewFile = function () {
            $scope.fileList.push({id: $scope.fileList.length});
        }
        $scope.files = [];
        $scope.showFileName = function (event) {
            angular.forEach($scope.fileList, function (val, key) {
                if ($scope.fileId == key) {
                    val.file = event.target.files[0];

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
                }
            })
        }
        $scope.setId = function (id) {
            $scope.fileId = id;
        }
        $scope.MoreDetails = function (res) {
            $scope.rid = res.rid;
            $scope.rName = res.rName;
            $scope.categoryId = res.product;
            $scope.service = res.service;
            $scope.user = res.user;
            $scope.Name = res.name;
            $scope.RName = res.rName;
            $scope.Emailid = res.email;
            $scope.Contact = res.contact;
            $scope.country = res.country;
            $scope.state = res.state;
            $scope.city = res.city;
            $scope.Location = res.location;
            $scope.address1 = res.addressOne;
            $scope.address2 = res.addressTwo;
            $scope.Zipcode = res.zipcode;
            $scope.company = res.rName;
            $scope.address2 = res.addressTwo;
            $scope.transactionDate = new Date();
            $scope.statusOnline = "Success";
            $("#add_new_More_res_modal").modal('show');

        };
        $scope.SaveApp = function () {
            $scope.appDate = $filter('date')(new Date($scope.appDate), 'yyyy-MM-dd');
            var saveResDetails;
            saveResDetails = {
                rid: $scope.id,
                rName: $scope.restaurant,
                workProgress: $scope.workProgress,
                appDate: $scope.appDate,
                appUser: $scope.appUserrr,
                appTime: $scope.appTime,
                appRemarks: $scope.appRemarks

            };
            $http.post("/hipos" + '/SaveApp', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {

                    $scope.getlisting();
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
            } else if ($scope.CSlist == '' || $scope.CSlist == null || angular.isUndefined($scope.CSlist)) {
                Notification.warning({
                    message: 'Client Services Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.OfList == '' || $scope.OfList == null || angular.isUndefined($scope.OfList)) {
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
            } else if ($scope.CuiList == '' || $scope.CuiList == null || angular.isUndefined($scope.CuiList)) {
                Notification.warning({message: 'Cuisines can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.TgList == '' || $scope.TgList == null || angular.isUndefined($scope.TgList)) {
                Notification.warning({message: 'Tags can not be empty', positionX: 'center', delay: 2000});
            } else {
                var saveResDetails;
                saveResDetails = {
                    rid: $scope.rid,
                    subscriptionName: $scope.subscription,
                    rName: $scope.restaurant,
                    owner: $scope.owner,
                    opening_status: $scope.openingStatus,
                    alcohal: $scope.alcohal,
                    location: $scope.Location,
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
                    statusOnline: "Success",
                    status: $scope.status

                };
                $http.post("/hipos" + '/saveCMore', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data.status == "fail") {
                        Notification.warning({
                            message: data.message,
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {

                        $scope.getlisting();

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
        var expanded3 = false;
        $scope.showCheckboxes3 = function () {
            var checkboxes3 = document.getElementById("checkboxes3");
            if (!expanded3) {
                checkboxes3.style.display = "block";
                expanded3 = true;
            } else {
                checkboxes3.style.display = "none";
                expanded3 = false;
            }
        }
        $scope.selectedcui = [];
        $scope.selectCuisines = function (id) {
            var index = $scope.selectedcui.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedcui.splice(index, 1);
            } else {
                $scope.selectedcui.push(id);
            }
            $scope.cusin = $scope.selectedcui;
        };
        var expanded4 = false;
        $scope.showCheckboxes4 = function () {
            var checkboxes4 = document.getElementById("checkboxes4");
            if (!expanded4) {
                checkboxes4.style.display = "block";
                expanded4 = true;
            } else {
                checkboxes4.style.display = "none";
                expanded4 = false;
            }
        }
        $scope.selectedtag = [];
        $scope.selectTags = function (id) {
            var index = $scope.selectedtag.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedtag.splice(index, 1);
            } else {
                $scope.selectedtag.push(id);
            }
            $scope.tagggg = $scope.selectedtag;
        };

        var expanded5 = false;
        $scope.showCheckboxes5 = function () {
            var checkboxes5 = document.getElementById("checkboxes5");
            if (!expanded5) {
                checkboxes5.style.display = "block";
                expanded5 = true;
            } else {
                checkboxes5.style.display = "none";
                expanded5 = false;
            }
        }
        $scope.selectedservice = [];
        $scope.selectServices = function (id) {
            var index = $scope.selectedservice.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedservice.splice(index, 1);
            } else {
                $scope.selectedservice.push(id);
            }
            $scope.serv = $scope.selectedservice;
        };
        var expanded6 = false;
        $scope.showCheckboxes6 = function () {
            var checkboxes6 = document.getElementById("checkboxes6");
            if (!expanded6) {
                checkboxes6.style.display = "block";
                expanded6 = true;
            } else {
                checkboxes6.style.display = "none";
                expanded6 = false;
            }
        }
        $scope.selectedordfer = [];
        $scope.selectOrderFac = function (id) {
            var index = $scope.selectedordfer.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedordfer.splice(index, 1);
            } else {
                $scope.selectedordfer.push(id);
            }
            $scope.orderfac = $scope.selectedordfer;
        };
        $scope.addMore = function (aaa) {
            if (angular.isUndefined(aaa)) {
                $("#add_new_Cleint_MoreDetails_modal").modal('show');
            } else {
                $scope.Rname = $scope.Rname,
                    $scope.owner = aaa.owner,
                    $scope.openingStatus = aaa.opening_status,
                    $scope.alcohal = aaa.alcohal,
                    $scope.cardsCash = aaa.cardsCash
                $scope.clientService = parseInt(aaa.clientService);
                $scope.clientService = [];
                $scope.clientService = angular.fromJson(aaa.clientService);
                angular.forEach($scope.clientserviceList, function (val, key) {
                    if ($scope.clientService.indexOf(val.id) != -1) {
                        val.clientServiceee = true;
                    } else {
                        val.clientServiceee = false;
                    }
                })
                $scope.orderfacility = parseInt(aaa.orderfacility);
                $scope.orderfacility = angular.fromJson(aaa.orderfacility);
                angular.forEach($scope.orderfacilityList, function (val, key) {
                    if ($scope.orderfacility.indexOf(val.id) != -1) {
                        val.orderfacilityyy = true;
                    } else {
                        val.orderfacilityyy = false;
                    }
                })
                //  $scope.clientService = aaa.serv,
                $scope.orderfacility = aaa.orderfacility,
                    $scope.seating = aaa.seating,
                    $scope.deliveryTime = aaa.deliveryTime,
                    $scope.deliveryPrice = aaa.deliveryPrice,
                    $scope.restaurantType = parseInt(aaa.resturent_type_id),
                    $scope.discountType = parseInt(aaa.discountType),
                    $scope.cusin = [];
                $scope.cusin = parseInt(aaa.cuisines);
                $scope.cusin = angular.fromJson(aaa.cuisines);
                angular.forEach($scope.cusineList, function (val, key) {
                    if ($scope.cusin.indexOf(val.id) != -1) {
                        val.cuisinessss = true;
                    } else {
                        val.cuisinessss = false;
                    }
                })
                // $scope.cusin = aaa.cuisines,
                $scope.tagggg = [];
                $scope.tagggg = parseInt(aaa.tags);
                $scope.tagggg = angular.fromJson(aaa.tags);
                angular.forEach($scope.tagswebList, function (val, key) {
                    if ($scope.tagggg.indexOf(val.id) != -1) {
                        val.tagss = true;
                    } else {
                        val.tagss = false;
                    }
                })
                // $scope.tagggg = aaa.tags,
                $scope.Rname = $scope.Rname,
                    $scope.paymentMode = aaa.paymentMode,
                    $scope.amountPaid = aaa.amountPaid,
                    $scope.transactionDate = new Date(aaa.transactionDate)
                $("#add_new_Cleint_MoreDetails_modal").modal('show');
            }

        };
        $scope.saveClients = function (res) {
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
            } else if ($scope.CSlist == '' || $scope.CSlist == null || angular.isUndefined($scope.CSlist)) {
                Notification.warning({
                    message: 'Client Services Status can not be empty',
                    positionX: 'center',
                    delay: 2000
                });
            } else if ($scope.OfList == '' || $scope.OfList == null || angular.isUndefined($scope.OfList)) {
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
            } else if ($scope.CuiList == '' || $scope.CuiList == null || angular.isUndefined($scope.CuiList)) {
                Notification.warning({message: 'Cuisines can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.TgList == '' || $scope.TgList == null || angular.isUndefined($scope.TgList)) {
                Notification.warning({message: 'Tags can not be empty', positionX: 'center', delay: 2000});
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
                    state: $scope.state,
                    city: $scope.city,
                    location: $scope.Location,
                    companyname: $scope.Rname,
                    addressOne: $scope.address1,
                    addressTwo: $scope.address2,
                    zipcode: $scope.Zipcode,
                    radioValue: $scope.radioValue,
                    owner: $scope.owner,
                    opening_status: $scope.openingStatus,
                    alcohal: $scope.alcohal,
                    cardsCash: $scope.cardsCash,
                    clientService: angular.toJson($scope.CSlist),
                    orderfacility: angular.toJson($scope.OfList),
                    // clientService:angular.toJson($scope.serv),
                    // orderfacility:angular.toJson($scope.orderfac),
                    seating: $scope.seating,
                    deliveryTime: $scope.deliveryTime,
                    deliveryPrice: $scope.deliveryPrice,
                    resturent_type_id: $scope.restaurantType,
                    discountType: $scope.discountType,
                    cuisines: angular.toJson($scope.CuiList),
                    tags: angular.toJson($scope.TgList),
                    companyname: $scope.Rname,
                    paymentMode: $scope.paymentMode,
                    amountPaid: $scope.amountPaid,
                    transactionDate: $scope.transactionDate,
                    statusOnline: "Success",
                    status: $scope.status
                };
                $http.post("/hipos" + '/saveClients', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getClientsList();
                    if (data.status == "fail") {
                        Notification.warning({
                            message: data.message,
                            positionX: 'center',
                            delay: 2000
                        });
                    } else if (response.data == 'success') {
                        $("#add_new_Cleint_MoreDetails_modal").modal('hide');
                        $("#add_new_Client_modal").modal('hide');
                        Notification.success({
                            message: 'Updated Successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $scope.removeRestaurentDetails();
                        $scope.getClientsList();
                        $("#add_new_Cleint_MoreDetails_modal").modal('hide');
                        $("#add_new_Client_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Clients Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                });
            }
            ;


        }
    });
