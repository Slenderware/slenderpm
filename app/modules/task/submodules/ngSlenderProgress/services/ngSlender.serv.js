'use strict';

/**
 * @ngdoc function
 * @name ngSlenderProgress.services
 * @description
 * # ngSlenderProgressService
 * Service of the ngSlenderProgress
 */
angular.module('ngSlenderProgress.services')

  //Service called ngSlenderProgressService
  .service('ngSlenderProgressService', function () {
      this.GetProgress = function (taskid) {          
          return '{"progress":"80"}';
      };
    });
