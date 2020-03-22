
app.controller('pageController',
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
        $scope.module = localStorage.getItem("pageName");


        $scope.addForm = function () {
            $window.location.href = "anthyesti#!/form";
        };

        $scope.addCall = function (data,formData) {
            $scope.formValues = formData;
            localStorage.setItem("type", data);
            localStorage.setItem("id", formData.id);
            $window.location.href = '/anthyesti#!/form';
        };
        // if (localStorage.getItem("type") == 'edit') {
        //     $scope.editForm();
        // }
        // $scope.editForm = function () {
        //     $scope.data = $scope.formValues;
        //     $scope.column1List=[];
        //     $http.post($scope.hiposServerURL+"/editFormPage?module="+localStorage.getItem("pageName")+"&id="+$scope.data.id,angular.toJson($scope.data)).then(function (response) {
        //         var data = response.data;
        //         $scope.wholeData = data;
        //         $window.location.href = "anthyesti#!/form";
        //         $scope.column1List.push($scope.wholeData);
        //     });
        // }
        $scope.getList = function () {
            $http.post($scope.hiposServerURL+"/getFormList?module="+localStorage.getItem("pageName")).then(function (response) {
                var data = response.data;
                $scope.formList= data;
                angular.forEach($scope.formList,function (val,key) {
                console.log(val);
                })
            })
        }
        $scope.getList();
        $scope.getcreatePageList = function ()  {
            $scope.valuesList=[];
            $http.post($scope.hiposServerURL+"/getCreatePageListBasedOnModule?module="+localStorage.getItem("pageName")).then(function (response) {
                var data = response.data;
                $scope.keyList=[];
                $scope.keyLista=[];
                $scope.keyLists =angular.fromJson( data.details);
                angular.forEach($scope.keyLists,function (val,key) {
                    if(val.listdisplay!='no'){
                        $scope.keyList.push(val);
                    }else {
                        $scope.keyLista.push(val);
                    }
                })

            })
        }
        $scope.getcreatePageList();

    });