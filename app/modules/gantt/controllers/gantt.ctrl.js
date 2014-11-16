'use strict';

/**
 * author Jannik Richter
 * 
 *  The MIT License (MIT)

    Copyright © 2014 Slenderware

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */
angular.module('slenderpmApp.gantt.controller')

.directive('dhxGantt', function () {
    return {
        restrict: 'A',
        scope: false,
        transclude: true,
        template: '<div ng-transclude></div>',

        link: function ($scope, $element, $attrs) {
            //watch data collection, reload on changes
            $scope.$watch($attrs.data, function (collection) {
                gantt.clearAll();
                gantt.parse(collection, 'json');
            }, true);

            //size of gantt
            $scope.$watch(function () {
                return $element[0].offsetWidth + '.' + $element[0].offsetHeight;
            }, function () {
                gantt.setSizes();
            });

            //init gantt
            gantt.init($element[0]);
        }
    };
})

  .controller('GanttCtrl', ['$scope', 'MenuService', 'GanttService', function ($scope, MenuService, GanttService) {

      MenuService.Toggle('Gantt');

      $scope.tasks = GanttService.FetchData(1);

  }]);
