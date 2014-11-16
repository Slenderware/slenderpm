'use strict';

/**
 * author Jannik Richter
 * 
 *  The MIT License (MIT)

    Copyright © 2014 Slenderware

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */
angular.module('slenderpmApp.comment.services')

.service('ProjectCommentService', function ($http, $q, Comment) {

    //Comments
    this.InitProjectComment = function (userId, parentId, comment) {
        return new Comment(userId, parentId, comment);
    };
 
    this.AddComment = function (Comment, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('projects/addProjectComment'),
            data: 'userId=' + Comment.userId + '&projectId=' + Comment.parentId + '&comment=' + Comment.comment,
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

