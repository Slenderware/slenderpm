'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:GanttCtrl
 * @description
 * # GanttCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('GanttCtrl', function ($scope, MenuService) {

   	MenuService.Toggle('Gantt');
   	
  });
