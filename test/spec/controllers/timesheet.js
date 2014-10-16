'use strict';

describe('Controller: TimesheetCtrl', function () {

  // load the controller's module
  beforeEach(module('slenderpmApp'));

  var TimesheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimesheetCtrl = $controller('TimesheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
