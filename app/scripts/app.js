/// <reference path="../modules/login/views/login.html" />
/// <reference path="../modules/login/views/login.html" />
'use strict';

/**
 * @ngdoc overview
 * @name slenderpmApp
 * @description
 * # slenderpmApp
 *
 * Main module of the application.
 */
angular
  .module('slenderpmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSlenderList',
    'slenderpmApp.login'
  ])

  .factory('ResultModule', function () {
      
       var ResultModule = function(success, message){
        this.success = success;
        this.message = message;       
      };

      return ResultModule;
  })

  .factory('SessionModule', function () {
      
       var SessionModule = function(username, page, token){
        this.username = username;
        this.page = page;
        this.token = token;       
      };

      this.toString = function(){
        console.log(this.username + ', ' + this.page + ', ' + this.token);
        return this.username + ', ' + this.page + ', ' + this.token;
      };

      return SessionModule;
  })

  .config(function ($routeProvider) {
    $routeProvider     
      .when('/Tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })    
     
      .when('/Gantt', {
        templateUrl: 'views/gantt.html',
        controller: 'GanttCtrl'
      })
      .when('/Comments', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/Resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/Login', {
          templateUrl: 'modules/login/views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/Projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })      
      .when('/Register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/Timesheet', {
        templateUrl: 'views/timesheet.html',
        controller: 'TimesheetCtrl'
      })
      .otherwise({
        redirectTo: '/Login'
      });
  });
