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

      //Get Current user
  		this.GetUser = function (uri) {
  		    var deferred = $q.defer();

  		    $http({
  		        method: 'POST',
  		        url: uri.concat('users/getUserBySession'),
  		        data: 'sessionId=' + $cookies.session,
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

      this.Register = function(){
        $location.path( 'Register' );
      };

      this.IsAuthenticated = function(){
          if($cookies.session !== undefined) {      
            $location.path( 'Tasks' );
        }
      };
      	
  }]);
