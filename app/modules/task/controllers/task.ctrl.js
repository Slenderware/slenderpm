'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.task.controller')

//Tasks
.controller('TasksCtrl', ['$scope', '$rootScope', 'MenuService', 'TasksService', function ($scope, $rootScope, MenuService, TasksService) {
    //TASKS
    MenuService.Toggle('Tasks');
    $scope.getTasks = function () {
        TasksService.GetTasks($scope.currProject.id, $scope.RESTURI).then(function (result) {
            //Populates tasks
            $scope.tasks = angular.fromJson(result);
            $rootScope.currTask = $scope.tasks[0];

            //Broadcast that default task is initialized
            $rootScope.$broadcast('current-task-init');
            
        });
    };

    $scope.$on('current-project-init', function (event, args) {
        $scope.getTasks();
    });
  
    //COMMENTS
    $scope.getComments = function () {
        TasksService.GetComments($scope.currTask.id, $scope.RESTURI).then(function (result) {
            $scope.comments = angular.fromJson(result);
        });
    };

    $scope.$on('current-task-init', function (event, args) {        
        $scope.getComments();
    });

    $scope.setCurrentTask = function (task) {
        $rootScope.currTask = task;
    };

    //USERS
    $scope.getUsers = function () {
        TasksService.GetUsers($scope.currTask.id, $scope.RESTURI).then(function (result) {
            $scope.users = angular.fromJson(result);
        });
    };

    $scope.$on('current-task-init', function (event, args) {        
        $scope.getUsers();
    });

}]);