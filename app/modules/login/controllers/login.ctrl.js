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

                if ($scope.result !== undefined) {
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
