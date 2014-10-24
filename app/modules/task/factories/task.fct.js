'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.task.factory')
 //Factory for LoginModule
  .factory('TaskModule', function () {

      var LoginModule = function (username, password) {
          this.username = username;
          this.password = password;
      };

      return LoginModule;
  });