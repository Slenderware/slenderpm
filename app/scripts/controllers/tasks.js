'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

  

  .controller('TasksCtrl', function ($scope, MenuService) {
    
   MenuService.Toggle('Tasks');

    $scope.roleList1 = [
        { 'roleName' : 'User', 'roleId' : 'role1', 'children' : [
          { 'roleName' : 'subUser1', 'roleId' : 'role11', 'children' : [] },
          { 'roleName' : 'subUser2', 'roleId' : 'role12', 'children' : [
            { 'roleName' : 'subUser2-1', 'roleId' : 'role121', 'children' : [
              { 'roleName' : 'subUser2-1-1', 'roleId' : 'role1211', 'children' : [] },
              { 'roleName' : 'subUser2-1-2', 'roleId' : 'role1212', 'children' : [] }
            ]}
          ]}
        ]},

        { 'roleName' : 'Admin', 'roleId' : 'role2', 'children' : [] },

        { 'roleName' : 'Guest', 'roleId' : 'role3', 'children' : [] }
      ];

      $scope.roleList = $scope.roleList1;
  });
