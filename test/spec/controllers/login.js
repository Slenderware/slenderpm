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
describe('Controller: LoginCtrl', function () {

  // load the controller's module
    beforeEach(module('slenderpmApp', 'slenderpmApp.login'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  })); 

  //UI Tests
  it('loginModule username is initialiazed before start', function () {
      expect(scope.username).toBe(undefined);
  });

  it('loginModule password is initialiazed before start', function () {
      expect(scope.password).toBe(undefined);
  });

  it('loginModule username failed to initialize', function () {
      scope.username = 'dummy';
      expect(scope.username).toBe('dummy');
  });

  it('loginModule password failed to initialize', function () {
      scope.password = 'dummy';
      expect(scope.password).toBe('dummy');
  });

  it('Login loading should be false', function () {     
      expect(scope.loginLoading).toBe(false);
  }); 

  it('Form validation does not work', function () {     
      expect(scope.validate('')).toBe(false);
	  expect(scope.validate('sdf')).toBe(true);
  });  
  
  it('Error message should not display', function () {  
	  expect(scope.result).toBe(undefined);
  });
});
