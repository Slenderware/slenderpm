'use strict';

/**
 * author Jannik Richter
 * 
 *  The MIT License (MIT)

    Copyright © 2014 Slenderware

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
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

          if (password !== confirmpass) {
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

          if (password !== confirmpass) {
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
