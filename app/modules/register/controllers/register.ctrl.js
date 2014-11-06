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

      $scope.registerUser = function (name, surname, userername, email, password) {
          var registerModel = RegisterService.InitRegisterModule(name, surname, userername, email, password);
          RegisterService.RegisterUser(registerModel, $scope.RESTURI).then(function (result) {
              $scope.result = angular.fromJson(result);
              console.log($scope.result);
          });
      };

      $scope.registerCompany = function (name) {
          var registerCompanyModel = RegisterService.InitRegisterCompanyModule(name);
          RegisterService.RegisterCompany(registerCompanyModel, $scope.RESTURI).then(function (result) {
              $scope.result = angular.fromJson(result);
              console.log($scope.result);
              $scope.stage = $scope.stage + 1;
          });
      };

      $scope.back = function () {
          RegisterService.Back();
      };

      $scope.stage = 0;

      $scope.validate = function (_var) {

          if (_var === undefined) {
              return true;
          } else {

              if (_var.length === 0) {
                  return false;
              } else {
                  return true;
              }
          }
      };

  }]);
