
var app = angular.module('myApp',['ngRoute', 'ngAnimate',
    'ngSanitize','ui-notification','ngTable','chart.js',
    'ngCookies', 'angular.filter','ui.bootstrap']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/masters", {
            templateUrl: "partials/masters.html",
            controller: "masterController"
        })
        .when("/creator", {
            templateUrl: "partials/creator.html",
            controller: "creatorController"
        })
        .when("/configuration", {
            templateUrl: "partials/configuration.html"
        })
        .when("/paymentMode", {
            templateUrl: "partials/paymentmode.html",
            controller: "paymentModeCtrl"
        })
        .when("/client", {
            templateUrl: "partials/client.html",
            controller: "clientsCtrl"
        })
        .when("/state", {
            templateUrl: "partials/state.html",
            controller: "stateController"
        })
        .when("/module", {
            templateUrl: "partials/module.html",
            controller: "moduleController"
        })
        .when("/submodule", {
            templateUrl: "partials/subModule.html",
            controller: "submoduleController"
        })
        .when("/callStatus", {
            templateUrl: "partials/callStatus.html",
            controller: "callStatusController"
        })
        .when("/currency", {
            templateUrl: "partials/Currency.html",
            controller: "currencyCtrl"
        })
        .when("/supplier", {
            templateUrl: "partials/supplier.html",
            controller: "supplierController"
        })
        .when("/createpage", {
            templateUrl: "partials/createpage.html",
            controller: "createPageController"
        })
        .when("/createFormPage", {
            templateUrl: "partials/createFormPage.html",
            controller: "createFormPageController"
        })
        .when("/test", {
            templateUrl: "partials/test.html",
            controller: "testController"
        })
        .when("/page", {
            templateUrl: "partials/page.html",
            controller: "pageController"
        })
        .when("/form", {
            templateUrl: "partials/form.html",
            controller: "formController"
        })

        .when("/userrole", {
            templateUrl: "partials/userRole.html",
            controller: "userRoleCtrl"
        })

        .when("/users", {
            templateUrl: "partials/user.html",
            controller: "userCtrl"
        })

        .when("/settings", {
            templateUrl: "partials/Settings.html",
            controller: "settingsController"
        })
        .when("/pagePreview", {
            templateUrl: "partials/pagePreview.html",
            controller: "createFormPageController"
        })
        .when("/popup", {
            templateUrl: "partials/popup.html",
            controller: "popupController"
        })

        .when("/country", {
            templateUrl: "partials/country.html",
            controller: "countryCtrl"
        })



        .when("/enquiryForm", {
            templateUrl: "partials/enquiryForm.html",
            controller: "enquiryFormCtrl"
        })

        .when("/city", {
            templateUrl: "partials/city.html",
            controller: "cityController"
        })
        .when("/admin", {
            templateUrl: "partials/admin.html"
        })
        .when("/serviceType", {
            templateUrl: "partials/serviceType.html",
            controller: "serviceTypeController"
        })
  .when("/enqsource", {
            templateUrl: "partials/enquirySource.html",
            controller: "enqsourceController"
        })
  .when("/serviceLocation", {
            templateUrl: "partials/serviceLocation.html",
            controller: "ServiceLocationCtrl"
        })

        .when("/smsServer", {
            templateUrl: "partials/smsServer.html",
            controller: "messageServerCtrl"
        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "loginController as rest"
        })
        .when("/agency", {
            templateUrl: "partials/agency.html",
            controller: "agencyController as rest"
        })
        .when("/payment", {
        templateUrl: "partials/payment.html",
        controller: "paymentController as rest"
    })
        .when("/reports", {
            templateUrl: "partials/reports.html",
            controller: "reportsController as rest"
        })
        .when("/emailserver", {
            templateUrl: "partials/emailserver.html",
            controller: "emailserverCtrl as rest"
        })
        .when("/typeOfEnquiry", {
            templateUrl: "partials/typeOfEnquiry.html",
            controller: "typeOfEnquiryCtrl as rest"
        })
        .when("/listing", {
            templateUrl: "partials/listing.html",
            controller: "listingCtrl as rest"
        })
        .when("/addenquiryForm", {
            templateUrl: "partials/addenquiryForm.html",
            controller: "enquiryFormCtrl as rest"
        })
        .otherwise({redirectTo:'/login'});
}]);

