
app.controller('franchiseController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$rootScope) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.CountryNameText = "";
        $scope.StatusText = "";
        $scope.FranParent = $scope.franName;
        $scope.operation = 'Create';
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo = 0;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.customer=1;
        $scope.inactiveStatus="Active";
        $scope.removeDetails = function () {
            $scope.franchiseName = "";
            $scope.companyName ="";
            $scope.country= null;
            $scope.state = null;
            $scope.city = null;
            $scope.franchiseEmail = "";
            $scope.franchiseAddress = "";
            $scope.franchiseContactNo = "";
            $scope.franchiseLandNo = "";
            $scope.remarks = "";
        };

        $scope.getCountryList = function () {
            $http.post($scope.hiposServerURL+"/getCountryList").then(function (response) {
                var data = response.data;
                $scope.countryList = data;
            })
        };
        $scope.getCountryList();

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";


        $scope.emailsList = [];
        $scope.emailsList.push({
            name:''
        });

        $scope.addNewEmail = function(){
            $scope.emailsList.push({
                name:''
            });
        };


        $scope.mobileList = [];
        $scope.mobileList.push({
            name:""
        });

        $scope.addNewMob = function(){
            $scope.mobileList.push({
                name:''
            });
        };
        $scope.removeEmail = function (index) {
            angular.forEach($scope.emailsList,function (val,key) {
                if(index==key){
                    $scope.emailsList.splice(index,1)
                }
            })
        };
        $scope.removePhone = function (index) {
            angular.forEach($scope.mobileList,function (val,key) {
                if(index==key){
                    $scope.mobileList.splice(index,1)
                }
            })
        };


        $scope.editFranchise = function(data) {
            $scope.fId=data.fId;
            $scope.franchiseCode= data.franchiseCode, $scope.franchiseName = data.franchiseName;
            $scope.FranParent=data.parent;
            $scope.companyName = data.companyName;
            $scope.country =parseInt(data.country);
            $scope.getStatewebList($scope.country);
            $scope.state = parseInt(data.state);
            $scope.getCitywebList($scope.state);
            $scope.city = parseInt(data.city);
            $scope.franchiseEmail = data.franchiseEmail;
            $scope.franchiseAddress = data.franchiseAddress;
            $scope.franchiseContactNo = data.franchiseContactNo;
            $scope.franchiseLandNo = data.franchiseLandNo;
            $scope.remarks =data.remarks;
            $scope.username=data.userName;
            $scope.password=data.password;
            // $scope.getUserRoleList();
            $scope.userRole = data.userRole;
            $("#add_new_franchise_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.addFranchise = function () {
            $scope.getcountrywebList();
            $scope.country =null;
            $scope.state =null;
            $scope.city = null;
            $scope.FranParent=$rootScope.franName;
            $scope.removeDetails();
            $scope.getEnqGenNo();
            $scope.StatusText="Active";
            $("#add_new_franchise_modal").modal('show');
        };


        $scope.getFranchiseList = function () {
            $http.post($scope.hiposServerURL+"/getFranchiseList").then(function (response) {
                var data = response.data;
                $scope.franchiseList = data;
            })
        };
        $scope.getFranchiseList();

        $scope.getEnqGenNo = function () {
            $(".loader").css("display", "block");
            $http.post($scope.hiposServerURL  + "/generateFranchiseNo").then(function (response) {
                $scope.franchiseCode= response.data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getUserRoleList = function () {
            $http.post($scope.hiposServerURL+"/getUserRoleList").then(function (response) {
                var data = response.data;
                $scope.userRoleList = data;
            })
        };
        $scope.getUserRoleList();
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
        $scope.getcountrywebList = function () {

            $http.get($scope.hiposServerURL+"/getcountrywebList").then(function (response) {
                var data = response.data;
                $scope.countrywebList = data.data;
            })
        };
        $scope.getcountrywebList();
        $scope.getStatewebList = function (data) {
            $http.get($scope.hiposServerURL+"/getStatewebList?countryid=" + data).then(function (response) {
                var data = response.data;
                $scope.statewebList = data.data;
            })
        };

        $scope.getCitywebList = function (data) {
            $http.get($scope.hiposServerURL+"/getCitywebList?stateid="+data).then(function (response) {
                var data = response.data;
                $scope.citywebList = data.data;
            })
        };


        $scope.saveFranchise = function () {
            if ($scope.username == ''||$scope.username==null||angular.isUndefined($scope.username)) {
                Notification.warning({message: 'UserName can not be empty', positionX: 'center', delay: 2000});
            } else if ($scope.password == ''||$scope.password==null||angular.isUndefined($scope.password)) {
                Notification.warning({message: 'Password Can not be empty', positionX: 'center', delay: 2000});
            }else if ($scope.userRole == ''||$scope.userRole==null||angular.isUndefined($scope.userRole)) {
                Notification.warning({message: 'Please Select UserRole', positionX: 'center', delay: 2000});
            }else if ($scope.franchiseName == ''||$scope.franchiseName==null||angular.isUndefined($scope.franchiseName)) {
                Notification.warning({message: 'FranchiseName Cannot be Empty', positionX: 'center', delay: 2000});
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
            else if($scope.franchiseEmail == ''||$scope.franchiseEmail==null||angular.isUndefined($scope.franchiseEmail)) {
                Notification.warning({message: 'Email can not be empty', positionX: 'center', delay: 2000});
            }
            else {
            var saveAgencyDetails;
                saveAgencyDetails = {
                    fId: $scope.fId,
                    parent: $scope.FranParent,
                    franchiseCode: $scope.franchiseCode,
                    companyName: $scope.companyName,
                    franchiseName: $scope.franchiseName,
                    country: $scope.country,
                    state: $scope.state,
                    city: $scope.city,
                    franchiseEmail: $scope.franchiseEmail,
                    franchiseContactNo:$scope.franchiseContactNo,
                    // franchiseEmail: $scope.franchiseEmail,
                    franchiseAddress: $scope.franchiseAddress,
                    // franchiseContactNo: $scope.franchiseContactNo,
                    franchiseLandNo: $scope.franchiseLandNo,
                    remarks: $scope.remarks,
                    password:$scope.password,
                    agName:$scope.aguser,
                    userRole:$scope.userRole,
                    zipCode:$scope.zipcode,
                    userName:$scope.username
                };
                $http.post($scope.hiposServerURL + '/saveFranchise', angular.toJson(saveAgencyDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeDetails();
                        $scope.getFranchiseList();
                        $("#add_new_franchise_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Franchise Created  successfully',
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
        };
    });