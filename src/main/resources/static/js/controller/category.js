
app.controller('categoryCtrl',
    function ($scope, $timeout,$http, $location, $filter, Notification,$window) {
        // body...\
        $scope.hiposServerURL =  "/hipos/";
        $scope.CategoryNameText = "";
        $scope.DescText="";
        $scope.PriceText="";
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
        $scope.removeCategoryDetails = function () {
            $scope.CategoryNameText = "";
            $scope.PriceText = "";
            $scope.DescText = "";
            $scope.StatusText =null;
            $scope.listStatus="";
            $scope.operation = "";
        };
        $scope.companyLogoPath = "";

        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/masters';
        };
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.editCategory = function(data) {
            $scope.setupobj = data;
            $scope.categoryId = data.categoryId;
            $scope.CategoryNameText = data.categoryName;
            $scope.DescText = data.description;
            $scope.PriceText = data.price;
            $scope.StatusText =data.status;
            $scope.operation='Edit';
            $('#category-title').text("Edit Country");
            $("#submit").text("Update");
            $("#add_new_category_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

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
            $scope.getCategoryList();

        };

        $scope.addNewCategoryPopulate = function () {
            $scope.CategoryNameText = "";
            $scope.PriceText = "";
            $scope.DescText = "";
            $scope.StatusText =null;
            $scope.listStatus="";
            $scope.operation = "";
            $scope.StatusText="Active";
            $('#category-title').text("Add Category");
            $("#submit").text("Save");
            $("#add_new_category_modal").modal('show');
        };

        $scope.importCountry = function(){
            $("#import_Country").modal('show');
        }

        $scope.downloadSheet = function(){
            var countries = "Country";
            $http({
                url: $scope.hiposServerURL + "/" + $scope.customer + '/countrySheet' + "/" + countries ,
                method: "POST",
                responseType: 'arraybuffer'
            }).success(function (data) {
                var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
                var objectUrl = url.createObjectURL(blob);
                window.open(objectUrl);
            }).error(function (data, status, headers, config) {
                //upload failed
            });

        };

        $scope.getCategoryList = function () {
            $http.post($scope.hiposServerURL+"/getCategoryList?&status=" +$scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.categoryList = data;
            })
        };
        $scope.getCategoryList();

        $scope.saveCategory = function () {
            if ($scope.CategoryNameText == ''||$scope.CategoryNameText==null||angular.isUndefined($scope.CategoryNameText)) {
                Notification.warning({message: 'Category Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var saveCategoryDetails;
                saveCategoryDetails = {
                    categoryId : $scope.categoryId,
                    categoryName: $scope.CategoryNameText,
                    description:$scope.DescText,
                    price:$scope.PriceText,
                    status:$scope.StatusText
                };
                $http.post($scope.hiposServerURL + '/saveCategory', angular.toJson(saveCategoryDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeCategoryDetails();
                        $scope.getCategoryList();
                        $("#add_new_category_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.categorySearchText = "";
                        }
                        Notification.success({
                            message: 'Country Created  successfully',
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
        // $scope.getPaginationList = function (page){
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
        //     if (angular.isUndefined($scope.countrySearchText)) {
        //         $scope.countrySearchText = "";
        //     }
        //     $http.post($scope.hiposServerURL + "/getpaginatedcountry?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.countrySearchText, angular.toJson(paginationDetails)).then(function (response) {
        //         var data = response.data;
        //         console.log(data);
        //         $scope.countryList = data.list;
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
        // $scope.getPaginationList();
        $scope.deleteCategory = function (data) {
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
                            categoryId:data.categoryId,
                            CategoryNameText:data.categoryName,
                            DescText:data.DescText,
                            PriceText:data.price,
                            StatusText:data.status

                        };
                        $http.post($scope.hiposServerURL +"/deleteCategory", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getCategoryList();
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