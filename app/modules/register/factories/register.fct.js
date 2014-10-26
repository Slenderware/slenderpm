'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.register.factory')

//Factory for RegisterModule
  .factory('RegisterModule', function () {

      var RegisterModule = function (name, surname, userername, email, password) {
          this.id = null;
          this.firstName = name;
          this.lastName = surname;
          this.username = userername;
          this.email = email;
          this.password = password;
          this.roleId = null;
          this.companyId = null;
          this.lastSeen = null;
      };

      return RegisterModule;
  })

//Factory for RegisterModule
  .factory('RegisterCompanyModule', function () {

      var RegisterModule = function (name, surname, userername, email, password) {
          this.id = 0;
          this.firstName = name;
          this.lastName = surname;
          this.username = userername;
          this.email = email;
          this.password = password;
          this.roleId = 0;
          this.companyId = 0;
          this.lastSeen = 0;
      };

      return RegisterModule;
  });
