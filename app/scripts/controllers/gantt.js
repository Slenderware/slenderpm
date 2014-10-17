'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:GanttCtrl
 * @description
 * # GanttCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

.directive('dhxGantt', function() {
  return {
    restrict: 'A',
    scope: false,
    transclude: true,
    template: '<div ng-transclude></div>',

    link:function ($scope, $element, $attrs){
      //watch data collection, reload on changes
      $scope.$watch($attrs.data, function(collection){
        gantt.clearAll();
        gantt.parse(collection, 'json');
      }, true);

      //size of gantt
      $scope.$watch(function() {
        return $element[0].offsetWidth + '.' + $element[0].offsetHeight;
      }, function() {
        gantt.setSizes();
      });

      //init gantt
      gantt.init($element[0]);
    }
  };
})

  .controller('GanttCtrl', [ '$scope', 'MenuService', 'GanttService', function ($scope, MenuService, GanttService) {

   	MenuService.Toggle('Gantt');

	  $scope.tasks = GanttService.FetchData(1);

  }]);
