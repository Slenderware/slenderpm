'use strict';

angular
  .module('ngSlenderAttachments.directives', [])

  .directive('taskAttachments', function () {
  	return {
  		templateUrl: 'modules/task/submodules/ngSlenderAttachments/ngSlenderAttachments.html'
  	};
  });