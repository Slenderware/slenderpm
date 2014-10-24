'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.register.controller')

  .controller('RegisterCtrl', ['$scope', 'RegisterService', function ($scope, RegisterService) {

      $scope.registerUser = function (name, surname, email) {
          var registerModel = RegisterService.InitRegisterModule(name, surname, email);
          $scope.result = RegisterService.RegisterUser(registerModel);
      };

      $scope.back = function () {
          RegisterService.Back();
      };

  }]);
