'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.controllers:SlenderTaskListCtrl
 * @description
 * # SlenderTaskListCtrl
 * Controller of the ngTaskList
 */
angular.module('ngSlenderComments.controllers')

  //TaskList Controller
  .controller('SlenderCommentCtrl', ['$scope', '$rootScope', 'SlenderCommentService', function ($scope, $rootScope, SlenderCommentService) {
                
      $scope.getComments = function () {          
          SlenderCommentService.GetComments($scope.currTask.id, $scope.RESTURI).then(function (result) {
              $scope.comments = angular.fromJson(result);
          });
      };

      $scope.$on('current-task-init', function (event, args) {
          $scope.getComments();            
      });

      $scope.setCurrentTask = function (task) {
          $rootScope.currTask = task;
          console.log($scope.currTask);
      };

      //$scope.populateSubTasks = func

      //$scope.populateTasks();
  }]);
