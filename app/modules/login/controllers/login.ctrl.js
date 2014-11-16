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
  .controller('LoginCtrl', ['$rootScope', '$scope', '$cookies', '$location', 'LoginService', function ($rootScope, $scope, $cookies, $location, LoginService) {
    
    LoginService.IsAuthenticated();

    $scope.register = function(){
      LoginService.Register();
    };
    
    $scope.loginLoading = false;
    $scope.authenticate = function () {
        $scope.loginLoading = true;
        LoginService.Authenticate($scope.username, $scope.password, $scope.RESTURI).then(function (result) {
            $scope.loginLoading = false;

            try {
                $scope.result = angular.fromJson(result);

                if ($scope.result != undefined) {
                    $scope.message = $scope.result.message;
                    if ($scope.result.success) {
                        $location.path('Tasks');                       
                        $cookies.session = $scope.result.sessionId;
                        setTimeout(function () { $rootScope.$broadcast('load-Tasks'); }, 100);
                        $scope.result = undefined;
                    }
                }
            }
            catch (err) {
                $scope.message = 'Whoops, look\'s like the server didn\'t like the request. Please try again later';
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
