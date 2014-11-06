'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.login.service')

//Service called LoginService
  .service('LoginService', ['$http', '$location', '$q', '$cookies', 'ResultModule','LoginModule', function($http, $location, $q, $cookies, ResultModule, LoginModule){
	
      this.InitLoginModule = function(username, password){
        return new LoginModule(username, password);
      };

  		//Authenticates user
  		this.Authenticate = function(username, password, uri){	  		    
  		    var deferred = $q.defer();
  		   
  		    $http({
  		        method: 'POST',
  		        url: uri.concat('accounts/authenticate'),
  		        data: 'username=' + username + '&password=' + password,
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

      this.Register = function(){
        $location.path( 'Register' );
      };

      this.IsAuthenticated = function(){
          if($cookies.session !== undefined) {      
            $location.path( 'Tasks' );
        }
      };
      	
  }]);
