'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.login.controller')

//Controller that encapsulates LoginModule
  .controller('LoginCtrl', ['$scope', '$cookies', '$location', 'LoginService', function ($scope, $cookies, $location, LoginService) {
    
    LoginService.IsAuthenticated();

    $scope.register = function(){
      LoginService.Register();
    };

    $scope.authenticate = function(){ 
        LoginService.Authenticate($scope.username, $scope.password, $scope.RESTURI).then(function (result) {
            $scope.result = angular.fromJson(result);
            console.log($scope.result);
            if ($scope.result.success) {
                $location.path('Tasks');
                $cookies.session = $scope.result.sessionId;
            }
        });
    }; 	

 	$scope.validate = function (_var) {
 	    
 	    if (_var === undefined) {
 	        return true;
 	    } else {

 	        if (_var.length === 0) {
 	            return false;
 	        } else {
 	            return true;
 	        }
 	    }
 	};
   			
  }]);
