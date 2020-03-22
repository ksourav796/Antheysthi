
app.controller('serviceTypeController',
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
        $scope.removedetailsList = function (index) {
            angular.forEach($scope.detailsList,function (val,key) {
                if(index==key){
                    $scope.detailsList.splice(index,1);
                }
            })
        };
        $scope.removeValuesList = function (details,index) {
            angular.forEach(details.valueList,function (val,key) {
                if(index==key){
                    details.valueList.splice(index,1);
                }
            })
        };
        $scope.detailsList=[];
        $scope.detailsList.push({
            field:'',
            type:null,
            valueList:[{value:''}]
        });
        $scope.addNewdetailsList = function () {
            $scope.detailsList.push({
                field:'',
                type:null,
                valueList:[{value:''}]
            });
        };
        $scope.addNewValuesList = function (details) {
            details.valueList.push({
                value:''
            });
        };

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
        $scope.gettypeOfEnquiryList = function () {
            $http.post($scope.hiposServerURL + "/getTypeOfEnquiryList").then(function (response) {
                var data = response.data;
                $scope.enquiryTypeList = data;
            })
        };
        $scope.gettypeOfEnquiryList();
        $scope.addServiceType = function () {
            $scope.id=null;
            $scope.typeOfEnquiry= null;
            $scope.serviceType = "";
            $scope.detailsList=[];
            $scope.detailsList.push({
                type: '',
                field: null,
                valueList:[{value:''}]
            });
            $('#service-title').text("Add Service Type");
            $("#submit").text("Save");
            $("#add_new_Service_Type_modal").modal('show');
        };



        $scope.editServiceType = function (data) {
            $scope.id = data.id;
            $scope.serviceType = data.serviceType;
            $scope.typeOfEnquiry = data.typeOfEnquiry;
            $scope.detailsList = angular.fromJson(data.details);
            $("#add_new_Service_Type_modal").modal('show');
        };
        $scope.saveServiceType = function () {
            if ($scope.typeOfEnquiry == ''||$scope.typeOfEnquiry==null||angular.isUndefined($scope.typeOfEnquiry)) {
                Notification.warning({message: 'Please Select Type Of Enquiry', positionX: 'center', delay: 2000});
            }else  if ($scope.serviceType == ''||$scope.serviceType==null||angular.isUndefined($scope.serviceType)) {
                Notification.warning({message: 'Service Type cannot be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveDetails;
                saveDetails = {
                    id:$scope.id,
                    typeOfEnquiry : $scope.typeOfEnquiry,
                    serviceType: $scope.serviceType,
                    details:angular.toJson($scope.detailsList)
                };
                $http.post($scope.hiposServerURL + '/saveServiceType', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getPaginationList();
                        $("#add_new_Service_Type_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'Service Type Created  successfully',
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
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.hiposServerURL + "/getpaginatedServiceType?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.servceTypeList = data.list;
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

    });