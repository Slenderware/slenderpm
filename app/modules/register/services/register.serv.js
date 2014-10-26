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
  .service('RegisterService', ['$http', '$location', '$q', '$cookies', 'RegisterModule', 'ResultModule', function ($http, $location, $q, $cookies, RegisterModule, ResultModule) {

      this.InitRegisterModule = function (name, surname, username, email, password) {
          return new RegisterModule(name, surname, username, email, password);
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

              //$http.post(uri.concat('addUser'), JSON.stringify({ id: 0 }))

              return deferred.promise;         
      };

      this.Back = function () {
          $location.path('Login');
      };

  }]);
