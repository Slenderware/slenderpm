'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.task.controller')

  .controller('TasksCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
      MenuService.Toggle('Tasks');
            
  }]);
