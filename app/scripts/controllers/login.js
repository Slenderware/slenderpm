'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

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
