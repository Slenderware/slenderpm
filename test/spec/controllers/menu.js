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
describe('Controller: MenuCtrl', function () {

  // load the controller's module
    beforeEach(module('slenderpmApp', 'slenderpmApp.menu'));

  var MenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));
  
  it('Project loading should be false', function () {      
      expect(scope.projectsLoading).toBe(false);
  });
  
  it('Date options are incorrect', function () { 
      expect(scope.dateOptions.changeYear).toBe(true);
	  expect(scope.dateOptions.changeMonth).toBe(true);
	  expect(scope.dateOptions.yearRange).toBe('0:+5');
  });
  
  it('Tasks should be undefined', function () {      
      expect(scope.tasks).toBe(undefined);
  });
  
  it('Projects should be undefined', function () {      
      expect(scope.projects).toBe(undefined);
  });
  
  it('currTask should be undefined', function () {      
      expect(scope.currTask).toBe(undefined);
  });
  
  it('currProject should be undefined', function () {      
      expect(scope.currProject).toBe(undefined);
  });
  
  it('user should be undefined', function () {      
      expect(scope.user).toBe(undefined);
  });
});
