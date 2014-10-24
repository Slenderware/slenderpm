'use strict';

angular
  .module('ngSlenderComments.directives', [])

  .directive('taskComments', function () {
  	return {
  		templateUrl: 'modules/task/submodules/ngSlenderComments/ngSlenderComments.html'
  	};
  });