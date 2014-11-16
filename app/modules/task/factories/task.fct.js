'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.factories:TasksFct
 * @description
 * # TasksTasksFct
 * Factory of the slenderpmApp
 */
angular.module('slenderpmApp.task.factory')
 //Factory for Project
  .factory('Task', function () {

      var Task = function (taskName, taskDesc, plannedStartDate, plannedEndDate, projectId, timeAllocation, priorityId) {
          this.taskName = taskName;
          this.taskDesc = taskDesc;         
          this.plannedStartDate = plannedStartDate;
          this.plannedEndDate = plannedEndDate;          
          this.projectId = projectId;
          this.timeAllocation = timeAllocation;
          this.priorityId = priorityId;
      };

      return Task;
  })

.factory('TaskProgress', function () {

    var TaskProgress = function (taskId, userId, hours) {
        this.taskId = taskId;
        this.userId = userId;
        this.hours = hours;
    };

    return TaskProgress;
})

.factory('Comment', function () {

    var Comment = function (userId, parentId, comment) {
        this.userId = userId;
        this.parentId = parentId;
        this.comment = comment;
    };

    return Comment;
})

.factory('Chart', function () {

    var Chart = function (x, y, tooltip) {   
        this.x = x;
        this.y = [];
        this.y.push(y);
        this.tooltip = tooltip;        
    };
   
    return Chart;
});
 