'use strict';

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

  it('loginModule username is initialiazed before start', function () {
      expect(scope.username).toBe(undefined);
  });

  it('loginModule username failed to initialize', function () {
      scope.username = 'dummy';
      expect(scope.username).toBe('dummy');
  });
});
