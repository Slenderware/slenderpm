'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

//Factory for LoginModule
  .factory('LoginModule', function () {
  		
  		 var LoginModule = function(){
  			this.username = '';
  			this.password = '';
  			this.error = '';
  			this.result = true;
  		};

  		return LoginModule;
  })

  .factory('SessionModule', function () {
      
       var SessionModule = function(username, page, token){
        this.username = username;
        this.page = page;
        this.token = token;       
      };

      this.toString = function(){
        console.log(this.username + ', ' + this.page + ', ' + this.token);
        return this.username + ', ' + this.page + ', ' + this.token;
      };

      return SessionModule;
  })

//Service called LoginService
  .service('LoginService', function($cookies, LoginModule){

  		//Initialize Login Module using a factory
  		this.InitLoginModule = function(){
  			var login = new LoginModule();
  			console.log('sadf');
  			return login; 
  		};

  		//Authenticates user
  		this.authenticate = function(username, password){	
       
          if(true) {    
            console.log(username + password);
            $cookies.session = 'tasks';

            return true;
          }
          else {
            return false;
          }  

      };  
      	
  })
//Controller that encapsulates LoginModule
  .controller('LoginCtrl', function ($cookies, $scope, $location, LoginService) {

		$scope.loginModule = LoginService.InitLoginModule();

     if($cookies.session !== undefined) {      
          $location.path( 'Tasks' );
      }

   		$scope.authenticate = function(){   			
   			$scope.loginModule.result = LoginService.authenticate($scope.loginModule.username, $scope.loginModule.password);
   			
   			if($scope.loginModule.result === true){   				
   				$location.path( 'Tasks' );
   			}
   			else{
   				$scope.loginModule.error = 'Username/Password was incorrect!';
   			}
   		};
  });
