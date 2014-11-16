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
angular.module('slenderpmApp.task.controller')

//Tasks
.controller('TasksCtrl', ['$cookies', '$scope', '$rootScope', 'MenuService', 'TasksService', 'ProjectCommentService' , function ($cookies, $scope, $rootScope, MenuService, TasksService, ProjectCommentService) {
    //TASKS
    MenuService.Toggle('Tasks');

    $scope.setCurrentTask = function (task) {
        $rootScope.currTask = task;
        //Broadcast that default task is initialized
        $rootScope.$broadcast('current-task-init');
    };

    $scope.taskLoading = false;
    $scope.getTasks = function () {
        $scope.taskLoading = true;
        if ($scope.currProject !== undefined) {
		if($scope.user.roleId === 1){
			console.log($scope.currProject.id);
            TasksService.GetTasks($cookies.session, $scope.currProject.id, $scope.RESTURI).then(function (result) {                
                $scope.taskLoading = false;
                //Populates tasks	
				console.log('test');				
                $scope.tasks = angular.fromJson(result);
				console.log($scope.tasks);
                $scope.setCurrentTask($scope.tasks[0]);              
            });
		}else{
			TasksService.GetUserTasks($cookies.session, $scope.currProject.id, $scope.RESTURI).then(function (result) {                
                $scope.taskLoading = false;
                //Populates tasks
				//console.log(result);
                $scope.tasks = result;
                $scope.setCurrentTask($scope.tasks[0]);              
            });
		}
        }
    };

    $scope.addTask = function () {       
        var Task = TasksService.InitTask(this.taskName, this.taskDesc, this.plannedStartDate, this.plannedEndDate, $scope.currProject.id, this.timeAllocation, this.priorityId);
        TasksService.AddTask(Task, $scope.RESTURI).then(function (result) {          

            if (result.success) {
                $('#addTaskModal').modal('hide');
                $scope.result = undefined;
                $scope.getTasks();
            }
        });
    };

    $scope.markTaskAsComplete = function (taskName) {
        console.log(taskName);
        if (taskName === $scope.currTask.name) {
            TasksService.MarkTaskComplete($scope.currTask.id, $scope.RESTURI).then(function (result) {
                if (result.success) {
                    $('#markAsCompleteTaskModal').modal('hide');
                    $scope.result = undefined; 
					$scope.getTasks();					
                }
            });
        } else {
            $scope.message = 'This task name does not match the task that must be deleted!';
            $scope.success = false;			
        }
    };

    $scope.$on('current-project-init', function () {	
		console.log('current-project-init');
        $scope.getTasks();
    });

    //PROGRESS
    $scope.addTaskProgress = function (hours) {
        var taskProgress = TasksService.InitTaskProgress($scope.currTask.id, $scope.user.id, hours);
       
        TasksService.AddTaskProgress(taskProgress, $scope.RESTURI).then(function (result) {        
            if (result.success) {
                $('#LogTimeModal').modal('hide');
                $scope.result = undefined;
                $scope.getTaskProgress();
                $scope.getUsers();
                $scope.getChartData();
            }
        });
    };

    $scope.getTaskProgress = function () {
        if ($scope.currTask !== undefined) {
            TasksService.GetTaskProgress($scope.currTask.id, $scope.RESTURI).then(function (result) {                        
                if (result > 100) {
                    $scope.currTaskProgress = 100;
                } else {
                    $scope.currTaskProgress = result;
                }
            });
        }
    };

    $scope.$on('current-task-init', function () {
        $scope.getTaskProgress();
    });
  
    //COMMENTS
    $scope.getComments = function () {
        if ($scope.currTask !== undefined) {
            TasksService.GetComments($scope.currTask.id, $scope.RESTURI).then(function (result) {
                $scope.comments = angular.fromJson(result);
            });
        }
    };

    $scope.addComment = function (comment) {
        var commentMod = ProjectCommentService.InitProjectComment($scope.user.id, $scope.currTask.id, comment);     
        TasksService.AddComment(commentMod, $scope.RESTURI).then(function (result) {
			console.log(result);
            $scope.comment = undefined;           
            $scope.getComments();
        });
    };

    $scope.$on('current-task-init', function () {        
        $scope.getComments();
    });

    //USERS
    $scope.getUsers = function () {
        if ($scope.currTask !== undefined) {
            TasksService.GetUsers($scope.currTask.id, $scope.RESTURI).then(function (result) {
                $scope.users = angular.fromJson(result);
                $rootScope.$broadcast('current-users-init');
            });
        }
    };

    $scope.getProjectUsers = function () {
        if ($scope.currProject !== undefined) {
            TasksService.GetProjectUsers($scope.currProject.id, $scope.RESTURI).then(function (result) {
                $scope.projectusers = angular.fromJson(result);
            });
        }        
    };

    $scope.addUser = function () {
        if ($scope.currTask !== undefined && $scope.selectedProjectUser !== undefined) {
            TasksService.AddUser($scope.selectedProjectUser.id, $scope.currTask.id, $scope.RESTURI).then(function (result) {
				console.log(result);
                $scope.projectusers = undefined;
                $scope.selectedProjectUser = undefined;
                $('#AddUserToProjectModal').modal('hide');
                $scope.getUsers();
            });
        }
    };

    $scope.userNotAdded = function (user) {
		console.log(user);
		console.log($scope.users);
        if (user !== undefined && $scope.users !== undefined) {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].id === user.id) {
                    return false;
                }                
            }
			return true;
        }
        else {
            return true;
        }
    };

    $scope.setSelectedProjUser = function (user) {
        $scope.selectedProjectUser = user;
    };

    $scope.$on('current-task-init', function () {        
        $scope.getUsers();
    });
 
    //CONTRIBUTION CHART
    $scope.$on('current-users-init', function () {      
        $scope.getChartData();
    });

    $scope.getChartData = function () {
        if ($scope.currTask !== undefined) {
        $scope.data1 = { data: TasksService.InitChart($scope.users) };
        $scope.chartColors = [];     
        for (var i = 0; i < $scope.users.length; i++) {
            switch (i) {
                case 0: $scope.chartColors.push('#3498db'); break;
                case 1: $scope.chartColors.push('#2ecc71'); break;
                case 2: $scope.chartColors.push('#1abc9c'); break;
                case 3: $scope.chartColors.push('#e67e22'); break;
                case 4: $scope.chartColors.push('#e74c3c'); break;
                case 5: $scope.chartColors.push('#ecf0f1'); break;
                case 6: $scope.chartColors.push('#95a5a6'); break;
                case 7: $scope.chartColors.push('#34495e'); break;
                case 8: $scope.chartColors.push('#c0392b'); break;
                case 9: $scope.chartColors.push('#d35400'); break;
                case 10: $scope.chartColors.push('#f39c12'); break;
                case 11: $scope.chartColors.push('#7f8c8d'); break;
                case 12: $scope.chartColors.push('#2980b9'); break;
            }
        }      

        $scope.chartType = 'pie';

        $scope.config1 = {
            labels: false,
            title: 'User Contribution',
            legend: {
                display: true,
                position: 'left'
            },
            colors: $scope.chartColors,
            innerRadius: 50
        };
        }
    };

    //DatePicker
    $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '0:+5'
    };    
}]);