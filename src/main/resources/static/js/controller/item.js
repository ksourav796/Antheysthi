
app.controller('itemCntrl',
    function ($scope, $timeout,$http, $location, $filter, Notification) {
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
        $scope.removeItemDetails = function () {
            $scope.itemName = "";
            $scope.status =null;
            $scope.image="";
        };
        $scope.companyLogoPath = "";
        $scope.removeFile = function (index) {
            angular.forEach($scope.fileList,function (val,key) {
                if(index==key){
                    $scope.fileList.splice(index,1)
                }
            })
        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.fileList=[];
        $scope.fileList.push({id:$scope.fileList.length});
        $scope.addNewFile=function () {
            $scope.fileList.push({id:$scope.fileList.length});
        }
        $scope.files=[];
        $scope.showFileName=function (event) {
            angular.forEach($scope.fileList,function (val,key) {
                if($scope.fileId==key){
                    val.file=event.target.files[0];

                    var files = event.target.files;
                    var file = files[0];
                    var srcString;
                    var imageCompressor = new ImageCompressor;
                    var compressorSettings = {
                        toWidth: 200,
                        toHeight: 200,
                        mimeType: 'image/png',
                        mode: 'strict',
                        quality: 1,
                        grayScale: false,
                        sepia: false,
                        threshold: false,
                        speed: 'low'
                    };
                    if (files && file) {
                        var reader = new FileReader();
                        reader.onload = function (readerEvt) {
                            binaryString = readerEvt.target.result;
                            $('.image-preview').attr('src', binaryString);
                        };
                        reader.readAsDataURL(file);
                        reader.onloadend = function () {
                            srcString = $('.image-preview').attr("src");
                            imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                        };
                    }}
            })
        }
        $scope.editItem = function(data) {
            $scope.setupobj = data;
            $scope.itemId = data.itemId;
            $scope.itemName = data.itemName;
            $scope.status =data.status;
            $scope.image =data.image;
            $scope.operation='Edit';
            $('#country-title').text("Edit Item");
            $("#submit").text("Update");
            $("#add_new_Item_modal").modal('show');
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
            $scope.getPaginationList();

        };

        $scope.addItem = function () {
            $scope.status="Active";
            $('#country-title').text("Add Item");
            $("#submit").text("Save");
            $("#add_new_Item_modal").modal('show');
        };
        $scope.getItemList = function () {
            if (angular.isUndefined($scope.itemName)) {
                $scope.itemName = "";
            }
            $http.post($scope.hiposServerURL + '/getItemList?itemName=' + $scope.itemName).then(function (response) {
                var data = response.data;
                $scope.itemList = data;
            })
        };
        $scope.getItemList();


        // $scope.getItemList = function () {
        //     $http.post($scope.hiposServerURL+"/getItemList").then(function (response) {
        //         var data = response.data;
        //         $scope.itemList = data;
        //     })
        // };
        // $scope.getItemList();
        // $scope.saveCountryImport = function(){
        //     $scope.isDisabled= true;
        //     var formElement = document.getElementById("countyDetails");
        //     var countriesDetails = new FormData(formElement);
        //     $http.post($scope.hiposServerURL + '/countryImportSave',countriesDetails,
        //         { headers: {'Content-Type': undefined},
        //             transformRequest: angular.identity,
        //         }).then(function (response) {
        //             $("#import_Country").modal('hide');
        //             $scope.getPaginationList();
        //         $scope.isDisabled= false;
        //         }, function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //         $scope.isDisabled= false;
        //         }
        //     )
        // }

        $scope.saveItem = function () {
            var data = new FormData();
            angular.forEach($scope.fileList,function (val,key) {
                $scope.files.push(val.file);
            })
            for (var i = 0; i < $scope.files.length; i++) {
                data.append("files", $scope.files[i]);
            }
            var config = {
                transformRequest: angular.identity,
                transformResponse: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
            var saveItemDetails;
            saveItemDetails = {
                itemId : $scope.itemId,
                itemName: $scope.itemName,
                status:$scope.status,
                image:$scope.image
                };
                $http.post($scope.hiposServerURL + '/saveItem', angular.toJson(saveItemDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                         $scope.getItemList();
                        $("#add_new_Item_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Item Created  successfully',
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
        $scope.importItem = function(){
            $("#import_item").modal('show');
        };
        $scope.saveItemImport = function(){
            $scope.isDisabled= true;
            var formElement = document.getElementById("itemDetails");
            var itemDetails = new FormData(formElement);
            $http.post($scope.hiposServerURL + '/itemImport',itemDetails,
                { headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#import_item").modal('hide');
                    $scope.getItemList();
                    $scope.isDisabled= false;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                }
            )
        }
        $scope.Button = "SelectAll";
        $scope.selectAll = function () {

            if ($scope.clicked == false) {
                $scope.select = "SelectAll";
                $scope.Button = "UnSelectAll";
                angular.forEach($scope.itemList, function (val, key) {
                    val.checkbox = true;
                })
            }
            else {
                $scope.select = "UnSelectAll";
                $scope.Button = "SelectAll";
                angular.forEach($scope.itemList, function (val, key) {
                    val.checkbox = false;
                })
            }
            $scope.clicked = !$scope.clicked;
        };

    });