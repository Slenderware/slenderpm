'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.task.service')

.service('TasksService', function ($http, $q) {

    //Tasks
    this.GetTasks = function (projid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectTasks'),
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

    this.GetSubTasks = function (taskid) {
        return '[{"id":"1", "title":"Task1"},{"id":"2", "title":"Task2"},{"id":"3", "title":"Task3"}]';
    };

    //Comments
    this.GetComments = function (taskid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/getTaskComments'),
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

    //Users
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

