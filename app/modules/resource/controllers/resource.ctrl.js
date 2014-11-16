'use strict';

/**
 * author Jannik Richter
 * 
 *  The MIT License (MIT)

    Copyright © 2014 Slenderware

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
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
              }
			  return true;
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
