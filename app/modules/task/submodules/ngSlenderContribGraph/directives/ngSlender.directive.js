'use strict';

angular
  .module('ngSlenderContribGraph.directives', [])

  .directive('taskContribGraph', function () {
  	return {
  	    templateUrl: 'modules/task/submodules/ngSlenderContribGraph/ngSlenderContribGraph.html'
  	};
  });