'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.controllers:SlenderTaskListCtrl
 * @description
 * # SlenderTaskListCtrl
 * Controller of the ngTaskList
 */
angular.module('ngSlenderList.controllers')

  //TaskList Controller
  .controller('SlenderTaskListCtrl', ['$scope', '$rootScope', 'ngSlenderListService', function ($scope, $rootScope, ngSlenderListService) {
                
      $scope.populateTasks = function () {
          $scope.tasks = angular.fromJson(ngSlenderListService.GetTasks(1));
      };

      $scope.setCurrentTask = function (task) {
          $rootScope.currTask = task;
          console.log($rootScope.currTask.title);
      };

      //$scope.populateSubTasks = func

      $scope.populateTasks();
  }]);
