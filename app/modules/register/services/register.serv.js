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
  .service('RegisterService', ['$http', '$location', '$q', '$cookies', 'RegisterModule', 'RegisterCompanyModule', 'ResultModule',
      function ($http, $location, $q, $cookies, RegisterModule, RegisterCompanyModule, ResultModule) {

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
          .success(function (data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available                
              deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
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
              .success(function (data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available                
                  deferred.resolve(data);
              }).
              error(function (data, status, headers, config) {
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
          .success(function (data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available                
              deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
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
