'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.services
 * @description
 * # ngSlenderListService
 * Service of the ngSlenderList
 */
angular.module('ngSlenderList.services')

  //Service called ngSlenderListService
  .service('ngSlenderListService', function () {
      this.GetTasks = function (projid) {          
          return '[{"id":"1", "title":"Task1"},{"id":"2", "title":"Task2"},{"id":"3", "title":"Task3"}]';
      };

      this.GetSubTasks = function (taskid) {         
          return '[{"id":"1", "title":"Task1"},{"id":"2", "title":"Task2"},{"id":"3", "title":"Task3"}]';
      };
    });
