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

//Service called LoginService
  .service('LoginService', function(LoginModule){

  		//Initialize Login Module using a factory
  		this.InitLoginModule = function(){
  			var login = new LoginModule();
  			console.log('sadf');
  			return login; 
  		};

  		//Authenticates user
  		this.authenticate = function(username, password){	

  			//Do Rest request		
  			console.log(username + ' ' + password);
  			return false;
  		};  		
  })
//Controller that encapsulates LoginModule
  .controller('LoginCtrl', function ($scope, $location, LoginService) {

		$scope.loginModule = LoginService.InitLoginModule();

   		$scope.authenticate = function(){   			
   			$scope.loginModule.result = LoginService.authenticate($scope.loginModule.username, $scope.loginModule.password);
   			
   			if($scope.loginModule.result === true){   				
   				$location.path( 'Projects' );
   			}
   			else{
   				$scope.loginModule.error = 'Username/Password was incorrect!';
   			}
   		};
  });
