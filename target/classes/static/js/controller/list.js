app.controller('listController',
    function ($scope, $timeout, $http, $location, $filter, Notification,$rootScope) {
        $scope.hiposServerURL =  "/hipos";
        // $scope.date = 'dd/MM/yyyy';
        $scope.today = new Date();
        $scope.today = function() {

            $scope.transactionDate=new Date();
            $scope.paymentDate=new Date();
        };
        $scope.today();
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
        $scope.removecross = function(data){
            $scope.index=data;
            $scope.previousserviceDetails.splice($scope.index,1);
        };



        $scope.companyLogoPath = "";
        $scope.getUserListBasedOnParent = function () {
            $http.post($scope.hiposServerURL+"/getUserListBasedOnParent").then(function (response) {
                var data = response.data;
                $scope.userList = data;
            })
        };
        $scope.getUserListBasedOnParent();

        $scope.getCityList = function (){
            $http.post($scope.hiposServerURL+"/getCityList").then(function (response) {
                var data = response.data;
                $scope.cityList = data;
            })
        };
        $scope.getCityList();
        $scope.getStateList = function () {
            $http.post($scope.hiposServerURL+"/getStateList").then(function (response) {
                var data = response.data;
                $scope.stateList = data;
            })
        };
        $scope.getStateList();
        $scope.getCountryList = function () {
            $http.post($scope.hiposServerURL+"/getCountryList").then(function (response) {
                var data = response.data;
                $scope.countryList = data;
            })
        };
        $scope.getCountryList();
        $scope.countryState = function(country){
            var url = "/hipos/getCountryState?countryId=" + country;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.stateList = angular.copy(data);

            })
        }
        $scope.stateCity = function(state){
            var url = "/hipos/getStateCity?stateId=" + state;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.cityList = angular.copy(data);
            })
        }

        $scope.getCategoryList = function () {
            $http.post($scope.hiposServerURL+"/getCategoryList").then(function (response) {
                var data = response.data;
                $scope.categoryList = data;
            })
        };
        $scope.getCategoryList();


        $scope.getServiceList = function () {
            $http.post($scope.hiposServerURL+"/getServiceList").then(function (response) {
                var data = response.data;
                $scope.serviceList = data;
            })
        };
        $scope.getServiceList();


        $scope.CategoryBasedOnService = function(category){
            var url = "/hipos/CategoryBasedOnService?categoryId=" + category;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.serviceList = angular.copy(data);

            })
        }
        $scope.CategoryBasedOnService();
        $scope.getResList = function () {
            if (angular.isUndefined($scope.rName)) {
                $scope.rName = "";
            }
            if (angular.isUndefined($scope.datevalue)) {
                $scope.datevalue = "";
            }
            if (angular.isUndefined($scope.location)) {
                $scope.location = "";
            }
            if (angular.isUndefined($scope.search)) {
                $scope.search = "";
            }
            $http.post($scope.hiposServerURL+'/getResList?rName=' + $scope.rName + '&date=' + $scope.datevalue + ' &location=' + $scope.location+ ' &search=' + $scope.search).then(function (response) {
                var data = response.data;
                $scope.resList = data;
            })
        };
        $scope.getResList();
        $scope.removeFile = function (index) {
            angular.forEach($scope.fileList,function (val,key) {
                if(index==key){
                    $scope.fileList.splice(index,1)
                }
            })
        };
        $scope.myFunction= function(data) {
            $scope.rid =data.rid;
            $scope.WorkStatus= data.radioValue;
            $scope.active= data.active;
            document.getElementById("myDropdown").classList.toggle("show");
        }


        $scope.Invoice = function () {
            $(".loader").css("display", "block");
            $('#modelName').text("Add PriceList");
            $("#submit").text("Save");
            $("#add_new_Invoice_modal").modal('show');
        };

        $scope.New = function (rid) {
            $scope.rid = rid;
            $http.post($scope.hiposServerURL + '/New?rid=' + rid).then(function (response) {
                var data = response.data;
                $("#add_new_Status_modal").modal('show');
            })
        }

        $scope.getResList = function () {
            $http.post($scope.hiposServerURL+"/getResList").then(function (response) {
                var data = response.data;
                $scope.resList = data;
            })
        };
        $scope.getResList();

        $scope.Validity = function () {
            // $scope.rid = rid;
            // $http.post($scope.hiposServerURL + '/New?rid=' + rid).then(function (response) {
            //     var data = response.data;
                $("#add_validity_modal").modal('show');

        }


        $scope.saveRes = function () {
            var saveResDetails;
            saveResDetails = {
                rid : $scope.rid,
                product: $scope.categoryId,
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
                addressOne: $scope.address1,
                addressTwo: $scope.address2,
                zipcode: $scope.Zipcode

            };
            $http.post("/hipos" + '/saveResDetails', angular.toJson(saveResDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if(data==""){
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {

                    $scope.getResList();
                    $("#add_new_res_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Service Created  successfully',
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


            $scope.restaurentDetails = function(data) {
            // $http.post("/services/getRestaurentDetails?rid=" + rid).then(function (response) {
            //     var data = response.data;
                $scope.rid = data.rid;
                $scope.categoryId =data.product ;
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
                $scope.Location = data.location;
                $scope.address1 = data.addressOne;
                $scope.address2 = data.addressTwo;
                $scope.updateStatus=data.updateStatus;
            $scope.operation='Edit';
            $('#res-title').text("Edit Restaurant");
            $("#submit").text("Update");
            $("#add_new_res_modal").modal('show');
        // },function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //         });

            }



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
            $scope.balAmount = $scope.actualPrice - amount;
        }
        $scope.Approval=function (ss) {
            $scope.amount=ss.service;
            $http.post($scope.hiposServerURL +'/getServiceList?searchText=' + ss.service).then(function (response) {
                var data = response.data[0];
                $scope.balAmount = data.balanceAmount;
                $scope.totalAmount = ss.amountPaid;
                $scope.actualPrice=data.price;
                $scope.rid=ss.rid;
                $scope.user=ss.user;
                //
                // // $scope.paymentmode = data.paymentmethodType;m, ,,,
                //
                // if(data.active==null||data.active==''){
                //     $scope.status = 'approved';
                // }
                // else {
                //     $scope.status = data.status;
                // }
                // $scope.transactionDate = new Date(data.transactionDate);
                $scope.getBalTotal(ss.amountPaid);
                $("#add_new_payment_modal").modal('show');
            })
        }
        // $scope.payment=function (ss) {
        //     // $scope.amount=ss.service;
        //     // $http.post($scope.hiposServerURL +'/getServiceList?searchText=' + ss.service).then(function (response) {
        //     //     var data = response.data[0];
        //         // $scope.balAmount = data.balanceAmount;
        //         // $scope.totalAmount = ss.amountPaid;
        //         // $scope.actualPrice=data.price;
        //         $scope.rid=ss.rid;
        //         // $scope.user=ss.user;
        //         // //
        //         // // // $scope.paymentmode = data.paymentmethodType;m, ,,,
        //         // //
        //         // // if(data.active==null||data.active==''){
        //         // //     $scope.status = 'approved';
        //         // // }
        //         // // else {
        //         // //     $scope.status = data.status;
        //         // // }
        //         // // $scope.transactionDate = new Date(data.transactionDate);
        //         // $scope.getBalTotal(ss.amountPaid);
        //         $("#list_payment_to").modal('show');
        //     // })
        // }

        $scope.savepayment = function () {
            var saveDetails;
            saveDetails = {
                // paymenetId: $scope.paymenetId,
                totalAmount: $scope.totalAmount,
                transactionDate: $scope.transactionDate,
                actualPrice:$scope.actualPrice,
                balanceAmount: $scope.balAmount,
                // paymentMode: $scope.paymentmode,
                rid: $scope.rid,
                active:$scope.active,
                user:$scope.user
                // customerId: $scope.customerId,

            };
            $http.post($scope.hiposServerURL +'/savepayment', angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                $scope.getResList();
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
        // $scope.savepayTo = function () {
        //     var saveDetails;
        //     saveDetails = {
        //         paymentAmount: $scope.paymentAmount,
        //         paymentDate: $scope.paymentDate,
        //         paymentStatus:$scope.paymentStatus,
        //         rid: $scope.rid
        //
        //
        //
        //     };
        //     $http.post($scope.hiposServerURL +'/savepayTo', angular.toJson(saveDetails)).then(function (response) {
        //         var data = response.data;
        //         $scope.getResList();
        //         if (data == "") {
        //             Notification.success({message: 'Already exists', positionX: 'center', delay: 2000});
        //         }
        //         $("#add_new_payment_modal").modal('hide');
        //         Notification.success({
        //             message: 'Payment Saved  successfully',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //
        //     });
        //
        // }
        //
        // $scope.select = function (data) {
        //     var arrays = [];
        //
        //
        //         var checks = document.querySelectorAll('input[type=checkbox]:checked');
        //
        //         for (var i=0; i < checks.length; i++) {
        //
        //                 arrays.push(checks[i].checked = data);
        //
        //
        //             }
        //
        //     $scope.raa = arrays;
        //
        //  }
        $scope.List=[];
        $scope.select = function (data) {
            if(data.checkbox==true){
                $scope.List.push(data)
            }
        };
            $scope.saveUpload = function () {

            // if ($scope.fileToUpload === ''||$scope.fileToUpload==null||angular.isUndefined($scope.fileToUpload)) {
            //     Notification.warning({message: 'Please Upload File', positionX: 'center', delay: 2000});
            // }
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

             {var saveRoleDetails;
                saveRoleDetails = {
                    rid:$scope.rid,
                    file: $scope.data,
                    uploadStatus:$scope.uploadStatus

                };
                // var file=$scope.fileToUpload;
                 data.set("saveRoleDetails",angular.toJson(saveRoleDetails));
                 $http.post($scope.hiposServerURL + "/saveuploadFile", data,config).then(function (response) {
                     var data = response.data;

                 // $http.post($scope.hiposServerURL + '/saveuploadFile', angular.toJson(data,config "Create")).then(function (response, status, headers, config) {
                 //    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        // $scope.removeRoles();
                        $scope.getResList();
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
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });

            }
            ;
        };

        $scope.savenewuser = function () {

            {var saveRoleDetails;
                saveRoleDetails = {
                    rid: $scope.rid,
                    assigneduser: $scope.assigneduser

                };
                $http.post($scope.hiposServerURL + '/saveassigneduser', angular.toJson(saveRoleDetails, "Create")).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        // $scope.removeRoles();
                        // $scope.getPaginationList();
                        $("#add_new_modal").modal('hide');
                        // if (!angular.isUndefined(data) && data !== null) {
                        //     $scope.countrySearchText = "";
                        // }
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


        $scope.Assign = function (res) {
            $scope.ResObj = res;
            $scope.rid = res.rid;
            $scope.status="assign";
            $http.post($scope.hiposServerURL+"/getUserAssignedList?user="+ res.user).then(function (response) {
                var data = response.data;
                $scope.userAssignedList = data;
            })
            $("#add_new_Assign_modal").modal('show');
        };
        $scope.AssignToUser = function(){
            var Details;
                Details = {
                    arr:angular.toJson($scope.List)
                };


           $http.post($scope.hiposServerURL+"/AssignToUser?user="+$scope.assigneduser+"&id="+$scope.rid, angular.toJson(Details)).then(function (response) {
               var data = response.data;
               Notification.success({
                   message: ' Assigned  successfully',
                   positionX: 'center',
                   delay: 2000
               });
               $("#add_new_Assign_modal").modal('hide');
               $scope.getResList();

           })
        }

        $scope.upload = function () {
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

        $scope.viewdetails = function (data) {
            $scope.setAllDetails(data);

            $("#View_Details").modal('show');
        };



        $scope.setAllDetails = function (data){
            $scope.product =data.product;
            $scope.service =data.service;
            $scope.date =data.date;
            $scope.user =data.user;
            $scope.rName =data.rName;
            $scope.cName =data.cName;
            $scope.contact =data.contact;
            $scope.address =data.address;
            $scope.city =data.city;
            $scope.zipcode =data.zipcode;
            $scope.location =data.location;
            $scope.email =data.email;
            $scope.remarks =data.remarks;
            $scope.gstNo =data.gstNo;
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
                            $scope.getResList();
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

                    $scope.getResList();
                    $("#add_new_Status_modal").modal('hide');
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.countrySearchText = "";
                    }
                    Notification.success({
                        message: 'Service Created  successfully',
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
        $scope.deleteCountry = function (data) {
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
                    if(result == true){
                        var deleteDetails = {
                            countryId:data.countryId,
                            CountryNameText:data.countryName,
                            StatusText:data.status

                        };
                        $http.post($scope.hiposServerURL +"/deleteCountry", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.removeRestaurentDetails();
                            $scope.getResList();
                            if(data==true){
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                Notification.warning({
                                    message: 'Cannot delete Already in Use',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                        }, function (error) {
                            Notification.warning({
                                message: 'Cannot be delete,already it is using',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

    });