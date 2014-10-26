'use strict';

angular
.module('slenderpmApp.menu.directive', [])

.directive('slenderTopMenu', function() {
    return {    
        templateUrl: 'modules/menu/views/ngSlenderFixedMenu.html',
        restrict: 'E',
        link: function (scope, element, attrs) {
            $("#selector").slenselect();
        }
};
  })

.directive('slenderBreadCrumb', function () {
    return {
        templateUrl: 'modules/menu/views/ngSlenderBreadCrumb.html',
        restrict: 'E'
    };
})

.directive('slenderMenu', function () {
    return {
        templateUrl: 'modules/menu/views/ngSlenderMenu.html',
        restrict: 'E'
    };
});