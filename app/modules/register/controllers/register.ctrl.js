'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.register.controller')

  .controller('RegisterCtrl', ['$cookies', '$location', '$rootScope', '$scope', 'RegisterService', function ($cookies, $location, $rootScope, $scope, RegisterService) {

      //Register User with Role ID 2
      $scope.registerUser = function (name, surname, userername, email, password, confirmpass) {
          
          var correctEmail = $scope.validateEmail(email);

          if (!correctEmail) {
              $scope.message = 'The email address that you\'ve supplied is incorrect. Please correct this to continue';
              return;
          }

          if (password != confirmpass) {
              $scope.message = 'The passwords that you have supplied does not match';
              return;
          }
          $scope.registerLoading = true;
          var registerModel = RegisterService.InitRegisterModule(name, surname, userername, email, password, $scope.user.companyId);         
          RegisterService.RegisterUser(registerModel, $scope.RESTURI).then(function (result) {
              $scope.registerLoading = false;
              try {
                  console.log(result);
                  $scope.result = angular.fromJson(result);
                  $('#AddUserModal').modal('hide');
                  $scope.result = undefined;
              } 
              catch (err) {
                  $scope.message = 'Whoops, look\'s like the server didn\'t like the request. Please try again later';
              }
          });
      };

      //Validate Email address Function
      $scope.validateEmail = function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      };

      //Register User with Role ID 1 (ADMIN)
      $scope.registerLoading = false;
      $scope.registerAdminUser = function (name, surname, userername, email, password, confirmpass) {

          var correctEmail = $scope.validateEmail(email);

          if (!correctEmail) {
              $scope.message = 'The email address that you\'ve supplied is incorrect. Please correct this to continue';
              return;
          }

          if (password != confirmpass) {
              $scope.message = 'The passwords that you have supplied does not match';
              return;
          }

          $scope.registerLoading = true;
          var registerModel = RegisterService.InitRegisterModule(name, surname, userername, email, password, $scope.company.id);         
          RegisterService.RegisterAdminUser(registerModel, $scope.RESTURI).then(function (result) {
              $scope.registerLoading = false;
              try {                 
                  $scope.result = angular.fromJson(result);
                  $location.path('Login');
              }
              catch (err) {
                  $scope.message = 'Whoops, look\'s like the server didn\'t like the request. Please try again later';
              }    
          });
      };

      
      $scope.registerCompany = function (name) {
          $scope.registerLoading = true;
          var registerCompanyModel = RegisterService.InitRegisterCompanyModule(name);
          RegisterService.RegisterCompany(registerCompanyModel, $scope.RESTURI).then(function (result) {
              $scope.registerLoading = false;
              try {
                  $rootScope.company = angular.fromJson(result);             
                  $scope.stage = $scope.stage + 1;
              }
              catch (err) {
                  $scope.message = 'Whoops, look\'s like the server didn\'t like the request. Please try again later';
              }             
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
