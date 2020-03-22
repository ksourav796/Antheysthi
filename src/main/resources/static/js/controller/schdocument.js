
app.controller('SchDocumnetCtrl',
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
        $scope.format = 'dd/MM/yyyy';
        $scope.removeDocDetails = function () {
            $scope.file ="";
            $scope.documentName ="";
            $scope.emailSubject = "";
            $scope.emailBody = "";
            $scope.sms = "";
            $scope.status ="";
        };
        $scope.companyLogoPath = "";
        $scope.openB = function() {
            $scope.popupB.opened = true;
        };
        $scope.popupB = {
            opened: false
        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.editDocument = function(data) {
            $scope.id = data.id;
            $scope.file = data.file;
            $scope.documentName = data.documentName;
            $scope.emailSubject = data.emailSubject;
            $scope.emailBody = data.emailBody;
            $scope.sms = data.sms;
            $scope.status =data.status;
            $scope.operation='Edit';
            $('#country-title').text("Edit Document");
            $("#submit").text("Update");
            $("#add_new_document_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };


        $scope.goBack = function () {
            $window.location.href='/anthyesti#!/masters';
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

        $scope.addDocument = function () {
            $scope.id=null;
            $scope.statusss="Active";
            $scope.removeDocDetails();
            $('#country-title').text("Add Document");
            $("#submit").text("Save");
            $("#add_new_document_modal").modal('show');
        };

        $scope.removeFile = function (index) {
            angular.forEach($scope.fileList,function (val,key) {
                if(index==key){
                    $scope.fileList.splice(index,1)
                }
            })
        };
        $scope.getDocumentList = function () {
            $http.post($scope.hiposServerURL+"/getDocumentList").then(function (response) {
                var data = response.data;
                $scope.documentList = data;
            })
        };
        $scope.getDocumentList();
        $scope.saveDocument = function () {
            var data = new FormData();
                angular.forEach($scope.fileList,function (val,key) {
                    $scope.files.push(val.file);
                    $scope.docDayDate.push(val.docDayDate);
                })
                for (var i = 0; i < $scope.files.length; i++) {
                    data.append("files", $scope.files[i]);
                    data.append("docDayDate", $scope.docDayDate[i]);
                }
                var config = {
                    transformRequest: angular.identity,
                    transformResponse: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                }
                var details;
                details = {
                    id: $scope.id,
                    documentName: $scope.documentName,
                    emailSubject: $scope.emailSubject,
                    emailBody: $scope.emailBody,
                    sms: $scope.sms,
                    status: $scope.statusss

                }
                data.set("details",angular.toJson(details));
                $http.post($scope.hiposServerURL + "/savedocument", data,config).then(function (response) {
                    var data = response.data;
                    $window.location.reload();
                    if (data == "") {
                        Notification.error({message: 'Already Exists', positionX: 'center', delay: 2000});
                    }
                    else {
                       $scope.getDocumentList();
                        $("#add_new_document_modal").modal('hide');
                        if ($scope.operation == 'Edit') {
                            Notification.success({
                                message: 'Document Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        } else {
                            Notification.success({
                                message: 'Document Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.isDisabled = false;

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
        $scope.fileList=[];
        $scope.fileList.push({id:$scope.fileList.length});
        $scope.addNewFile=function () {
            $scope.fileList.push({id:$scope.fileList.length});
        }
        $scope.files=[];
        $scope.docDayDate=[];
        $scope.showFileName=function (event) {
            angular.forEach($scope.fileList,function (val,key) {
                if($scope.fileId==key){
                    val.file=event.target.files[0];
                }
            })
        }
        $scope.setId=function (id) {
            $scope.fileId=id;
        }


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