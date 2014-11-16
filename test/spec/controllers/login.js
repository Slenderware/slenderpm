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

    //Server Tests
  it('loginModule failed to login to server with dummy details', function () {
      scope.username = 'dummy';
      scope.password = 'dummy';
      scope.authenticate();

      scope.$on('loggingIn', function (event, args) {         
          expect(scope.result.success).toBe(true);
      }); 
  });

  
});
