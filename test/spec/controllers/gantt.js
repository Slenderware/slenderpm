'use strict';

describe('Controller: GanttCtrl', function () {

  // load the controller's module
  beforeEach(module('slenderpmApp'));

  var GanttCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GanttCtrl = $controller('GanttCtrl', {
      $scope: scope
    });
  }));
});
