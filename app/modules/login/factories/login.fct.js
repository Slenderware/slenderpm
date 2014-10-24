'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.login.factory')

//Factory for LoginModule
  .factory('LoginModule', function () {
      
       var LoginModule = function(username, password){
        this.username = username;
        this.password = password;       
      };

      return LoginModule;
  });
