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
      
       var LoginModule = function(username, password){
        this.username = username;
        this.password = password;       
      };

      return LoginModule;
  })

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
      	
  }])
  
//Controller that encapsulates LoginModule
  .controller('LoginCtrl', ['$scope', '$location', 'LoginService', function ($scope, $location, LoginService) {
    
    LoginService.IsAuthenticated();

    $scope.register = function(){
      LoginService.Register();
    };

 		$scope.authenticate = function(){  
      var loginModel = LoginService.InitLoginModule($scope.username, $scope.password);
 			$scope.result = LoginService.Authenticate(loginModel);

      if($scope.result.success){
        $location.path( 'Tasks' );
      }
    };
   			
  }]);
