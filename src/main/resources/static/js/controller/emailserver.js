app.controller('emailserverCtrl',
    function ($scope, $http, $location, $filter, Notification, ngTableParams, $timeout, $window) {
        $scope.hiposServerURL = "/hipos";

        $scope.removeMailDetails = function () {
            $scope.EmailIdText="0";
            $scope.PasswordText="0";
            $scope.SMTPPortText="0";
            $scope.SSMTPServerText="0";
            $scope.ForMailText="0";
            $scope.operation = "";
        };

        $scope.BackServices=function(){
            window.location.href='/anthyesti#!/admin';
        };

        $scope.getMailList = function () {
            $http.post($scope.hiposServerURL  + '/getPaginatedMailList',{
                params: {
                    "firstPage": $scope.firstPage,
                    "lastPage": $scope.lastPage,
                    "pageNo": $scope.pageNo,
                    "prevPage": $scope.prevPage,
                    "prevPage": $scope.isPrev,
                    "nextPage": $scope.isNext
                }
            }).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.mailList = data;
                /**/
                $scope.first = data.first;
                $scope.last = data.last;
                $scope.prev = data.prev;
                $scope.next = data.next;
                $scope.pageNo = data.pageNo;
            },function (error) {
                Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
            })
        };
        $scope.getMailList();
        $scope.addNewEmailServer = function () {
            $(".loader").css("display", "block");
                $scope.id=null;
                $scope.EmailIdText ="";
                $scope.PasswordText="";
                 $scope.SMTPPortText="";
                $scope.SSMTPServerText="";
                  $scope.ForMailText="";
                $('#mail-title').text("Add Mail");
                $("#add_new_addNewEmailServer_modal").modal('show');
            },function (error) {
                Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.editMail = function(data) {
            $http.post($scope.hiposServerURL  + '/editMail?userName=' + data.userName).then(function (response) {
                $scope.projectObj = data;
            $scope.id = data.id;
            $scope.EmailIdText=data.userName;
            $scope.PasswordText=data.password;
            $scope.SSMTPServerText=data.smtpHost;
            $scope.SMTPPortText=data.port;
            $scope.ForMailText=data.forMail;
            $scope.operation='Edit';
            $('#mail-title').text("Edit Mail");
            $scope.getMailList();
            $("#add_new_addNewEmailServer_modal").modal('show');

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };

        $scope.deleteMail = function (data) {
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
                    //  alert("delete");
                    if(result == true){
                        $http.post($scope.hiposServerURL + '/deleteMail?userName=' +data.userName).then(function (response, status, headers, config) {
                            var data = response.data;
                            if(data=="") {
                                $scope.getMailList();
                                Notification.success({message: 'It Is Already In Use Cant be Deleted', positionX: 'center', delay: 2000});
                            }
                            else {
                                $scope.removeMailDetails();
                                $scope.getMailList();
                                $("#add_new_addNewEmailServer_modal").modal('hide');
                                if (!angular.isUndefined(data) && data !== null) {
                                    $scope.mailSearchText = "";
                                }
                                Notification.success({
                                    message: 'Successfully Deleted',
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
                }
            });
        };

        $scope.saveMail = function () {

            if($scope.EmailIdText==null||$scope.EmailIdText==""||angular.isUndefined($scope.EmailIdText)){
                Notification.warning({message:'Please Enter Email',positionX:'center',delay:2000})
            }
            else if($scope.PasswordText==null||$scope.PasswordText==""||angular.isUndefined($scope.PasswordText)){
                Notification.warning({message:'Please Enter Password',positionX:'center',delay:2000})
            }
            else if($scope.SMTPPortText==null||$scope.SMTPPortText==""||angular.isUndefined($scope.SMTPPortText)){
                Notification.warning({message:'Please Enter SMTPPortText',positionX:'center',delay:2000})
            }
            else if($scope.SSMTPServerText==null||$scope.SSMTPServerText==""||angular.isUndefined($scope.SSMTPServerText)){
                Notification.warning({message:'Please Enter SSMTPServerText',positionX:'center',delay:2000})
            }
            // var mailId=true;
            // var mail=$scope.EmailIdText;
            // var mailRegex=/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)\S+/;
            // if ($scope.EmailIdText === "" || angular.isUndefined($scope.EmailIdText)) {
            //     Notification.warning({message: 'Email Server can not be empty', positionX: 'center', delay: 2000});
            //     mailId=false;
            // }
            // if ($scope.EmailIdText!=="") {
            //     if (mail.match(mailRegex)) {
            //         console.log(mail);
            //         mailId=true;
            //     }
            //     else {
            //         Notification.error({message: 'Please Enter Valid Email ID', positionX: 'center', delay: 2000});
            //         mailId=false;
            //     }
            // }
            // if(mailId==true){
            else {
                 var saveMailDetails;
                saveMailDetails = {
                    id:$scope.id,
                    userName: $scope.EmailIdText,
                    password: $scope.PasswordText,
                    port: $scope.SMTPPortText,
                    smtpHost: $scope.SSMTPServerText,
                    forMail: $scope.ForMailText

                };
                $http.post($scope.hiposServerURL  + "/"  + '/saveMail', angular.toJson(saveMailDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeMailDetails();
                        $scope.getMailList();
                        $("#add_new_addNewEmailServer_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.mailSearchText = "";
                        }
                        Notification.success({message: 'Mail Created  successfully', positionX: 'center', delay: 2000});
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
        }
    });
