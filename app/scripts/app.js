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
 
angular
  .module('slenderpmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.date',
    'angularCharts',
    'slenderpmApp.login',
    'slenderpmApp.register',
    'slenderpmApp.task',
    'slenderpmApp.menu',
    'slenderpmApp.gantt',
    'slenderpmApp.comment',
    'slenderpmApp.resource'
  ])

    .run(function ($rootScope) {
        // start using constants module
        $rootScope.RESTURI = 'http://192.168.0.101:8084/slenderware-webservice-rest/webresources/';
        $rootScope.HEADERS = {  'Access-Control-Allow-Origin' : '*',
                                'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            };
    })

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
      .when('/Project Comments', {
          templateUrl: 'modules/comment/views/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/Project Resources', {
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
