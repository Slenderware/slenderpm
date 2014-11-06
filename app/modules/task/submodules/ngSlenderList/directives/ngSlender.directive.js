'use strict';

angular
  .module('ngSlenderList.directives', [])

  .directive('taskList', function() {
    return {    
        templateUrl: 'modules/task/submodules/ngSlenderList/ngSlenderList.html',
        restrict: 'E'
    };
  });