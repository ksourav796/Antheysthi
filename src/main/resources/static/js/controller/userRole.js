/**
 * Created by prasad on 7/1/2017.
 */

app.controller('userRoleCtrl',
    function ($scope, $http, $location, $filter, Notification,$window) {
        $scope.roleId = "";
        $scope.roleName = "";
        $scope.status = "Active";
        $scope.hiposServerURL =  "/hipos/";
        $scope.deductionDescription = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;

        $scope.removeRoleDetails = function () {
            $scope.roleId = "";
            $scope.roleName = "";
            $scope.roleStatus = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };
        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/creator';
        };
        $scope.inactiveButton = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginatedUserRoleList();

        };
        //TO ADD//
        $scope.addRole = function () {
            $(".loader").css("display", "block");
            $scope.roleId = "";
            $scope.roleName = "";
            $scope.status = "Active";
            $scope.removeRoleDetails();
            $('#modelName').text("Add Role");
            $("#submit").text("Save");
            $("#add_new_Role_modal").modal('show');
        };


        $scope.editRole = function (data) {
            $scope.roleId=data.roleId;
            $scope.roleName=data.roleName;
            $scope.status=data.roleStatus;
            // $('#modelName').text("Edit Deduction");
            // $("#submit").text("Save");
            $("#add_new_Role_modal").modal('show');

        }

        //   ToSAVE//
        $scope.saveRole = function () {
            if ($scope.roleName == '' || $scope.roleName == null || angular.isUndefined($scope.roleName)) {
                Notification.warning({message: 'UserRole  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveRole;
                saveRole = {
                    roleId: $scope.roleId,
                    roleName: $scope.roleName,
                    roleStatus: $scope.status

                };
                $http.post($scope.hiposServerURL  + '/saveRole', angular.toJson(saveRole, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getPaginatedUserRoleList();
                    if (data === "") {
                        $scope.isDisabled = false;
                        Notification.error({
                            message: 'UserRole  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Role_modal").modal('hide');
                        Notification.success({
                            message: 'UserRole  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });

                        $scope.removeRoleDetails();
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
            ;
        }
        $scope.activityObj=[];
        $scope.saveactivity=function(val,type){
            if(type==true) {
                $scope.activityObj.push(val)
            }else if(type==false){
                var index=$scope.activityObj.indexOf(val);
                $scope.activityObj.splice(index,1);
            }
        }

        $scope.savePermissions = function () {
            $http.post($scope.hiposServerURL + '/savePermissions?roleId=' + $scope.roleId, angular.toJson($scope.rajList)).then(function (response) {
                var data = response.data;
                $("#add_permissions_modal_1check").modal('hide');

                $scope.getPaginatedUserRoleList();
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
        $scope.rajList={};
        $scope.getchangePermissions = function (key,val) {
            $scope.rajList[key]=val;
        };
        $scope.addPermisstion = function () {
            $scope.list=[];
            angular.forEach($scope.activityObj,function (val,key) {
                $scope.list.push(val)
            })
            $scope.userAccessRights.activity=angular.toJson($scope.list);
            $http.post($scope.hiposServerURL + '/saveUserAccessRights?roleId='+$scope.roleId, angular.toJson($scope.userAccessRights, "Create")).then(function (response) {
                var data = response.data;
                $window.location.reload();
                $("#add_permissions_modal_1check").modal('hide');

                $scope.getPaginatedUserRoleList();
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

        $scope.permissions = function (data) {
            $scope.roleId = data.roleId;
            $http.post($scope.hiposServerURL+'/getUserRolePermissions?id='+data.roleId).then(function (response) {
               var data= response.data;
               $scope.allpermissions = data;
               $scope.rajList= data;
                $("#add_permissions_modal_1check").modal('show');
            });
        };

        $scope.permissionUserAccountSetup11 = function (data) {
            $scope.roleId = data.roleId;
            $http.post('/hipos/getEditUserAccessRights?roleId=' + data.roleId).then(function (response) {
                var data = response.data;
                $scope.userObj = data;
                $scope.userAccessRights = data.userAccessRights;
                console.log($scope.activityList);
                // $scope.getActivityList();
                $("#add_permissions_modal_1check").modal('show');
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        
        $scope.getActivityList = function () {
            $http.post($scope.hiposServerURL+"/getactivityList").then(function (response) {
                var data = response.data;
                $scope.activityList = data;

            })
        };
        $scope.getActivityList();

        $scope.getPaginatedUserRoleList = function (page) {
            switch (page) {
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
            $http.post($scope.hiposServerURL + "/getPaginatedUserRoleList?&type=" +  $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.roleList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeRoleDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedUserRoleList();

    });