app.directive("limitTo", [function (){
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function (e){
                if (this.value.length === limit)
                    e.preventDefault();
            });
        }
    };
}]);

app.directive('numWithOutSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^0-9:]/g,'');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});
/* for only  Alpha without space function
 */
app.directive('alphaWithoutSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^a-zA-Z]/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});
/* validation
 * for only number with space function
 */
app.directive('numWithSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^\s^0-9]+/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});

/* validation
 * It allows number,plus,hypen with space function
 */
app.directive('mobileNumWithSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^- ^+^0-9]+/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});
// app.directive('numWithOutSpace', function() {
//     return {
//         require: '?ngModel',
//         link: function(scope, element, attrs, ngModelCtrl) {
//             if(!ngModelCtrl) {
//                 return;
//             }
//
//             ngModelCtrl.$parsers.push(function(val) {
//                 var clean = val.replace( /[^0-9]+/g, '');
//                 if (val !== clean) {
//                     ngModelCtrl.$setViewValue(clean);
//                     ngModelCtrl.$render();
//                 }
//                 return clean;
//             });
//         }
//     };
// });
/* validation
 * It allows number,plus,hypen with space function
 */
app.directive('number', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^0-9]+/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});



/* for only Alpha with space function
 */
app.directive('alphaWithSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^\s^a-zA-Z]/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});


/* for only Alpha and number with space function
 */
app.directive('alphanumWithSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^\s^a-zA-Z^0-9]/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });
        }
    };
});


/* for only Alpha and number without space function
 */
app.directive('alphanumWithoutSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                var clean = val.replace( /[^a-zA-Z^0-9]/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});

/* for only two digit decimal Function
 */

app.directive('twoDigitsDec', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }

                var clean = val.replace(/[^-0-9\.]/g, '');
                var negativeCheck = clean.split('-');
                var decimalCheck = clean.split('.');
                if(!angular.isUndefined(negativeCheck[1])) {
                    negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                    clean =negativeCheck[0] + '-' + negativeCheck[1];
                    if(negativeCheck[0].length > 0) {
                        clean =negativeCheck[0];
                    }

                }

                if(!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0,2);
                    clean =decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});

app.directive('noSpace', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});

// Change text to uppercase and add dash every 5 char
app.directive('capitalizeWithDash', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            var capitalize = function(inputValue) {
                var number = 5;
                if (inputValue == undefined) inputValue = '';
                var inputUpper = inputValue.toUpperCase();
                var capitalizedArray = [];
                for(var i=0; i<inputUpper.length; i+= number){
                    if(inputUpper[i] == "-"){
                        capitalizedArray.push(inputUpper.substr(i+1,number))
                        i += 1;
                    }else {
                        capitalizedArray.push(inputUpper.substr(i, number))
                    }
                }
                var capitalized = capitalizedArray.join("-");
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]);
        }
    };
});

// $('.main_container').bind('keypress', function(e) {
//     var code = e.keyCode || e.which;
//     if(code == 13) { //Enter keycode
//         //Do something
//     }
// });




// angular.module("core").directive('hnEnterKey', function() {
//     return function(scope, element, attrs) {
//        ("keydown keypress", function(event) {
//
//             var code = e.keyCode || e.which;
//             if(code == 13) { //Enter keycode
//                 //Do something
//             }
//
//
//             var keyCode = event.which || event.keyCode;
//             if (keyCode === 13) {
//                 scope.$apply(function() {
//                     scope.$eval(attrs.hnEnterKey);
//                 });
//
//                 event.preventDefault();
//             }
//         });
//     };
// });


// app.config(['$httpProvider', function ($httpProvider) {
//     var $cookies;
//     angular.injector(['ngCookies']).invoke(['$cookies', function (_$cookies_) {
//         $cookies = _$cookies_;
//     }]);
//     $httpProvider.defaults.headers.common['Authorization'] = $cookies.get('accessToken');
// }]);


app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input))
            return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});

app.filter('firstLetter', function () {
    return function (input, key, letter) {
        input = input || [];
        var out = [];
        input.forEach(function (item) {
            console.log('item: ', item[key][0].toLowerCase());
            console.log('letter: ', letter);
            if (item[key][0].toLowerCase() == letter.toLowerCase()) {
                out.push(item);
            }
        });
        return out;
    }
});

