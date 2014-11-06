'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.controllers:SlenderTaskListCtrl
 * @description
 * # SlenderTaskListCtrl
 * Controller of the ngTaskList
 */
angular.module('ngSlenderUserList.controllers')

  //TaskList Controller
  .controller('SlenderUserListCtrl', ['$scope', '$rootScope', 'SlenderUserListService', function ($scope, $rootScope, SlenderUserListService) {
                
      $scope.getUsers = function () {          
          SlenderUserListService.GetUsers($scope.currTask.id, $scope.RESTURI).then(function (result) {
              $scope.users = angular.fromJson(result);
          });
      };

      $scope.$on('current-task-init', function (event, args) {
          $scope.getUsers();
      });
     
  }]);
