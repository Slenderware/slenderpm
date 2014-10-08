'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('slenderpmApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of menuItem to the scope', function () {
    expect(scope.menuItems.length).toBe(4);
  });

  it('Item 1 should have name Tasks', function () {
    expect(scope.menuItems[0].name).toBe('Tasks');
  });

  it('Item 2 should have name Tasks', function () {
    expect(scope.menuItems[1].name).toBe('Gantt');
  });

  it('Item 3 should have name Tasks', function () {
    expect(scope.menuItems[2].name).toBe('Comments');
  });

  it('Item 4 should have name Tasks', function () {
    expect(scope.menuItems[3].name).toBe('Resources');
  });
});
