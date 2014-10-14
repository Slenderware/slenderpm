'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('slenderpmApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  })); 

  it('loginModule username not initialiazed', function () {
    expect(scope.username).toBe('');
  });

  it('loginModule password not initialiazed', function () {
    expect(scope.password).toBe('');
  });

  it('loginModule error not initialiazed', function () {
    expect(scope.error).toBe('');
  });

  it('loginModule result not initialiazed', function () {
    expect(scope.result).toBe(true);
  });

});
