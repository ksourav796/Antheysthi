
app.controller('createFormPageController',
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


        $scope.addNewdetailsList = function (index,column) {
            $scope.NoOfColumnsList.push({
                columns:'1',
                detailsList:[{
                    noOfColumn:"R"+($scope.NoOfColumnsList.length+1) +"C1",
                    labelposition :'top',
                    listdisplay:'no',
                    valuetype:'static'
                }]
            });
        };
        $scope.closeData = function () {
            $window.location.href="anthyesti#!/createFormPage";
            localStorage.setItem("type","add");
        };
        $scope.increaseColumns = function (column,index) {
            column.columns = parseInt(column.columns) + 1;
            column.detailsList.push({
                field: '',
                type: null,
                validations: null,
                row: '',
                noOfColumn:("R" + index + "C" + column.columns),
                labelposition :'top',
                listdisplay:'no',
                valuetype:'static',
                valueList: [{value: ''}]
            });
        };
        // $scope.decreaseColumns = function (column) {
        //     column.columns = parseInt(column.columns) - 1;
        //     $scope.preview();
        // };
        $scope.NoOfColumnsList=[];
        $scope.NoOfColumnsList.push({
            columns:'1',
            detailsList:[{
                noOfColumn:["R1C1"],
                labelposition :'top',
                listdisplay:'no',
                valuetype:'static'
            }]
        });

        $scope.detailsList=[];
        $scope.getColumnsList = function (columns,column,index) {
            if(columns==""){
                $scope.detailsList = [];
            }
            if (columns >= 5) {
                $scope.columnList = [];
                Notification.warning({message: 'Columns Should not be more than', positionX: 'center', delay: 2000})
                $scope.columns = "";
            }
            else {
                $scope.columnList = [];
                // column.detailsList = [];
                for (var i = 1; i <= columns; i++) {
                    $scope.columnList.push(i);
                    column.rowcolumnList = [];
                    angular.forEach($scope.columnList, function (colu, key) {
                        column.noOfColumn.push("R" + index + "C" + colu);

                    })
                }
            }
        };

        $scope.getmoduleList = function () {
            $http.post($scope.hiposServerURL+"/getModuleList").then(function (response) {
                var data = response.data;
                $scope.moduleList =data;
            })
        };
        $scope.getmoduleList();
        $scope.getSubmoduleList = function (module) {
            $http.post($scope.hiposServerURL+"/getSubModuleListBasedOnModule?module="+module).then(function (response) {
                var data = response.data;
                $scope.subModuleList =data;
            })
        };

        $scope.preview = function () {
            $scope.previewList=[];
            angular.forEach($scope.NoOfColumnsList,function (val,key) {
            angular.forEach(val.detailsList,function (value,key) {
                value.columnwidth=100/parseInt(val.columns);
                if(value.columnwidth=="100"){
                    value.classwidth ="col-lg-12 col-md-12 col-sm-12 col-xs-12";
                    $scope.previewList.push(value);
                }else if(value.columnwidth=="50"){
                    value.classwidth ="col-lg-6 col-md-6 col-sm-6 col-xs-12";
                    $scope.previewList.push(value);
                }else if(value.columnwidth=="33.333333333333336"){
                    value.classwidth ="col-lg-4 col-md-4 col-sm-4 col-xs-12";
                    $scope.previewList.push(value);
                } else if(value.columnwidth=="25"){
                    value.classwidth ="col-lg-3 col-md-3 col-sm-3 col-xs-12";
                    $scope.previewList.push(value);
                }
            })
            })
        };


         $scope.openpreview = function (type) {
             localStorage.setItem("type",type);
             localStorage.setItem("previewList",angular.toJson($scope.previewList));
             $window.location.href = "anthyesti#!/pagePreview";
             // $("#openpreview").modal('show');
         };


        $scope.removeValuesList = function (settings,index) {
            angular.forEach(settings.valueList,function (val,key) {
                if(index==key){
                    settings.valueList.splice(index,1);
                }
            })
        };
        $scope.addNewValuesList = function (settings) {
            settings.valueList.push({
                value:''
            });
        };
        $scope.removedetailsList = function (column,index) {
            angular.forEach(column.detailsList,function (val,key) {
                if(index==key){
                    column.detailsList.splice(index,1);
                    column.columns = parseInt(column.columns) - 1;
                }
            })
        };
        $scope.removeNoOfColumnsList = function (column,index) {
            angular.forEach($scope.NoOfColumnsList,function (val,key) {
                if(index==key){
                    $scope.NoOfColumnsList.splice(index,1);
                }
            })
        };

        $scope.editCreatePage = function () {
            localStorage.setItem("type","");
            $http.post($scope.hiposServerURL + "/editCreatePage?id=" + localStorage.getItem("id")).then(function (response) {
                var data = response.data;
                $scope.id = data.id;
                $scope.moduleName = data.moduleName;
                $scope.pageName = data.pageName;
                $scope.getSubmoduleList($scope.moduleName);
                $scope.submoduleName = data.submoduleName;
                $scope.NoOfColumnsList = angular.fromJson(data.columns);
                $scope.detailsList = angular.fromJson(data.details);
                angular.forEach($scope.detailsList, function (val, key) {
                    val.oldfield = val.field;
                    $scope.getFeildNames(val.moduleName);
                });
                $scope.preview();
                // $scope.getOnlyColumns($scope.columns);
            })
        }
        if (localStorage.getItem("type") == 'edit') {
            $scope.operation='Edit';
            $scope.editCreatePage();
        } else  if(localStorage.getItem("type")=="add"){
            $scope.operation='Add';
            $window.location.href = "anthyesti#!/createFormPage";
        } else  if(localStorage.getItem("type")==""){
            $window.location.href = "anthyesti#!/createpage";
        }else  if(localStorage.getItem("type")=="preview"){
            $scope.previewList = angular.fromJson(localStorage.getItem("previewList"))
        }
        $scope.saveCreatePage = function () {
            // if ($scope.moduleName == null || $scope.moduleName == '' || angular.isUndefined($scope.moduleName)) {
            //     Notification.warning({message: 'Module name Cannot be empty', positionX: 'center', delay: 2000})
            // }
            // else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var details;
                details = {
                    id: $scope.id,
                    moduleName: $scope.moduleName,
                    pageName: $scope.pageName,
                    submoduleName: $scope.submoduleName,
                    columns: angular.toJson($scope.NoOfColumnsList),
                    details: angular.toJson($scope.previewList)
                };
                $http.post($scope.hiposServerURL + "/saveCreatePage", angular.toJson(details)).then(function (response) {
                    var data = response.data;
                    $window.location.href = "anthyesti#!/createpage";
                    $window.location.reload();
                    if (data == "") {
                        Notification.warning({message: 'Already Exists', positionX: 'center', delay: 2000})
                    } else {
                        $scope.getcreatePageList();
                        $("#add_new_create_modal").modal('hide');
                        Notification.success({message: 'Saved Successfully', positionX: 'center', delay: 2000})
                    }
                })
            // }
        };
        $scope.getcreatePageList = function () {
            $http.post($scope.hiposServerURL+"/getCreatePageL").then(function (response) {
                var data = response.data;
                $scope.createPageList = data;
            })
        };
        $scope.getcreatePageList();
      

        $scope.getFeildNames = function (value) {
            angular.forEach($scope.createPageList, function (val) {
                if (val.pageName == value) {
                    $scope.feildList = angular.fromJson(val.details);
                }
            })
        };



        $scope.closeForm = function () {
            $window.location.href = "anthyesti#!/createpage";
        };

        $scope.captalize = function(str){
            var words = str.toLowerCase().split(' ');
            for (var i = 0; i < words.length; i++) {
                var letters = words[i].split('');
                letters[0] = letters[0].toUpperCase();
                words[i] = letters.join('');
            }
            return words.join(' ');
        }

        $scope.openSettings = function (data,parentIndex,childindex) {
            if(data.field==""||data.field==null||angular.isUndefined(data.field)){
                Notification.warning({message: 'Please Enter Field Name', positionX: 'center', delay: 2000})
            }else {
                if (data.valueList != null) {
                    data.valueList = data.valueList;
                } else {
                    data.valueList = [];
                    data.valueList.push({value: ''});
                }
                if (data.labelposition == null) {
                    data.labelposition = 'top';
                }
                if(data.hideLabel==null){
                    data.hideLabel = false;
                }
                if(data.inputformat==null){
                    data.inputformat = 'plain';
                }
                if(data.listdisplay == null){
                    data.listdisplay = 'no';
                }
                $scope.parentindex = parentIndex;
                $scope.childindex = childindex;
                if(data.label==null){
                    $scope.field = data.field;
                }else {
                    $scope.field = data.label;
                }
                $scope.type = data.type;
                $scope.settings = data;
                $scope.getFeildNames(data.moduleName);
                $("#add_new_open_settings").modal('show');
            }
        };
        $("[data-toggle=tooltip]").tooltip();
        $scope.saveSettings = function () {
            $scope.settings.field = $scope.field;
            $scope.settings.noOfColumn = $scope.NoOfColumnsList[$scope.parentindex].detailsList[$scope.childindex].noOfColumn;
            $scope.settings.field = $scope.NoOfColumnsList[$scope.parentindex].detailsList[$scope.childindex].field;
            $scope.settings.type = $scope.NoOfColumnsList[$scope.parentindex].detailsList[$scope.childindex].type;
            $scope.NoOfColumnsList[$scope.parentindex].detailsList[$scope.childindex]=$scope.settings;
            $scope.preview();
            $("#add_new_open_settings").modal('hide');
        }

        /* For Popup*/
        $scope.openPopup = function () {
            $scope.getPopupList();
            $("#add_new_open_popup").modal('show');
        }


        $scope.NoOfColumnsListPopup=[];
        $scope.NoOfColumnsListPopup.push({
            columns:'1',
            detailsListPopup:[{
                noOfColumn:["R1C1"],
                labelposition :'top',
                listdisplay:'no',
                valuetype:'static'
            }]
        });

        $scope.detailsListPopup=[];
        $scope.getColumnsListPopup = function (columns,column,index) {
            if(columns==""){
                $scope.detailsListPopup = [];
            }
            if (columns >= 5) {
                $scope.columnList = [];
                Notification.warning({message: 'Columns Should not be more than', positionX: 'center', delay: 2000})
                $scope.columns = "";
            }
            else {
                $scope.columnList = [];
                // column.detailsList = [];
                for (var i = 1; i <= columns; i++) {
                    $scope.columnList.push(i);
                    column.rowcolumnList = [];
                    angular.forEach($scope.columnList, function (colu, key) {
                        column.noOfColumn.push("R" + index + "C" + colu);

                    })
                }
            }
        };


        $scope.increaseColumnsPopup = function (column,index) {
            column.columns = parseInt(column.columns) + 1;
            column.detailsListPopup.push({
                field: '',
                type: null,
                validations: null,
                row: '',
                noOfColumn:("R" + index + "C" + column.columns),
                valueList: [{value: ''}]
            });
        };


        $scope.addNewdetailsListPopup = function (index,column) {
            $scope.NoOfColumnsListPopup.push({
                columns:'1',
                detailsListPopup:[{
                    noOfColumn:"R"+($scope.NoOfColumnsListPopup.length+1) +"C1"
                }]
            });
        };


        $scope.removedetailsListPopup = function (column,index) {
            angular.forEach(column.detailsListPopup,function (val,key) {
                if(index==key){
                    column.detailsListPopup.splice(index,1);
                    column.columns = parseInt(column.columns) - 1;
                }
            })
        };

        $scope.pList=[];
        $scope.savePopupData = function () {
           $scope.pList= angular.toJson($scope.popupName);
            $("#add_new_open_popup").modal('hide');
        };

        $scope.getPopupList = function () {
            $http.post($scope.hiposServerURL+"/getPopupList").then(function (response) {
                var data = response.data;
                $scope.popupList = data;
                $scope.pList=[];
                $scope.pList.push($scope.popupList);
            })
        };
        $scope.getPopupList();
    });