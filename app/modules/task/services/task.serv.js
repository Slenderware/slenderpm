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
angular.module('slenderpmApp.task.service')

.service('TasksService', function ($http, $q, Task, TaskProgress, Chart) {

    //Tasks
    this.InitTask = function (taskName, taskDesc, plannedStartDate, plannedEndDate, projectId, timeAllocation, priorityId) {     
        return new Task(taskName, taskDesc, plannedStartDate, plannedEndDate, projectId, timeAllocation, priorityId);
    };

    this.GetTasks = function (session, projid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectTasks'),
            data: 'id=' + projid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });
        return deferred.promise;
    };
	
	this.GetUserTasks = function (session, projid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('users/getUserProjectTasks'),
            data: 'sessionId=' + session + '&projectId=' + projid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.AddTask = function (taskModule, uri) {
        //Enables callback when http request is done       
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/addTask'),
            data: 'taskName=' + taskModule.taskName + '&taskDesc=' + taskModule.taskDesc + '&plannedStartDate=' + taskModule.plannedStartDate + '&plannedEndDate=' + taskModule.plannedEndDate + '&projectId=' + taskModule.projectId + '&timeAllocation=' + taskModule.timeAllocation + '&priorityId=' + taskModule.priorityId,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.MarkTaskComplete = function (taskid, uri) {
        //Enables callback when http request is done       
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/markAsComplete'),
            data: 'id=' + taskid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });
        return deferred.promise;
    };
	
    //Progress
    this.InitTaskProgress = function (taskId, userId, hours) {
        return new TaskProgress(taskId, userId, hours);
    };

    this.AddTaskProgress = function (taskProgress, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/addProgress'),
            data: 'id=' + taskProgress.taskId + '&userId=' + taskProgress.userId + '&hours=' + taskProgress.hours,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available  
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.GetTaskProgress = function (taskid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/getProgressPercentage'),
            data: 'id=' + taskid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available  
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    //Comments

    this.AddComment = function (Comment, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/addTaskComment'),
            data: 'userId=' + Comment.userId + '&taskId=' + Comment.parentId + '&comment=' + Comment.comment,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available  
            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.GetComments = function (taskid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/getTaskComments'),
            data: 'id=' + taskid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available  
            deferred.resolve(data);
        }).
        error(function (data) {
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
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   

            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.AddUser = function (userId, taskId, uri) {

        var deferred = $q.defer();      
        $http({
            method: 'POST',
            url: uri.concat('users/assignUserToTask'),
            data: 'userId=' + userId + '&taskId=' + taskId,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   

            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.GetProjectUsers = function (projectid, uri) {

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectUsers'),
            data: 'id=' + projectid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
        })
        .success(function (data) {
            // this callback will be called asynchronously
            // when the response is available   

            deferred.resolve(data);
        }).
        error(function (data) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            deferred.resolve(data);
        });

        return deferred.promise;
    };

    //Contrib Chart
    this.InitChart = function (data) {      
        var chartArr = [];
        for (var i = 0; i < data.length; i++) {
            var chart = new Chart(data[i].username, data[i].progressPercentage, data[i].username + ': ' + data[i].progressHours + ' hours');          
            chartArr.push(chart);
        }
        return chartArr;
    };
});

