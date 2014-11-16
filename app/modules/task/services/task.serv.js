'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
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

    this.AddTask = function (taskModule, uri) {
        //Enables callback when http request is done       
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/addTask'),
            data: 'taskName=' + taskModule.taskName + '&taskDesc=' + taskModule.taskDesc + '&plannedStartDate=' + taskModule.plannedStartDate + '&plannedEndDate=' + taskModule.plannedEndDate + '&projectId=' + taskModule.projectId + '&timeAllocation=' + taskModule.timeAllocation + '&priorityId=' + taskModule.priorityId,
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

    this.GetTaskProgress = function (taskid, uri) {
        //Enables callback when http request is done
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: uri.concat('tasks/getProgressPercentage'),
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
    }

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

    this.AddUser = function (userId, taskId, uri) {

        var deferred = $q.defer();      
        $http({
            method: 'POST',
            url: uri.concat('users/assignUserToTask'),
            data: 'userId=' + userId + '&taskId=' + taskId,
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

    this.GetProjectUsers = function (projectid, uri) {

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: uri.concat('projects/getProjectUsers'),
            data: 'id=' + projectid,
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

