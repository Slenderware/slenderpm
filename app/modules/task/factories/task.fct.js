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
 