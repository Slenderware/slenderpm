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

  .controller('GanttCtrl', function ($scope, MenuService) {

   	MenuService.Toggle('Gantt');

	$scope.tasks = {
	    data:[
	      {id:1, text:'Project #2', start_date:'01-04-2013', duration:18,order:10,
	          progress:0.4, open: true},
	      {id:2, text:'Task #1',    start_date:'02-04-2013', duration:8, order:10,
	          progress:0.6, parent:1},
	      {id:3, text:'Task #2',    start_date:'11-04-2013', duration:8, order:20,
	          progress:0.6, parent:1}
	    ],
	    links:[
	      { id:1, source:1, target:2, type:'1'},
	      { id:2, source:2, target:3, type:'0'},
	      { id:3, source:3, target:4, type:'0'},
	      { id:4, source:2, target:5, type:'2'},
	    ]};
  });
