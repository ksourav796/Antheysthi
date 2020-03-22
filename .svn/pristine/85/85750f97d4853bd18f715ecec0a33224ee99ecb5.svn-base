app.controller('headerCtrl',
    function($rootScope, $scope, $http,$window,$location) {
        $scope.hiposServerURL = "/hipos";
        $scope.getUserObject = function () {
            $http.post("/hipos/getUserObject").then(function (response) {
                var data = response.data;
                $rootScope.userName = data.userName;
                $rootScope.permissions = angular.fromJson(data.permissions);
                $rootScope.userAccessRights = data.userAccessRights;
            })
        };
        $scope.getUserObject();
        $('li').click(function(){

            $(this).addClass('active')
                .siblings()
                .removeClass('active');
        });
        $scope.getCompanyName = function () {
            $http.post($scope.hiposServerURL  + '/getGeneralSettingsDetailsList').then(function (response) {
                var data = response.data;
                $scope.companyList= data.object;
                $rootScope.CompanyName =data.companyName;
                $rootScope.logo =data.attachFile;
                $rootScope.Address =data.address;
                $rootScope.gst =data.gst;
                $rootScope.organizationEmail =data.companyEmail;
            })

        };
        $scope.getCompanyName();

        $scope.getModule = function () {
            $http.post($scope.hiposServerURL  + '/getModule').then(function (response) {
                var data = response.data;
                $scope.createPageList = data;
            })
        }
        $scope.getModule();

        $scope.getSubModuleBasedOnModule = function (module,type) {
            $http.post($scope.hiposServerURL  + '/getSubModuleBasedOnModule?module='+module +"&type="+type).then(function (response) {
                var data = response.data;
                if(data.page=='page'){
                    $window.location.href = "/anthyesti#!/masters";
                    $rootScope.submoduleList = data.data;
                }else if(data.page=='module'){
                    $window.location.href = "/anthyesti#!/page";
                    localStorage.setItem("pageName",data.tableName);
                }else {
                    $scope.submenuList = data.data;
                }
            })
        }

    });