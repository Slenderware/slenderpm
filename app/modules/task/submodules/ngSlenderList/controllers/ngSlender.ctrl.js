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
  .controller('SlenderTaskListCtrl', ['$scope', '$rootScope', 'ngSlenderListService', 'SlenderCommentService' , function ($scope, $rootScope, ngSlenderListService, SlenderCommentService) {
      
      $scope.getTasks = function () {
          ngSlenderListService.GetTasks($scope.currProject.id, $scope.RESTURI).then(function (result) {
              //Populates tasks
              $scope.tasks = angular.fromJson(result);
              $rootScope.currTask = $scope.tasks[0];

              //Broadcast that default task is initialized
              $rootScope.$broadcast('current-task-init');
          });
      };
      
      $scope.$on('current-project-init', function (event, args) {
          $scope.getTasks();
      });

      //$scope.populateSubTasks = func

      //$scope.populateTasks();
  }]);
