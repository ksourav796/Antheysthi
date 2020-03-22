
app.controller('createPageController',
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



        $scope.addNewdetailsList = function (index) {
            for(var i=1;i<=$scope.columns;i++){
            $scope.detailsList.push({
                field:'',
                type:null,
                validations:null,
                row:index+1,
                valueList:[{value:''}]
            });
            }
            // $scope.getColumnsList($scope.columns);
        };
        $scope.getColumnsList = function (columns) {
            if(columns==""){
                $scope.detailsList = [];
            }
            if (columns >= 3) {
                $scope.columnList = [];
                Notification.warning({message: 'Columns Should not be more than', positionX: 'center', delay: 2000})
                $scope.columns = "";
            }
            else {
                $scope.columnList = [];
                for (var i = 1; i <= columns; i++) {
                    $scope.columnList.push(i);
                    $scope.detailsList.push({
                        field:'',
                        type:null,
                        validations:null,
                        row:'',
                        valueList:[{value:''}]
                    });
                }
            }
        };

        $scope.getOnlyColumns = function (columns) {
            $scope.columnList = [];
            for (var i = 1; i <= columns; i++) {
                $scope.columnList.push(i);
            };
        }



        $scope.removeValuesList = function (details,index) {
            angular.forEach(details.valueList,function (val,key) {
                if(index==key){
                    details.valueList.splice(index,1);
                }
            })
        };
        $scope.addNewValuesList = function (details) {
            details.valueList.push({
                value:''
            });
        };
        $scope.removedetailsList = function (index) {
            angular.forEach($scope.detailsList,function (val,key) {
                if(index==key){
                    $scope.detailsList.splice(index,1);
                }
            })
        };
        $scope.addCreatePage = function () {
            $scope.detailsList=[];
            $window.location.href = "anthyesti#!/createFormPage";
        };

        $scope.createPage = function (type,id) {
            localStorage.setItem("type",type);
            localStorage.setItem("id",id);
            $window.location.href = "anthyesti#!/createFormPage";
        };


        $scope.getcreatePageList = function () {
            $http.post($scope.hiposServerURL+"/getCreatePageList").then(function (response) {
                var data = response.data;
                $scope.createPageList = data;
            })
        };
        $scope.getcreatePageList();

        $scope.getFeildNames = function (value) {
            angular.forEach($scope.createPageList, function (val) {
                if (val.moduleName == value) {
                    $scope.feildList = angular.fromJson(val.details);
                }
            })
        }

    });