'use strict';

/* Directives */

angular.module('Qemy.directives', [])

    .directive('emailFilter', function() {
        return {
            require : 'ngModel',
            link : function(scope, element, attrs, ngModel) {
                var except = attrs.emailFilter,
                    emptyKey = 'empty';
                ngModel.$parsers.push(function(value) {
                    function setValidity(message, bool) {
                        ngModel.$setValidity(message, bool);
                    }
                    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        isValid = emailRegex.test(value.toString());
                    setValidity('email', value.length ? isValid : except == emptyKey);

                    return value;
                })
            }
        }
    })

    .directive('mySubmitOnEnter', function () {
        return {
            link: link
        };
        function link($scope, element, attrs) {
            element.on('keydown', function (event) {
                if (event.keyCode == 13) {
                    element.trigger('submit');
                }
            });
        }
    })
;