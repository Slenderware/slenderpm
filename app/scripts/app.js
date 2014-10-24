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
    'slenderpmApp.login',
    'slenderpmApp.register',
    'slenderpmApp.task',
    'slenderpmApp.menu',
    'slenderpmApp.gantt',
    'slenderpmApp.comment',
    'slenderpmApp.resource'
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
          templateUrl: 'modules/task/views/tasks.html',
        controller: 'TasksCtrl'
      })    
     
      .when('/Gantt', {
          templateUrl: 'modules/gantt/views/gantt.html',
        controller: 'GanttCtrl'
      })
      .when('/Comments', {
          templateUrl: 'modules/comment/views/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/Resources', {
          templateUrl: 'modules/resource/views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/Login', {
          templateUrl: 'modules/login/views/login.html',
        controller: 'LoginCtrl'
      })
               .when('/Register', {
          templateUrl: 'modules/register/views/register.html',
        controller: 'RegisterCtrl'
      })      
      .otherwise({
        redirectTo: '/Login'
      });
  });
