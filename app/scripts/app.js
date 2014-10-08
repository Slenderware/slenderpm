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
      .otherwise({
        redirectTo: '/'
      });
  });
