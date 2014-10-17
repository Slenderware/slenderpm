'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

//Service called LoginService
  .service('LoginService', ['$location', '$cookies', 'ResultModule','LoginModule', function($location, $cookies, ResultModule, LoginModule){
	
      this.InitLoginModule = function(username, password){
        return new LoginModule(username, password);
      };

  		//Authenticates user
  		this.Authenticate = function(LoginModule){	
          
          if(LoginModule.username === 'admin' && LoginModule.password === 'admin') {
            $cookies.session = 'tasks';            
            return new ResultModule(true, 'Login was successfull, redirecting...');
          }
          else {
            return new ResultModule(false, 'Username/Password was incorrect!');         
          }  

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
