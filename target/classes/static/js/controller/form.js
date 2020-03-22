app.controller('formController',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window) {
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
        $scope.format = 'dd/MM/yyyy';
        $scope.module = localStorage.getItem("pageName");
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        $scope.getKeyList = function () {
            $scope.moduleName = localStorage.getItem("pageName");
            $http.post($scope.hiposServerURL + "/getFieldsBasedOnModule?module=" + $scope.moduleName).then(function (response) {
                var data = response.data;
                $scope.previewList = data;
                angular.forEach($scope.previewList, function (value) {
                    if (value.valuetype == "dynamic") {
                        var moduleName = null;
                        if (value.moduleName != null && value.submoduleName == null && value.pageName == null) {
                            moduleName = value.moduleName;
                        } else if (value.moduleName != null && value.submoduleName != null && value.pageName == null) {
                            moduleName = value.submoduleName;
                        } else {
                            moduleName = value.pageName;
                        }
                        $http.post($scope.hiposServerURL + "/getForeignkeyvalues?moduleName=" + moduleName + '&feildName=' + value.fieldName).then(function (response) {
                            var datalist = response.data;
                            value.dynamicvalueList = datalist;
                        })
                    }
                })
            })
        }
        $scope.getKeyList();
        $scope.saveFields = function () {
            $scope.details = angular.toJson($scope.column2List);
            $scope.keyList=[];
            $("#add_new").modal('hide');
        };
        $scope.closeData = function () {
            $scope.keyList=[];
            $window.location.href="anthyesti#!/page";
            localStorage.setItem("type","");
        };
        $scope.editForm = function () {
            $scope.column1List=[];
            $http.post($scope.hiposServerURL+"/editFormPage?module="+localStorage.getItem("pageName")+"&id="+localStorage.getItem("id")).then(function (response) {
                var data = response.data;
                $scope.previewList = data;
                $window.location.href = "anthyesti#!/form";
            });
        }
        if (localStorage.getItem("type") == 'edit') {
            $scope.editForm();
        }

        $scope.openpopup = function (data) {
            $http.post($scope.hiposServerURL+"/getPopupDetails?popup="+data).then(function (response) {
                var data = response.data;
                $scope.popupList = data;
                $scope.popupList = angular.fromJson(data.details);
                $("#add_new_hearse_Van").modal('show');
            });
        }

        $scope.saveFormData = function () {
            $http.post($scope.hiposServerURL+"/saveFormData?module="+localStorage.getItem("pageName"),angular.toJson($scope.previewList)).then(function (response) {
                var data = response.data;
                localStorage.setItem("type","");
                if(data==1){
                    window.location.href="/anthyesti#!/page";
                    Notification.success({message:'Saved Successfully',positionX:'center',delay:2000})
                }else {
                    Notification.warning({message:'Saved Successfully',positionX:'center',delay:2000})
                }
            })
        }

    });