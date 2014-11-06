'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.services
 * @description
 * # ngSlenderListService
 * Service of the ngSlenderList
 */
angular.module('ngSlenderUserList.services')

  //Service called ngSlenderListService
  .service('SlenderUserListService', function ($http, $q) {
      this.GetUsers = function (taskid, uri) {
          
          var deferred = $q.defer();
          
          $http({
              method: 'POST',
              url: uri.concat('tasks/getTaskUsers'),
              data: 'id=' + taskid,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available   

              deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.

              deferred.resolve(data);
          });

          return deferred.promise;
      };
    });
