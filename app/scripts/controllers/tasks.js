'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

 //Factory for LoginModule
  .factory('TaskModule', function () {
      
       var LoginModule = function(username, password){
        this.username = username;
        this.password = password;       
      };

      return LoginModule;
  }) 

  .controller('TasksCtrl', function ($scope, MenuService) {
   
    
   MenuService.Toggle('Tasks');
   $scope.roleList = $scope.roleList1;
  });
