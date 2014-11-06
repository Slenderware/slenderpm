'use strict';

angular
  .module('ngSlenderUserList.directives', [])

  .directive('taskUserList', function () {
  	return {
  	    templateUrl: 'modules/task/submodules/ngSlenderUserList/ngSlenderUserList.html'
  	};
  });