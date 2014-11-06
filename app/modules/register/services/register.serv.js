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

      this.InitRegisterModule = function (name, surname, username, email, password) {
          return new RegisterModule(name, surname, username, email, password);
      };

      this.InitRegisterCompanyModule = function (name) {
          return new RegisterCompanyModule(name);
      };

      this.IsAuthenticated = function () {
          if ($cookies.session !== undefined) {
              $location.path('Tasks');
          }
      };

      this.RegisterUser = function (RegisterModule, uri) {          
              var deferred = $q.defer();
              console.log(JSON.stringify(RegisterModule));
              $http({
                  method: 'POST',
                  url: uri.concat('acounts/authentication/addUser'),
                  data: JSON.stringify(RegisterModule),
                  headers: {  'Content-Type': 'application/json' }
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
          console.log(JSON.stringify(RegisterCompanyModule));
          $http({
              method: 'POST',
              url: uri.concat('acounts/authentication/addCompany'),
              data: JSON.stringify(RegisterCompanyModule),
              headers: { 'Content-Type': 'application/json' }
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
