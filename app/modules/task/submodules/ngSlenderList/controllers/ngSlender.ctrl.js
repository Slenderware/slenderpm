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
          $scope.tasks = angular.fromJson(ngSlenderListService.GetTasks($scope.currentProject.id, $scope.RESTURI));
          console.log($scope.tasks);
      };

      $scope.setCurrentTask = function (task) {
          $rootScope.currentTask = task;
          console.log($rootScope.currTask.name);
      };

      //$scope.populateSubTasks = func

      //$scope.populateTasks();
  }]);
