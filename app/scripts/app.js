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
    'ngTouch'
  ])
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
        templateUrl: 'views/login.html',
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
      .otherwise({
        redirectTo: '/Login'
      });
  });
