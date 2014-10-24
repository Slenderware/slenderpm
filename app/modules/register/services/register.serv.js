'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.register.service')

  //Service called RegisterService
  .service('RegisterService', ['$location', '$cookies', 'RegisterModule', 'ResultModule', function ($location, $cookies, RegisterModule, ResultModule) {

      this.InitRegisterModule = function (name, surname, email) {
          return new RegisterModule(name, surname, email);
      };

      this.IsAuthenticated = function () {
          if ($cookies.session !== undefined) {
              $location.path('Tasks');
          }
      };

      this.RegisterUser = function (RegisterModule) {
          console.log(RegisterModule.name);
          return new ResultModule(true, 'Registration was successful, check your inbox for your verifaction email');
      };

      this.Back = function () {
          $location.path('Login');
      };

  }]);
