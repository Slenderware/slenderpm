'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.resource.controller')
  .controller('ResourcesCtrl', function ($scope, MenuService, ResourceService) {

      MenuService.Toggle('Resources');

      $scope.getUsers = function () {
          ResourceService.GetUsers($scope.currProject.id, $scope.RESTURI).then(function (result) {
              $scope.users = angular.fromJson(result);
          });
      };

      $scope.$on('load-Resources', function (event, args) {
          $scope.getUsers();
      });
  });
