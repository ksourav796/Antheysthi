
app.controller('userCtrl',
    function ($scope, $http, $location, $filter, Notification, $timeout,$rootScope,$window) {
        // body...\
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.hiposServerURL =  "/hipos";
        $scope.UserNameText = "";
        $scope.parent= "";
        $scope.userRole= "";
        $scope.parent =$scope.agId;
        $scope.PasswordText="";
        $scope.FullNameText="";
        $scope.SecurityQuestionText="";
        $scope.AnswerText="";
        $scope.TeleNumText="";
        $scope.EmailText="";
        $scope.bcText="";
        $scope.biText="";
        $scope.UserTypeText="";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo = 0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        // $scope.getagencyList = function () {
        //     $http.post($scope.hiposServerURL+"/getagencyList").then(function (response) {
        //         var data = response.data;
        //         $scope.agencyList = data;
        //     })
        // };
        // $scope.getagencyList();


        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/creator';
        };
        $scope.getagencyListBasedOnFranchise = function () {
            $http.post($scope.hiposServerURL+"/getagencyListBasedOnFranchise").then(function (response) {
                var data = response.data;
                $scope.agencyList = data;
            })
        };
        $scope.getagencyListBasedOnFranchise();
        $scope.removeuserDetails = function () {
            $scope.userId = "";
            $scope.radioValue = "";
            $scope.userRole = null;
            $scope.franId = null;
            $scope.agId = null;
            $scope.FullNameText="";
            $scope.lastName = "";
            $scope.TeleNumText = "";
            $scope.userAddress = "";
            $scope.country =null;
            $scope.state =null;
            $scope.city = null;
            $scope.zipCode = "";
            $scope.notes ="";
            $scope.UserNameText = "";
            $scope.PasswordText = "";
            $scope.reTypePswd = "";
            $scope.calender = "";
        }
        $scope.companyLogoPath = "";
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.editUSer  = function(data) {
            $scope.userId = data.userId;
            $scope.radioValue = data.radioValue;
            $scope.userRole = data.userRole;
            $scope.parent = data.parent;
            $scope.franId = data.franId;
            $scope.agId = data.agencyId;
            $scope.FullNameText = data.firstName;
            $scope.lastName = data.lastName;
            $scope.email = data.email;
            $scope.TeleNumText = data.phone;
            $scope.userAddress = data.address;
            $scope.country =parseInt(data.country);
            $scope.getStatewebList(data.country);
            $scope.state =parseInt(data.state);
            $scope.getCitywebList(data.state);
            $scope.city = parseInt(data.city);
            $scope.zipCode = data.zipCode;
            $scope.notes = data.notes;
            $scope.UserNameText = data.userName;
            $scope.PasswordText = data.passwordUser;
            $scope.reTypePswd = data.reTypePswd;
            $scope.calender = data.calender;
            $scope.statuses = data.status;
            $scope.operation='Edit';
            $scope.getUserList();
            $('#user-title').text("Edit User");
            $("#add_new_user_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
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

        $scope.AddUser = function () {
            $scope.userId=null;
            $scope.parent=$rootScope.userName;
            $scope.userRole=null;
            $scope.agencyName=null;
            $scope.UserNameText="";
            $scope.PasswordText="";
            $scope.email="";
            $scope.statuses="Active";
            $scope.operation = 'Create';
            $scope.removeuserDetails();
            $('#user-title').text("Add User");
            $("#submit").text("Save");
            $("#add_new_user_modal").modal('show');
        };


        $scope.importCountry = function(){
            $("#import_Country").modal('show');
        }
        $scope.rajList={};
        $scope.getchangePermissions = function (key,val) {
            $scope.rajList[key]=val;
        };
        $scope.getUserPermissions = function (data) {
            $scope.userId = data.userId;
            $http.post($scope.hiposServerURL+"/getUserPermissions?id="+data.userId).then(function (response) {
                var data = response.data;
                $scope.allUserpermissions = data;
                $scope.rajList = data;
                $("#add_permissions_modal_1check").modal('show');
            })
        };

        $scope.saveUserPermissions = function () {
            $http.post($scope.hiposServerURL+"/saveUserPermissions?userId=" + $scope.userId, angular.toJson($scope.rajList)).then(function (response) {
                var data = response.data;
                $("#add_permissions_modal_1check").modal('hide');
                $scope.getUserList();
                Notification.success({
                    message: 'User Permission Updated   successfully',
                    positionX: 'center',
                    delay: 2000
                });
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        }

        $scope.getUserList = function () {
            $http.post($scope.hiposServerURL+"/getUserListBasedOnParent").then(function (response) {
                var data = response.data;
                $scope.userList = data;
            })
        };
        $scope.getUserList();
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

        $scope.getUserRoleList = function () {
            $http.post($scope.hiposServerURL+"/getUserRoleList").then(function (response) {
                var data = response.data;
                $scope.userRoleList = data;
            })
        };
        $scope.getUserRoleList();
        $scope.getFranchiseList = function () {
            $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
                var data = response.data;
                $scope.franchiseList = data;
            })
        };
        $scope.getFranchiseList();
        $scope.saveUser = function (){
            if ($scope.UserNameText == ''||$scope.UserNameText==null||angular.isUndefined($scope.UserNameText)){
                Notification.warning({message: 'User Name can not be empty', positionX: 'center', delay: 2000});
            }

            else if($scope.userRole == ''||$scope.userRole==null||angular.isUndefined($scope.userRole)){
                Notification.warning({message: 'User Role can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.UserNameText == ''||$scope.UserNameText==null||angular.isUndefined($scope.UserNameText)){
                Notification.warning({message: 'User Name can not be empty', positionX: 'center', delay: 2000});
            }
            else if($scope.PasswordText == ''||$scope.PasswordText==null||angular.isUndefined($scope.PasswordText)){
                Notification.warning({message: 'Password can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveUserDetails;
                saveUserDetails = {
                    userId : $scope.userId,
                    parent :  $scope.parent,
                    agencyId : $scope.agId,
                    franId : $scope.franId,
                    userRole : $scope.userRole,
                    firstName:$scope.FullNameText,
                    lastName:$scope.lastName,
                    email:$scope.email,
                    phone:$scope.TeleNumText,
                    address:$scope.userAddress,
                    country:$scope.country,
                    state:$scope.state,
                    city:$scope.city,
                    zipCode:$scope.zipCode,
                    notes:$scope.notes,
                    userName: $scope.UserNameText,
                    passwordUser:$scope.PasswordText,
                    reTypePswd:$scope.reTypePswd,
                    calender:$scope.calender,
                    radioValue:$scope.radioValue,
                    status:$scope.statuses

                };
                $http.post($scope.hiposServerURL + '/saveUser',angular.toJson(saveUserDetails, "Create")).then(function (response, status, headers, config){
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                         $scope.removeuserDetails();
                        $scope.getUserList();
                        $("#add_new_user_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null){
                            $scope.userSearchText = "";
                        }
                        Notification.success({
                            message: 'User Created  successfully',
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
        };



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
        // $scope.getPaginatedUserList = function (page){
        //     switch (page){
        //         case 'firstPage':
        //             $scope.firstPage = true;
        //             $scope.lastPage = false;
        //             $scope.isNext = false;
        //             $scope.isPrev = false;
        //             $scope.pageNo = 0;
        //             break;
        //         case 'lastPage':
        //             $scope.lastPage = true;
        //             $scope.firstPage = false;
        //             $scope.isNext = false;
        //             $scope.isPrev = false;
        //             $scope.pageNo = 0;
        //             break;
        //         case 'nextPage':
        //             $scope.isNext = true;
        //             $scope.isPrev = false;
        //             $scope.lastPage = false;
        //             $scope.firstPage = false;
        //             $scope.pageNo = $scope.pageNo + 1;
        //             break;
        //         case 'prevPage':
        //             $scope.isPrev = true;
        //             $scope.lastPage = false;
        //             $scope.firstPage = false;
        //             $scope.isNext = false;
        //             $scope.pageNo = $scope.pageNo - 1;
        //             break;
        //         default:
        //             $scope.firstPage = true;
        //     }
        //     var paginationDetails;
        //     paginationDetails = {
        //         firstPage: $scope.firstPage,
        //         lastPage: $scope.lastPage,
        //         pageNo: $scope.pageNo,
        //         prevPage: $scope.prevPage,
        //         prevPage: $scope.isPrev,
        //         nextPage: $scope.isNext
        //     }
        //     if (angular.isUndefined($scope.SearchText)) {
        //         $scope.SearchText = "";
        //     }
        //     $http.post($scope.hiposServerURL + "/getPaginatedUserList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.SearchText, angular.toJson(paginationDetails)).then(function (response) {
        //         var data = response.data;
        //         $scope.userList = data.list;
        //         $scope.first = data.firstPage;
        //         $scope.last = data.lastPage;
        //         $scope.prev = data.prevPage;
        //         $scope.next = data.nextPage;
        //         $scope.pageNo = data.pageNo;
        //         $scope.listStatus = true;
        //
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     })
        // };
        // $scope.getPaginatedUserList();
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
                            $scope.getPaginationList();
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