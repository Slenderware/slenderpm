'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

//Factory for RegisterModule
  .factory('RegisterModule', function () {
  		
  		 var RegisterModule = function(name, surname, email){
  			this.name = name;
  			this.surname = surname;
  			this.email = email;
  		};

  		return RegisterModule;
  })

  //Service called RegisterService
  .service('RegisterService', ['$location', '$cookies', 'RegisterModule', 'ResultModule', function($location, $cookies, RegisterModule, ResultModule){
	
  	  this.InitRegisterModule = function(name, surname, email){
  	  		return new RegisterModule(name, surname, email);
  	  };
     
      this.IsAuthenticated = function(){
          if($cookies.session !== undefined) {      
            $location.path( 'Tasks' );
        }
      };

      this.RegisterUser = function(RegisterModule){
      		console.log(RegisterModule.name);
      		return new ResultModule(true, 'Registration was successful, check your inbox for your verifaction email');
      };

      this.Back = function(){
        $location.path( 'Login' );
      };
      	
  }])

  .controller('RegisterCtrl', ['$scope', 'RegisterService', function ($scope, RegisterService) {

  	$scope.registerUser = function(name, surname, email){
  		var registerModel = RegisterService.InitRegisterModule(name, surname, email);
  		$scope.result = RegisterService.RegisterUser(registerModel);  		
  	};

    $scope.back = function(){ 
    	RegisterService.Back();
	};

  }]);
