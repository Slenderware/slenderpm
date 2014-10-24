'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular
  .module('slenderpmApp.task.directive', [])

  .directive('taskList', function () {
      return {
          templateUrl: '../src/ngSlenderList/template/ngSlenderList.html'
      };
  });