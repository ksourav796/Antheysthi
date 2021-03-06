
app.controller('submoduleController',
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

        $scope.companyLogoPath = "";


        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";



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

        $scope.editSubModule = function (data) {
            $scope.id = data.id;
            $scope.moduleName = data.moduleName;
            $scope.submoduleName = data.subModuleName;
            $scope.StatusText = data.status;
            $('#submodule-title').text("Edit Sub Module");
            $("#submit").text("Save");
            $("#add_new_submodule_modal").modal('show');
        }

        $scope.addSubModule = function () {
            $scope.id='';
            $scope.moduleName = null;
            $scope.submoduleName = "";
            $scope.StatusText="Active";
            $('#submodule-title').text("Add Sub Module");
            $("#submit").text("Save");
            $("#add_new_submodule_modal").modal('show');
        };


        $scope.getmoduleList = function () {
            $http.post($scope.hiposServerURL+"/getModuleList").then(function (response) {
                var data = response.data;
                $scope.moduleList =data;
            })
        };
        $scope.getmoduleList();
        $scope.getSubModuleList = function () {
            $http.post($scope.hiposServerURL+"/getSubModuleList").then(function (response) {
                var data = response.data;
                $scope.subModuleList =data;
            })
        };
        $scope.getSubModuleList();
        $scope.saveSubModule = function () {
            if ($scope.moduleName == ''||$scope.moduleName==null||angular.isUndefined($scope.moduleName)) {
                Notification.warning({message: 'Module Name can not be empty', positionX: 'center', delay: 2000});
            }else  if ($scope.submoduleName == ''||$scope.submoduleName==null||angular.isUndefined($scope.submoduleName)) {
                Notification.warning({message: 'Sub Module Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var savesubModuleDetails;
                savesubModuleDetails = {
                    id : $scope.id,
                    moduleName: $scope.moduleName,
                    subModuleName: $scope.submoduleName,
                    status:$scope.StatusText
                };
                $http.post($scope.hiposServerURL + '/saveSubModule', angular.toJson(savesubModuleDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getSubModuleList();
                        $("#add_new_submodule_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Sub Module Created  successfully',
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
            if (angular.isUndefined($scope.countrySearchText)) {
                $scope.countrySearchText = "";
            }
            $http.post($scope.hiposServerURL + "/getpaginatedcountry?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.countrySearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.countryList = data.list;
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