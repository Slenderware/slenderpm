'use strict';

/**
 * @ngdoc function
 * @name ngSlenderList.services
 * @description
 * # ngSlenderListService
 * Service of the ngSlenderList
 */
angular.module('slenderpmApp.comment.services')

.service('ProjectCommentService', function ($http, $q) {

    //Comments
    this.GetComments = function (projid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectComments'),
            data: 'id=' + projid,
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

