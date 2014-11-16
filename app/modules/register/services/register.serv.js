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
angular.module('slenderpmApp.register.service')

  //Service called RegisterService
  .service('RegisterService', ['$http', '$location', '$q', '$cookies', 'RegisterModule', 'RegisterCompanyModule',
      function ($http, $location, $q, $cookies, RegisterModule, RegisterCompanyModule) {

          this.InitRegisterModule = function (name, surname, username, email, password, companyid) {
          return new RegisterModule(name, surname, username, email, password, companyid);
      };

      this.InitRegisterCompanyModule = function (name) {
          return new RegisterCompanyModule(name);
      };

      this.IsAuthenticated = function () {
          if ($cookies.session !== undefined) {
              $location.path('Tasks');
          }
      };

      this.RegisterAdminUser = function (RegisterModule, uri) {
          var deferred = $q.defer();        
          $http({
              method: 'POST',
              url: uri.concat('users/addAdminUser'),
              data: 'firstName=' + RegisterModule.firstName + '&lastName=' + RegisterModule.lastName + '&username=' + RegisterModule.username + '&password=' + RegisterModule.password + '&email=' + RegisterModule.email + '&companyId=' + RegisterModule.companyId + '&roleId=' + RegisterModule.roleId,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available                
              deferred.resolve(data);
          }).
          error(function (data) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.               
              deferred.resolve(data);
          });

          return deferred.promise;
      };

      this.RegisterUser = function (RegisterModule, uri) {          
              var deferred = $q.defer();             
              $http({
                  method: 'POST',
                  url: uri.concat('users/addUser'),
                  data: 'firstName=' + RegisterModule.firstName + '&lastName=' + RegisterModule.lastName + '&username=' + RegisterModule.username + '&password=' + RegisterModule.password + '&email=' + RegisterModule.email + '&companyId=' + RegisterModule.companyId + '&roleId=' + 2,
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
              })
              .success(function (data) {
                  // this callback will be called asynchronously
                  // when the response is available                
                  deferred.resolve(data);
              }).
              error(function (data) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.               
                  deferred.resolve(data);
              });
                      
              return deferred.promise;         
      };

      this.RegisterCompany = function (RegisterCompanyModule, uri) {
          var deferred = $q.defer();       
          $http({
              method: 'POST',
              url: uri.concat('company/addCompany'),
              data: 'name=' + RegisterCompanyModule.name,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available                
              deferred.resolve(data);
          }).
          error(function (data) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.               
              deferred.resolve(data);
          });

          return deferred.promise;
      };

      this.Back = function () {
          $location.path('Login');
      };

  }]);
