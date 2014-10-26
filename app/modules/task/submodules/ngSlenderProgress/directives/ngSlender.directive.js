'use strict';

angular
  .module('ngSlenderProgress.directives', [])

  .directive('taskProgress', function () {
      return {
          templateUrl: 'modules/task/submodules/ngSlenderProgress/ngSlenderProgress.html',
          restrict: 'E'
      };
  });