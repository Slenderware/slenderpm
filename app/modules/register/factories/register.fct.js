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

      var RegisterModule = function (name, surname, userername, email, password, companyid) {          
          this.firstName = name;
          this.lastName = surname;
          this.username = userername;
          this.password = password;
          this.email = email;          
          this.roleId = 1;
          this.companyId = companyid;

      };     
      return RegisterModule;
  })

//Factory for RegisterCompanyModule
  .factory('RegisterCompanyModule', function () {

      var RegisterCompanyModule = function (name) {
          this.name = name;
      };

      return RegisterCompanyModule;
  });
