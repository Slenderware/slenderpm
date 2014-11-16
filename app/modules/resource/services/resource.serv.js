'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.resource.service')

.service('ResourceService', function ($http, $q) {
    
    //Users
    this.GetUsers = function (projid, uri) {

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectUsers'),
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

    this.GetCompanyUsers = function (companyid, uri) {

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: uri.concat('company/getCompanyUsers'),
            data: 'id=' + companyid,
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

    this.AddUser = function (userId, projectId, uri) {

        var deferred = $q.defer();            
        $http({
            method: 'POST',
            url: uri.concat('users/assignUserToProject'),
            data: 'userId=' + userId + '&projectId=' + projectId,
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

