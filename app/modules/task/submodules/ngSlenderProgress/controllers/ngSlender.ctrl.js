'use strict';

/**
 * @ngdoc function
 * @name SlenderTaskProgressCtrl.controllers:SlenderTaskListCtrl
 * @description
 * # SlenderTaskProgressCtrl
 * Controller of the ngTaskProgress
 */
angular.module('ngSlenderProgress.controllers')

  //TaskList Controller
  .controller('SlenderTaskProgressCtrl', ['$scope', 'ngSlenderProgressService', function ($scope, ngSlenderProgressService) {
                
      $scope.getProgress = function (task) {
          $scope.progress = angular.fromJson(ngSlenderProgressService.GetProgress(task));
          //console.log($scope.progress);
      };

      //$scope.populateSubTasks = func

      $scope.getProgress(2);
  }]);
