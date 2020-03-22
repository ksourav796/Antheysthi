
app.controller('enquiryFormCtrl',
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
        $scope.serviceTypeDetails={};
        $scope.serviceTypeDetails.dateOfServicehv = new Date();
        $scope.serviceTypeDetails.dateOfServicep = new Date();
        $scope.enquiryDate = new Date();
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.companyLogoPath = "";
        $scope.openInternationalHum = function (data,service,index) {
            $scope.index = index;

            /*  Dynamic code */
            $scope.servceName = service;
            if (data.details != null) {
                angular.forEach(data.serviceTypeList, function (val, key) {
                    if (service == val.serviceType) {
                        $scope.serviceTypeDetails = angular.fromJson(data.details);
                        $scope.keyList = angular.fromJson(data.details);
                        angular.forEach($scope.keyList, function (val, key) {
                            if (val.type == 'date') {
                                val.values = new Date(val.values);
                            }
                        })
                    }
                });
            } else {
                angular.forEach(data.serviceTypeList, function (val, key) {
                    if (service == val.serviceType) {
                        if (val.details != null) {
                            $scope.serviceTypeDetails = angular.fromJson(val.details);
                            $scope.keyList = angular.fromJson(val.details);
                            angular.forEach($scope.keyList, function (val, key) {
                                if (val.type == 'date') {
                                    val.values = new Date(val.values);
                                }
                            })
                            // $scope.keyList.values = angular.fromJson($scope.keyList.values);
                            $scope.serviceTypeDetails.dateOfServicehv = new Date($scope.serviceTypeDetails.dateOfServicehv);
                            $scope.serviceTypeDetails.dateOfServicep = new Date($scope.serviceTypeDetails.dateOfServicep);
                            $scope.serviceTypeDetails.timeOfServicehv = new Date($scope.serviceTypeDetails.timeOfServicehv);
                            $scope.serviceTypeDetails.timeOfServicep = new Date($scope.serviceTypeDetails.timeOfServicep);
                        }
                    }
                })
            }
                if((data.serviceType!=null||data.serviceType!="")&&$scope.keyList.length>0){
                $("#add_new").modal('show');
            }
            /*  Static code */
            // if(data.details!=null&&service!=null){
            //     $scope.serviceTypeDetails = angular.fromJson(data.details);
            //     $scope.serviceTypeDetails.dateOfServicehv = new Date($scope.serviceTypeDetails.dateOfServicehv);
            //     $scope.serviceTypeDetails.dateOfServicep = new Date($scope.serviceTypeDetails.dateOfServicep);
            //     $scope.serviceTypeDetails.timeOfServicehv = new Date($scope.serviceTypeDetails.timeOfServicehv);
            //     $scope.serviceTypeDetails.timeOfServicep = new Date($scope.serviceTypeDetails.timeOfServicep);
            // }
            //
            // if (service == 'Hearse Van') {
            //     $("#add_new_hearse_Van").modal('show');
            // }
            //  else if (service == 'Freezer Box') {
            //     $("#add_new_Freezer_Box").modal('show');
            // } else if (service== 'Embalming') {
            //     $("#add_new_Embalming").modal('show');
            // } else
            //     if (service == 'Domestic HUM - Road') {
            //     $("#add_new_Domestic_Hum_Road").modal('show');
            // } else if (service == 'Domestic HUM - Air') {
            //     $("#add_new_Domestic_Hum_Air").modal('show');
            // } else if (service == 'International HUM') {
            //     $("#add_new_International_HUM").modal('show');
            // } else if (service == 'Coffin Packing') {
            //     $("#add_new_Cuffin_Packing").modal('show');
            // } else if (service == 'Dog' || service == 'Cat' || service == 'Snake') {
            //     $("#add_new_PetCremation").modal('show');
            // }

        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.format = 'dd/MM/yyyy';
        // $scope.open1 = function() {

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        // };
        // $scope.open2 = function() {

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.popup2 = {
            opened: false
        };
        // };
        // $scope.getEnqGenNo();
        $scope.addEnquiryForm = function () {
            localStorage.setItem("type", "");
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.callerLocation = "";
            $scope.typeOfEnquiryList = [];
            $scope.typeOfEnquiryList.push({
                typeOfEnquiry: null
            });
            $scope.serviceType = null;
            $scope.address1 = "";
            $scope.address2 = "";
            $scope.country = null;
            $scope.state = null;
            $scope.city = null;
            $scope.zipcode = "";
            $scope.emailId = "";
            $scope.callStatus = null;
            $scope.callinfo = "";
            $scope.sourceOfEnquiry = null;
            $scope.serviceLocation = null;
            $scope.dateOfService = new Date();
            $scope.timeOfService = "";
            $scope.costOfService = "";
            $scope.costOfService = "";
            $scope.sourceCityAddress = "";
            $scope.sourceCity = "";
            $scope.destinationCityAddress = "";
            $scope.destinationCity = "";
            $scope.clientfirstName = "";
            $scope.clientlastName = "";
            $scope.clientphoneNumber = "";
            $scope.assistanceDetails = null;
            $scope.assistanceDetailsVendors = "";
            $scope.assistanceContact = "";
            $scope.pickupAddress = "";
            $scope.pickupzipcode = "";
            $scope.stopOverAddress = "";
            $scope.stopOverZipcode = "";
            $scope.floorNo = "";
            $scope.destinationAddress = "";
            $scope.destinationZipcode = "";
            $scope.decorationCost = "";
            $scope.funeralHelperCost = "";
            $scope.getEnqGenNo();
            $scope.operation = 'create';
            $window.location.href = '/anthyesti#!/addenquiryForm';
            // $('#enquiry-title').text("Add Enquiry Form");
            $("#submit").text("Save");
            $("#add_new_enquiryForm_modal").modal('show');
        };


        $scope.goBack = function () {
            $window.location.href = '/anthyesti#!/enquiryForm';
        };
        $scope.getEnqGenNo = function () {
            $(".loader").css("display", "block");
            $http.post($scope.hiposServerURL + "/generateEnquiryNo").then(function (response) {
                $scope.enquiryNo = response.data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.myFunction = function (data) {
            $scope.id = data.id;
            $scope.assignstatus = data.assignstatus;
            localStorage.setItem("id", $scope.id);
            document.getElementById("myDropdown"+data.id).classList.toggle("show");
        };

        $scope.getEnquiryListBasedOn = function () {
            $http.post($scope.hiposServerURL + "/getEnquiryListBasedOnPhoneNum?email=" + $scope.emailId).then(function (response) {
                var data = response.data;
                if (data != "") {
                    $scope.firstName = data.firstName;
                    $scope.lastName = data.lastName;
                    $scope.callerLocation = data.callerLocation;
                    $scope.phoneNumberList = angular.fromJson(data.phoneNumber);
                    $scope.typeOfEnquiry = data.typeOfEnquiry;
                    $scope.serviceType = JSON.parse(data.serviceType);
                    $scope.address1 = data.address1;
                    $scope.address2 = data.address2;
                    $scope.country = parseInt(data.country);
                    $scope.getStatewebList($scope.country);
                    $scope.state = parseInt(data.state);
                    $scope.getCitywebList($scope.state);
                    $scope.city = parseInt(data.city);
                    $scope.zipcode = data.zipcode;
                    $scope.emailId = data.email;
                    $scope.callStatus = data.callStatus;
                    $scope.callinfo = data.callinfo;
                    $scope.serviceLocation = data.serviceLocation;
                    $scope.sourceOfEnquiry = data.sourceOfEnquiry;
                    $scope.specialRequestList = angular.fromJson(data.specialRequirements);
                    $scope.typeOfEnquiryList = angular.fromJson(data.typeOfEnquiry);
                    angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                        $scope.getServiceTypeList(val.typeOfEnquiry,val);
                    })
                }
            })
        };
        $scope.getCountryList = function () {
            $http.post($scope.hiposServerURL + "/getCountryList").then(function (response) {
                var data = response.data;
                $scope.countryList = data;
            })
        };
        $scope.getCountryList();
        $scope.gettypeOfEnquiryList = function () {
            $http.post($scope.hiposServerURL + "/getTypeOfEnquiryList").then(function (response) {
                var data = response.data;
                $scope.enquiryTypeList = data;
            })
        };
        $scope.gettypeOfEnquiryList();
        $scope.getServiceTypeList = function (type,object) {
            $http.post($scope.hiposServerURL + "/getServiceTypeList?type="+type).then(function (response) {
                var data = response.data;
                object.serviceTypeList = data;
                // $scope.keyList=[];
                angular.forEach(object.serviceTypeList,function (val,key) {
                    if(val.details!=null) {
                        $scope.keyList = (angular.fromJson(val.details));

                    }
                })
            })
        };
        $scope.getSourceOfEnquiryList = function () {
            $http.post($scope.hiposServerURL + "/getenqSourceList?status=" + 'Active').then(function (response) {
                var data = response.data;
                $scope.sourceOfEnquiryList = data;
            })
        };
        $scope.getSourceOfEnquiryList();
        $scope.getServiceLocationList = function () {
            $http.post($scope.hiposServerURL + "/getServiceLocationList?status=" + 'Active').then(function (response) {
                var data = response.data;
                $scope.serviceLocationList = data;
            })
        };
        $scope.getServiceLocationList();
        $scope.getCityList = function () {
            $http.post($scope.hiposServerURL + "/getCityList").then(function (response) {
                var data = response.data;
                $scope.cityList = data;
            })
        };
        $scope.getCityList();
        // $scope.getEnquiryFormList = function () {
        //     $http.post($scope.hiposServerURL + "/getEnquiryFormList").then(function (response) {
        //         var data = response.data;
        //         $scope.enquiryList = data;
        //         // angular.forEach($scope.enquiryList,function (val,key) {
        //         //     $scope.enquiryDate = new Date(val.enquiryDate);
        //         // })
        //     })
        // };
        // $scope.getEnquiryFormList();
        $scope.getStatewebList = function (data) {
            $http.post($scope.hiposServerURL + "/getCountryState?countryid=" + data).then(function (response) {
                var data = response.data;
                $scope.statewebListttt = data;
            })
        };
        // $scope.getStatewebList();
        $scope.getCitywebList = function (data) {
            $http.post($scope.hiposServerURL + "/getStateCity?stateid=" + data).then(function (response) {
                var data = response.data;
                $scope.citywebListttt = data;
            })
        };

        $scope.editEnquiry = function () {
            $scope.operation = 'edit';
            localStorage.setItem("type", "");
            $http.post($scope.hiposServerURL + "/editEnquiry?id=" + localStorage.getItem("id")).then(function (response) {
                var data = response.data;
                $scope.id = data.id;
                $scope.firstName = data.firstName;
                $scope.lastName = data.lastName;
                $scope.callerLocation = data.callerLocation;
                $scope.phoneNumberList = angular.fromJson(data.phoneNumber);
                $scope.typeOfEnquiryList = angular.fromJson(data.typeOfEnquiry);
                angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                    $scope.getServiceTypeList(val.typeOfEnquiry,val);
                })
                // $scope.serviceTypeDetails = JSON.parse(data.serviceTypeDetails);
                $scope.address1 = data.address1;
                $scope.address2 = data.address2;
                $scope.country = parseInt(data.country);
                $scope.getStatewebList($scope.country);
                $scope.state = parseInt(data.state);
                $scope.getCitywebList($scope.state);
                $scope.city = parseInt(data.city);
                $scope.zipcode = data.zipcode;
                $scope.emailId = data.email;
                $scope.callStatus = data.callStatus;
                $scope.callStatusDetails = data.callStatusDetails;
                $scope.callinfo = data.callinfo;
                $scope.user = data.user;
                $scope.enquiryNo = data.enquiryNo;
                $scope.enquiryDate = new Date(data.enquiryDate);
                $scope.serviceLocation = data.serviceLocation;
                $scope.sourceOfEnquiry = data.sourceOfEnquiry;
                $scope.specialRequestList = angular.fromJson(data.specialRequirements);
                $scope.serviceType = data.serviceType;
                $scope.others = data.others;
                $scope.assignstatus = data.assignstatus;
                if ($scope.serviceTypeDetails != null || angular.isUndefined($scope.serviceTypeDetails)) {
                    $scope.dateOfService = new Date($scope.serviceTypeDetails.dateOfService);
                    $scope.timeOfService = new Date($scope.serviceTypeDetails.timeOfService);
                    $scope.costOfService = $scope.serviceTypeDetails.costOfService;
                    $scope.sourceCityAddress = $scope.serviceTypeDetails.sourceCityAddress;
                    $scope.sourceCity = $scope.serviceTypeDetails.sourceCity;
                    $scope.destinationCity = $scope.serviceTypeDetails.destinationCity;
                    $scope.clientfirstName = $scope.serviceTypeDetails.clientfirstName;
                    $scope.clientlastName = $scope.serviceTypeDetails.clientlastName;
                    $scope.destinationCityAddress = $scope.serviceTypeDetails.destinationCityAddress;
                    $scope.clientphoneNumber = $scope.serviceTypeDetails.clientphoneNumber;
                    $scope.assistanceContact = $scope.serviceTypeDetails.assistanceContact;
                    $scope.assistanceDetails = $scope.serviceTypeDetails.assistanceDetails;
                    $scope.assistanceDetailsVendors = $scope.serviceTypeDetails.assistanceDetailsVendors;
                    $scope.funeralHelperCost = $scope.serviceTypeDetails.funeralHelperCost;
                    $scope.decorationCost = $scope.serviceTypeDetails.decorationCost;
                    $scope.additionalService = $scope.serviceTypeDetails.additionalService;
                    $scope.destinationZipcode = $scope.serviceTypeDetails.destinationZipcode;
                    $scope.destinationAddress = $scope.serviceTypeDetails.destinationAddress;
                    $scope.stopOverZipcode = $scope.serviceTypeDetails.stopOverZipcode;
                    $scope.stopOverAddress = $scope.serviceTypeDetails.stopOverAddress;
                    if($scope.serviceTypeDetails.additionalServiceDecoration==true){
                        $scope.additionalServiceDecoration = true;
                    }else {
                        $scope.additionalServiceDecoration =false;
                    }
                    if($scope.serviceTypeDetails.additionalServicefuneral==true){
                        $scope.additionalServicefuneral = true;
                    }else {
                        $scope.additionalServicefuneral =false;
                    }
                    $scope.destinationserviceLift = $scope.serviceTypeDetails.destinationserviceLift;
                    $scope.destinationfloorNo = $scope.serviceTypeDetails.destinationfloorNo;
                    $scope.destinationstopOverZipcode = $scope.serviceTypeDetails.destinationstopOverZipcode;
                    $scope.destinationStopOverAddress = $scope.serviceTypeDetails.destinationStopOverAddress;
                    $scope.pickupzipcode = $scope.serviceTypeDetails.pickupzipcode;
                    $scope.floorNo = $scope.serviceTypeDetails.floorNo;
                    $scope.serviceLift = $scope.serviceTypeDetails.serviceLift;
                    $scope.pickupAddress = $scope.serviceTypeDetails.pickupAddress;
                }
                // $('#enquiry-title').text("Edit Enquiry Form");
                $("#submit").text("Update");
                $("#add_new_enquiryForm_modal").modal('show');
            })
        };
        $scope.addCall = function (data) {
            localStorage.setItem("type", data);
            $window.location.href = '/anthyesti#!/addenquiryForm';
            // window.location.reload();
        };
        $scope.AddCallEnquiry = function () {
            localStorage.setItem("type", "");
            $scope.operation = 'addCall';
            $http.post($scope.hiposServerURL + "/AddCallEnquiry?id=" + localStorage.getItem("id")).then(function (response) {
                var data = response.data;
                // $scope.enqDetailsList = data;
                // var data= $scope.enqDetailsList.length();
                $scope.id = data.enqformId;
                $scope.firstName = data.firstName;
                $scope.lastName = data.lastName;
                $scope.callerLocation = data.callerLocation;
                $scope.phoneNumberList = angular.fromJson(data.phoneNumber);
                $scope.typeOfEnquiryList = angular.fromJson(data.typeOfEnquiry);
                angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                    $scope.getServiceTypeList(val.typeOfEnquiry,val);
                });
                $scope.serviceTypeDetails = JSON.parse(data.serviceTypeDetails);
                $scope.address1 = data.address1;
                $scope.address2 = data.address2;
                $scope.country = parseInt(data.country);
                $scope.getStatewebList($scope.country);
                $scope.state = parseInt(data.state);
                $scope.getCitywebList($scope.state);
                $scope.city = parseInt(data.city);
                $scope.zipcode = data.zipcode;
                $scope.emailId = data.email;
                $scope.callStatus = data.callStatus;
                $scope.callStatusDetails = data.callStatusDetails;
                $scope.callinfo = data.callinfo;
                $scope.enquiryNo = data.enquiryNo;
                $scope.enquiryDate = new Date(data.enquiryDate);
                $scope.serviceLocation = data.serviceLocation;
                $scope.sourceOfEnquiry = data.sourceOfEnquiry;
                $scope.specialRequestList = angular.fromJson(data.specialRequirements);
                $scope.serviceType = data.serviceType;
                $scope.others = data.others;
                if ($scope.serviceTypeDetails != null || angular.isUndefined($scope.serviceTypeDetails)) {
                    $scope.dateOfService = new Date($scope.serviceTypeDetails.dateOfService);
                    $scope.timeOfService = new Date($scope.serviceTypeDetails.timeOfService);
                    $scope.costOfService = $scope.serviceTypeDetails.costOfService;
                    $scope.sourceCityAddress = $scope.serviceTypeDetails.sourceCityAddress;
                    $scope.sourceCity = $scope.serviceTypeDetails.sourceCity;
                    $scope.destinationCity = $scope.serviceTypeDetails.destinationCity;
                    $scope.clientfirstName = $scope.serviceTypeDetails.clientfirstName;
                    $scope.clientlastName = $scope.serviceTypeDetails.clientlastName;
                    $scope.destinationCityAddress = $scope.serviceTypeDetails.destinationCityAddress;
                    $scope.clientphoneNumber = $scope.serviceTypeDetails.clientphoneNumber;
                    $scope.assistanceContact = $scope.serviceTypeDetails.assistanceContact;
                    $scope.assistanceDetails = $scope.serviceTypeDetails.assistanceDetails;
                    $scope.assistanceDetailsVendors = $scope.serviceTypeDetails.assistanceDetailsVendors;
                    $scope.funeralHelperCost = $scope.serviceTypeDetails.funeralHelperCost;
                    $scope.decorationCost = $scope.serviceTypeDetails.decorationCost;
                    if($scope.serviceTypeDetails.additionalServiceDecoration==true){
                        $scope.additionalServiceDecoration = true;
                    }else {
                        $scope.additionalServiceDecoration =false;
                    }
                    if($scope.serviceTypeDetails.additionalServicefuneral==true){
                        $scope.additionalServicefuneral = true;
                    }else {
                        $scope.additionalServicefuneral =false;
                    }
                    // $scope.additionalServicefuneral = $scope.serviceTypeDetails.additionalServicefuneral;
                    $scope.destinationZipcode = $scope.serviceTypeDetails.destinationZipcode;
                    $scope.destinationAddress = $scope.serviceTypeDetails.destinationAddress;
                    $scope.destinationserviceLift = $scope.serviceTypeDetails.destinationserviceLift;
                    $scope.destinationfloorNo = $scope.serviceTypeDetails.destinationfloorNo;
                    $scope.destinationstopOverZipcode = $scope.serviceTypeDetails.destinationstopOverZipcode;
                    $scope.destinationStopOverAddress = $scope.serviceTypeDetails.destinationStopOverAddress;
                    $scope.stopOverZipcode = $scope.serviceTypeDetails.stopOverZipcode;
                    $scope.stopOverAddress = $scope.serviceTypeDetails.stopOverAddress;
                    $scope.pickupzipcode = $scope.serviceTypeDetails.pickupzipcode;
                    $scope.floorNo = $scope.serviceTypeDetails.floorNo;
                    $scope.serviceLift = $scope.serviceTypeDetails.serviceLift;
                    $scope.pickupAddress = $scope.serviceTypeDetails.pickupAddress;
                }
                // $('#enquiry-title').text("Edit Enquiry Form");
                $("#submit").text("Update");
                $("#add_new_enquiryForm_modal").modal('show');
            })
        };
        if (localStorage.getItem("type") == 'edit') {
            $scope.editEnquiry();
        } else if (localStorage.getItem("type") == 'addCall') {
            $scope.AddCallEnquiry();
        } else if (localStorage.getItem("type") == 'Create') {
            $scope.addEnquiryForm();
        }
        else if (localStorage.getItem("type") == "") {
            $window.location.href='/anthyesti#!/enquiryForm';
        }
        $scope.specialRequestList=[];
        $scope.specialRequestList.push({
            specialRequirements:''
        });
        $scope.addNewFile = function () {
            $scope.specialRequestList.push({
                specialRequirements:''
            });
        };
        $scope.phoneNumberList=[];
        $scope.phoneNumberList.push({
            phoneNumber:null
        });
        $scope.addNewPhoneNumber = function () {
            $scope.phoneNumberList.push({
                phoneNumber:null
            });
        };
        $scope.typeOfEnquiryList=[];
        $scope.typeOfEnquiryList.push({
            typeOfEnquiry:null
        });
        $scope.addNewTypeOfEnquiry = function () {
            $scope.typeOfEnquiryList.push({
                typeOfEnquiry:null
            });
        };
        $scope.removeFile = function (index) {
            angular.forEach($scope.specialRequestList,function (val,key) {
                if(index==key){
                    $scope.specialRequestList.splice(index,1);
                }
            })
        };
        $scope.removetypeOfEnquiryList = function (index) {
            angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                if(index==key){
                    $scope.typeOfEnquiryList.splice(index,1);
                }
            })
        };
        $scope.removePhoneNumberList = function (index) {
            angular.forEach($scope.phoneNumberList,function (val,key) {
                if(index==key){
                    $scope.phoneNumberList.splice(index,1);
                }
            })
        };

        $scope.saveEnqForm = function (type) {
            $scope.phone = true;
            angular.forEach($scope.phoneNumberList, function (val, key) {
                if (val.phoneNumber == null || val.phoneNumber == '' || angular.isUndefined(val.phoneNumber)) {
                    $scope.phone = false;
                }
            })
            $scope.typeofenq = true;
            angular.forEach($scope.typeOfEnquiryList, function (val, key) {
                if (val.typeOfEnquiry == null || val.typeOfEnquiry == '' || angular.isUndefined(val.typeOfEnquiry)) {
                    $scope.typeofenq = false;
                }
            })
            if($scope.firstName==null||$scope.firstName==''||angular.isUndefined($scope.firstName)){
                Notification.warning({message: 'First Name can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.callerLocation==null||$scope.callerLocation==''||angular.isUndefined($scope.callerLocation)){
                Notification.warning({message: 'CallerLocation can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.serviceLocation==null||$scope.serviceLocation==''||angular.isUndefined($scope.serviceLocation)){
                Notification.warning({message: 'Please Select ServiceLocation', positionX: 'center', delay: 2000});
            }
            else  if($scope.sourceOfEnquiry==null||$scope.sourceOfEnquiry==''||angular.isUndefined($scope.sourceOfEnquiry)){
                Notification.warning({message: 'Please Select SourceOfEnquiry', positionX: 'center', delay: 2000});
            }
            else if($scope.phone==false){
                Notification.warning({message: 'Phone Number cannot be Empty', positionX: 'center', delay: 2000});
            }
            else if($scope.typeofenq==false){
                Notification.warning({message: 'Type Of Enquiry can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.country==null||$scope.country==''||angular.isUndefined($scope.country)){
                Notification.warning({message: 'Please Select Country', positionX: 'center', delay: 2000});
            }
            else  if($scope.state==null||$scope.state==''||angular.isUndefined($scope.state)){
                Notification.warning({message: 'Please Select State', positionX: 'center', delay: 2000});
            }
            else  if($scope.city==null||$scope.city==''||angular.isUndefined($scope.city)){
                Notification.warning({message: 'Please Select City', positionX: 'center', delay: 2000});
            }
            else  if($scope.emailId==null||$scope.emailId==''||angular.isUndefined($scope.emailId)){
                Notification.warning({message: 'EmailId can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                    val.serviceTypeList=[];
                })
                var saveEnquiryDetails;
                saveEnquiryDetails = {
                    id: $scope.id,
                    lastName: $scope.lastName,
                    firstName: $scope.firstName,
                    fullName: $scope.firstName + $scope.lastName,
                    callerLocation: $scope.callerLocation,
                    phoneNumber: angular.toJson($scope.phoneNumberList),
                    typeOfEnquiry: angular.toJson($scope.typeOfEnquiryList),
                    // serviceType: $scope.serviceType,
                    country: $scope.country,
                    state: $scope.state,
                    city: $scope.city,
                    zipcode: $scope.zipcode,
                    address1: $scope.address1,
                    address2: $scope.address2,
                    email: $scope.emailId,
                    callStatus: $scope.callStatus,
                    callinfo: $scope.callinfo,
                    user: $rootScope.userName,
                    callStatusDetails: $scope.callStatusDetails,
                    enquiryDate: $scope.enquiryDate,
                    enquiryNo: $scope.enquiryNo,
                    others: $scope.others,
                    sourceOfEnquiry: $scope.sourceOfEnquiry,
                    serviceLocation: $scope.serviceLocation,
                    type: type,
                    assignstatus: $scope.assignstatus,
                    specialRequirements: angular.toJson($scope.specialRequestList)

                };
                $http.post($scope.hiposServerURL + '/saveEnquiryForm', angular.toJson(saveEnquiryDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $window.location.href='/anthyesti#!/enquiryForm';
                        $scope.getPaginationList();
                        // $window.location.reload();
                        $("#add_new_enquiryForm_modal").modal('hide');
                        Notification.success({
                            message: 'EnquiryForm Created successfully',
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
        $scope.saveEnqFormAddCall = function () {
            $scope.phone = true;
            angular.forEach($scope.phoneNumberList, function (val, key) {
                if (val.phoneNumber == null || val.phoneNumber == '' || angular.isUndefined(val.phoneNumber)) {
                    $scope.phone = false;
                }
            })
            $scope.typeofenq = true;
            angular.forEach($scope.typeOfEnquiryList, function (val, key) {
                if (val.typeOfEnquiry == null || val.typeOfEnquiry == '' || angular.isUndefined(val.typeOfEnquiry)) {
                    $scope.typeofenq = false;
                }
            })
            if($scope.firstName==null||$scope.firstName==''||angular.isUndefined($scope.firstName)){
                Notification.warning({message: 'First Name can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.callerLocation==null||$scope.callerLocation==''||angular.isUndefined($scope.callerLocation)){
                Notification.warning({message: 'CallerLocation can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.serviceLocation==null||$scope.serviceLocation==''||angular.isUndefined($scope.serviceLocation)){
                Notification.warning({message: 'Please Select ServiceLocation', positionX: 'center', delay: 2000});
            }
            else  if($scope.sourceOfEnquiry==null||$scope.sourceOfEnquiry==''||angular.isUndefined($scope.sourceOfEnquiry)){
                Notification.warning({message: 'Please Select SourceOfEnquiry', positionX: 'center', delay: 2000});
            }
            else if($scope.phone==false){
                Notification.warning({message: 'Phone Number cannot be Empty', positionX: 'center', delay: 2000});
            }
            else if($scope.typeofenq==false){
                Notification.warning({message: 'Type Of Enquiry can not be empty', positionX: 'center', delay: 2000});
            }
            else  if($scope.country==null||$scope.country==''||angular.isUndefined($scope.country)){
                Notification.warning({message: 'Please Select Country', positionX: 'center', delay: 2000});
            }
            else  if($scope.state==null||$scope.state==''||angular.isUndefined($scope.state)){
                Notification.warning({message: 'Please Select State', positionX: 'center', delay: 2000});
            }
            else  if($scope.city==null||$scope.city==''||angular.isUndefined($scope.city)){
                Notification.warning({message: 'Please Select City', positionX: 'center', delay: 2000});
            }
            else  if($scope.emailId==null||$scope.emailId==''||angular.isUndefined($scope.emailId)){
                Notification.warning({message: 'EmailId can not be empty', positionX: 'center', delay: 2000});
            }else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                angular.forEach($scope.typeOfEnquiryList,function (val,key) {
                    val.serviceTypeList=[];
                })
                var saveEnquiryDetails;
                saveEnquiryDetails = {
                    id: $scope.id,
                    lastName: $scope.lastName,
                    firstName: $scope.firstName,
                    fullName: $scope.firstName + $scope.lastName,
                    callerLocation: $scope.callerLocation,
                    phoneNumber: angular.toJson($scope.phoneNumberList),
                    typeOfEnquiry: angular.toJson($scope.typeOfEnquiryList),
                    serviceTypeDetails: $scope.details,
                    serviceType: $scope.serviceType,
                    country: $scope.country,
                    state: $scope.state,
                    city: $scope.city,
                    zipcode: $scope.zipcode,
                    address1: $scope.address1,
                    address2: $scope.address2,
                    email: $scope.emailId,
                    callStatus: $scope.callStatus,
                    callinfo: $scope.callinfo,
                    callStatusDetails: $scope.callStatusDetails,
                    enquiryDate: $scope.enquiryDate,
                    enquiryNo: $scope.enquiryNo,
                    others: $scope.others,
                    sourceOfEnquiry: $scope.sourceOfEnquiry,
                    serviceLocation: $scope.serviceLocation,
                    specialRequirements: angular.toJson($scope.specialRequestList)

                };
                $http.post($scope.hiposServerURL + '/saveEnqFormAddCall', angular.toJson(saveEnquiryDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $window.location.href='/anthyesti#!/enquiryForm';
                        $window.location.reload();
                        $scope.getPaginationList();
                        $("#add_new_enquiryForm_modal").modal('hide');
                        Notification.success({
                            message: 'EnquiryForm Created successfully',
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
            $http.post($scope.hiposServerURL + "/getPaginatedEnquiry?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.SearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.enquiryList = data.list;
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
        $scope.saveDomesticHumRoad = function () {
            var details;
            details={
                serviceType:$scope.serviceType,
                dateOfService:$scope.dateOfService,
                timeOfService:$scope.timeOfService,
                costOfService:$scope.costOfService,
                sourceCityAddress:$scope.sourceCityAddress,
                sourceCity:$scope.sourceCity,
                destinationCityAddress:$scope.destinationCityAddress,
                destinationCity:$scope.destinationCity,
                clientfirstName:$scope.clientfirstName,
                clientlastName:$scope.clientlastName,
                clientphoneNumber:$scope.clientphoneNumber,
                assistanceDetails:$scope.assistanceDetails,
                assistanceContact:$scope.assistanceContact
            }
            $scope.details = angular.toJson(details);
            $("#add_new_Domestic_Hum_Road").modal('hide');
        }
        $scope.saveHearseVan = function () {
            if($scope.serviceTypeDetails.pickupAddresshv==null||$scope.serviceTypeDetails.pickupAddresshv==""||angular.isUndefined($scope.serviceTypeDetails.pickupAddresshv)){
                Notification.warning({message: 'Pickup Address Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.pickupzipcodehv==null||$scope.serviceTypeDetails.pickupzipcodehv==""||angular.isUndefined($scope.serviceTypeDetails.pickupzipcodehv)){
                Notification.warning({message: 'Pickup Zipcode Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.destinationAddresshv==null||$scope.serviceTypeDetails.destinationAddresshv==""||angular.isUndefined($scope.serviceTypeDetails.destinationAddresshv)){
                Notification.warning({message: 'Destination Address Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.destinationZipcodehv==null||$scope.serviceTypeDetails.destinationZipcodehv==""||angular.isUndefined($scope.serviceTypeDetails.destinationZipcodehv)){
                Notification.warning({message: 'Destination Zipcode Cannot be Empty', positionX: 'center', delay: 2000});
            }
            else {
                // var details;
                // details = {
                //     dateOfService: $scope.dateOfService,
                //     timeOfService: $scope.timeOfService,
                //     costOfService: $scope.costOfService,
                //     pickupAddress: $scope.pickupAddress,
                //     pickupzipcode: $scope.pickupzipcode,
                //     stopOverAddress: $scope.stopOverAddress,
                //     destinationStopOverAddress: $scope.destinationStopOverAddress,
                //     destinationstopOverZipcode: $scope.destinationstopOverZipcode,
                //     destinationfloorNo: $scope.destinationfloorNo,
                //     destinationserviceLift: $scope.destinationserviceLift,
                //     stopOverZipcode: $scope.stopOverZipcode,
                //     floorNo: $scope.floorNo,
                //     destinationZipcode: $scope.destinationZipcode,
                //     destinationAddress: $scope.destinationAddress,
                //     serviceLift: $scope.serviceLift,
                //     clientfirstName: $scope.clientfirstName,
                //     clientlastName: $scope.clientlastName,
                //     clientphoneNumber: $scope.clientphoneNumber,
                //     areaCode: $scope.areaCode,
                //     assistanceDetails: $scope.assistanceDetails,
                //     assistanceContact: $scope.assistanceContact,
                //     additionalServiceDecoration: $scope.additionalServiceDecoration,
                //     additionalServicefuneral: $scope.additionalServicefuneral,
                //     decorationCost: $scope.decorationCost,
                //     funeralHelperCost: $scope.funeralHelperCost,
                //     assistanceDetailsVendors: $scope.assistanceDetailsVendors
                // }
                $scope.details = angular.toJson($scope.serviceTypeDetails);
                $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
                $("#add_new_hearse_Van").modal('hide');
            }
        }
        $scope.saveFreezerbox = function () {
            if($scope.serviceTypeDetails.freezerboxAddress==null||$scope.serviceTypeDetails.freezerboxAddress==""||angular.isUndefined($scope.serviceTypeDetails.freezerboxAddress)){
                Notification.warning({message: 'Street Address Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.freezerboxzipcode==null||$scope.serviceTypeDetails.freezerboxzipcode==""||angular.isUndefined($scope.serviceTypeDetails.freezerboxzipcode)){
                Notification.warning({message: 'Zipcode Cannot be Empty', positionX: 'center', delay: 2000});
            }
            else {
                var details;
                details = {
                    dateOfService: $scope.dateOfService,
                    timeOfService: $scope.timeOfService,
                    costOfService: $scope.costOfService,
                    freezerboxAddress: $scope.freezerboxAddress,
                    freezerboxzipcode: $scope.freezerboxzipcode,
                    floorNo: $scope.floorNo,
                    serviceLift: $scope.serviceLift,
                    clientfirstName: $scope.clientfirstName,
                    clientlastName: $scope.clientlastName,
                    clientAreaCode: $scope.clientAreaCode,
                    clientphoneNumber: $scope.clientphoneNumber,
                    assistanceDetails: $scope.assistanceDetails,
                    assistanceContact: $scope.assistanceContact
                }
                $scope.details = angular.toJson($scope.serviceTypeDetails);
                $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
                $("#add_new_Freezer_Box").modal('hide');
            }
        }
        $scope.saveEmbalming = function () {
            if($scope.serviceTypeDetails.embalmingAddress==null||$scope.serviceTypeDetails.embalmingAddress==""||angular.isUndefined($scope.serviceTypeDetails.embalmingAddress)){
                Notification.warning({message: 'Street Address Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.embalmingzipcode==null||$scope.serviceTypeDetails.embalmingzipcode==""||angular.isUndefined($scope.serviceTypeDetails.embalmingzipcode)){
                Notification.warning({message: 'Zipcode Cannot be Empty', positionX: 'center', delay: 2000});
            }
            else {
                var details;
                details = {
                    dateOfService: $scope.dateOfService,
                    timeOfService: $scope.timeOfService,
                    costOfService: $scope.costOfService,
                    embalmingAddress: $scope.embalmingAddress,
                    embalmingzipcode: $scope.embalmingzipcode,
                    floorNo: $scope.floorNo,
                    clientfirstName: $scope.clientfirstName,
                    clientlastName: $scope.clientlastName,
                    clientAreaCode: $scope.clientAreaCode,
                    clientphoneNumber: $scope.clientphoneNumber,
                    assistanceDetails: $scope.assistanceDetails,
                    assistanceContact: $scope.assistanceContact
                }
                $scope.details = angular.toJson($scope.serviceTypeDetails);
                $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
                $("#add_new_Embalming").modal('hide');
            }
        }
        $scope.saveCoffinBox = function () {
            if($scope.serviceTypeDetails.coffinAddress==null||$scope.serviceTypeDetails.coffinAddress==""||angular.isUndefined($scope.serviceTypeDetails.coffinAddress)){
                Notification.warning({message: 'Street Address Cannot be Empty', positionX: 'center', delay: 2000});
            }else if($scope.serviceTypeDetails.coffinzipcode==null||$scope.serviceTypeDetails.coffinzipcode==""||angular.isUndefined($scope.serviceTypeDetails.coffinzipcode)){
                Notification.warning({message: 'Zipcode Cannot be Empty', positionX: 'center', delay: 2000});
            }
            else {
                var details;
                details = {
                    dateOfService: $scope.dateOfService,
                    timeOfService: $scope.timeOfService,
                    costOfService: $scope.costOfService,
                    coffinAddress: $scope.coffinAddress,
                    coffinzipcode: $scope.coffinzipcode,
                    clientfirstName: $scope.clientfirstName,
                    clientlastName: $scope.clientlastName,
                    clientAreaCode: $scope.clientAreaCode,
                    clientphoneNumber: $scope.clientphoneNumber,
                    assistanceDetails: $scope.assistanceDetails,
                    assistanceContact: $scope.assistanceContact
                }
                $scope.details = angular.toJson($scope.serviceTypeDetails);
                $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
                $("#add_new_Cuffin_Packing").modal('hide');
            }
        }
        $scope.savePetCremation = function () {
            // var details;
            // details = {
            //     dateOfService: $scope.dateOfService,
            //     timeOfService: $scope.timeOfService,
            //     costOfService: $scope.costOfService,
            //     clientAddress: $scope.clientAddress,
            //     petaddress: $scope.petaddress,
            //     sourceCity: $scope.sourceCity,
            //     petcity: $scope.petcity,
            //     clientfirstName: $scope.clientfirstName,
            //     clientlastName: $scope.clientlastName,
            //     clientAreaCode: $scope.clientAreaCode,
            //     clientphoneNumber: $scope.clientphoneNumber,
            //     assistanceDetails: $scope.assistanceDetails,
            //     assistanceContact: $scope.assistanceContact,
            //     additionalServiceDecoration: $scope.additionalServiceDecoration,
            //     additionalServicefuneral: $scope.additionalServicefuneral,
            //     lastripple: $scope.lastripple,
            //     petashes: $scope.petashes,
            //     costOfPackage: $scope.costOfPackage,
            //     decorationCost: $scope.decorationCost,
            //     funeralHelperCost: $scope.funeralHelperCost,
            // }
            $scope.details = angular.toJson($scope.serviceTypeDetails);
            $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
            $("#add_new_PetCremation").modal('hide');
        }
        $scope.saveDomesticHumAir = function () {
                var details;
                details = {
                    dateOfService: $scope.dateOfService,
                    timeOfService: $scope.timeOfService,
                    costOfService: $scope.costOfService,
                    filghtdetails: $scope.filghtdetails,
                    sourceCityAddress: $scope.sourceCityAddress,
                    sourceCity: $scope.sourceCity,
                    destinationCityAddress: $scope.destinationCityAddress,
                    destinationCity: $scope.destinationCity,
                    passengerTickets: $scope.passengerTickets,
                    noOfPassengers: $scope.noOfPassengers,
                    clientfirstName: $scope.clientfirstName,
                    clientlastName: $scope.clientlastName,
                    clientAreaCode: $scope.clientAreaCode,
                    clientphoneNumber: $scope.clientphoneNumber,
                    assistanceDetails: $scope.assistanceDetails,
                    assistanceDetailsVendors: $scope.assistanceDetailsVendors,
                    assistanceContact: $scope.assistanceContact
                };
            $scope.details = angular.toJson($scope.serviceTypeDetails);
            $scope.typeOfEnquiryList[$scope.index].details=$scope.details;
            $("#add_new_Domestic_Hum_Air").modal('hide');
        }
        $scope.getUserList = function () {
            $http.post($scope.hiposServerURL+"/getUserListBasedOnParent").then(function (response) {
                var data = response.data;
                $scope.userList = data;
            })
        };
        $scope.getUserList();
        $scope.getCallStatusList = function () {
            $http.post($scope.hiposServerURL+"/getCallStatusList").then(function (response) {
                var data = response.data;
                $scope.callStatusList = data;
            })
        };
        $scope.getCallStatusList();

        $scope.assign = function () {
            $("#add_new_assign_modal").modal('show');
        }
        $scope.saveAssignedUser = function () {
            $http.post($scope.hiposServerURL+"/assignToUser?assignedUser="+$scope.assignedUser+'&id='+localStorage.getItem("id")).then(function (response) {
                var data = response.data;
                if(data!=null){
                    $scope.getPaginationList();
                    $("#add_new_assign_modal").modal('hide');
                    Notification.success({
                        message: "Assigned Successfully",
                        positionX: 'center',
                        delay: 2000
                    });
                }
            })
        }
        $scope.saveFields = function () {
            $scope.details = angular.toJson($scope.keyList);
            $scope.typeOfEnquiryList[$scope.index].details = $scope.details;
            $scope.keyList=[];
            $("#add_new").modal('hide');
        };

        $scope.closeData = function () {
            $scope.keyList=[];
        }

        $scope.confirmenquiry = function (data) {
            bootbox.confirm({
                title: "Alert",
                message: "Do you want to Confirm Enquiry ?",
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
                        $http.post($scope.hiposServerURL +"/confirmEnquiry?id="+data.id).then(function (response) {
                            var data = response.data;
                            $scope.getPaginationList();
                            $window.location.href="anthyesti#!/client";
                            if(data!=null){
                                Notification.success({
                                    message: 'Successfully Confirmed',
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
        }
    });