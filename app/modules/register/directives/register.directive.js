'use strict';

angular
.module('slenderpmApp.register.directive', [])
.directive("passwordStrength", function () {
return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        scope.$watch(attrs.passwordStrength, function (value) {
            console.log(value);
            if (angular.isDefined(value)) {
                if (value.length > 8) {
                    scope.strength = 'strong';
                } else if (value.length > 3) {
                    scope.strength = 'medium';
                } else {
                    scope.strength = 'weak';
                }
            }
        });
    }
};
});