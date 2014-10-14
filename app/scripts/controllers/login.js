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
  .service('LoginService', function($location, $cookies){
	
  		//Authenticates user
  		this.Authenticate = function(username, password){	
       
          if(username === 'admin' && password === 'admin') {
            $cookies.session = 'tasks';            
            return true;
          }
          else {
            return false;            
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
      	
  })
//Controller that encapsulates LoginModule
  .controller('LoginCtrl', function ($scope, $location, LoginService) {
    
		$scope.username = '';
    $scope.password = '';
    $scope.result = true;
    $scope.error = '';

    LoginService.IsAuthenticated();

    $scope.register = function(){
      LoginService.Register();
    };

 		$scope.authenticate = function(){   			
 			$scope.result = LoginService.Authenticate($scope.username, $scope.password);

      if($scope.result){
        $location.path( 'Tasks' );
      }else{
        $scope.error = 'Username/Password was incorrect!';
      }
    };
   			
  });
