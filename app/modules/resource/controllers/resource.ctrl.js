'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.resource.controller')
  .controller('ResourcesCtrl', function ($scope, MenuService, ResourceService, TasksService) {

      MenuService.Toggle('Project Resources');

      $scope.getUsers = function () {
          ResourceService.GetUsers($scope.currProject.id, $scope.RESTURI).then(function (result) {
              console.log(result);
              $scope.users = angular.fromJson(result);
          });
      };

      $scope.getProjectUsers = function () {
          if ($scope.currProject != undefined) {
              ResourceService.GetCompanyUsers($scope.user.companyId, $scope.RESTURI).then(function (result) {               
                  $scope.projectusers = angular.fromJson(result);
              });
          }
      };

      $scope.addUser = function () {
          if ($scope.currTask != undefined && $scope.selectedProjectUser != undefined) {
              ResourceService.AddUser($scope.selectedProjectUser.id, $scope.currProject.id, $scope.RESTURI).then(function (result) {
                  $scope.projectusers = undefined;
                  $scope.selectedProjectUser = undefined;
                  $('#AddUserToProjectModal').modal('hide');
                  $scope.getUsers();
              });
          }
      };

      $scope.userNotAdded = function (user) {
          if (user != undefined && $scope.users != undefined) {
              for (var i = 0; i < $scope.users.length; i++) {
                  if ($scope.users[i].id === user.id) {
                      return false;
                  }
                  return true;
              }
          }
          else {
              return true;
          }
      };

      $scope.$on('current-project-init', function (event, args) {
          $scope.getUsers();
      });

      $scope.setSelectedProjUser = function (user) {
          $scope.selectedProjectUser = user;
      };
  });
