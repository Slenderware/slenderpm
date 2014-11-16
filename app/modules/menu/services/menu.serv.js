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
angular.module('slenderpmApp.menu.service')

  //Service called MenuService
  .service('MenuService', function ($http, $location, $rootScope, $q, $cookies, MenuItemModule) {

      //Initialize Login Module using a factory
      this.InitMenuItems = function () {
          var item1 = new MenuItemModule('Tasks', 'tasks', true);
          //var item2 = new MenuItemModule('Gantt', 'area-chart', false);
          var item3 = new MenuItemModule('Project Comments', 'comments-o', false);
          var item4 = new MenuItemModule('Project Resources', 'group', false);
      
          var items = [];
          items.push(item1);
          //items.push(item2);
          items.push(item3);
          items.push(item4);
        
          return items;
      };
      
      //Gets Projects for user based on sessionid in cookieStore
      this.GetProjects = function (uri) {
          var deferred = $q.defer();

          $http({
              method: 'POST',
              url: uri.concat('users/getUserProjects'),
              data: 'sessionId=' + $cookies.session,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available   

              deferred.resolve(data);
          }).
          error(function (data) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.               
              deferred.resolve(data);
          });

          return deferred.promise;
      };

      //Adds Projects 
      this.AddProjects = function (project, uri) {
          var deferred = $q.defer();         
          $http({
              method: 'POST',
              url: uri.concat('projects/addProject'),
              data: 'projectName=' + project.projectName + '&projectDescription=' + project.projectDescription + '&startDate=' + '2014-11-08' + '&endDate=' + '2014-11-09' + '&projectCreator=' + $rootScope.user.id + '&projectManager=' + $rootScope.user.id,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data) {
              // this callback will be called asynchronously
              // when the response is available   

              deferred.resolve(data);
          }).
          error(function (data) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.               
              deferred.resolve(data);
          });

          return deferred.promise;
      };

     
      this.CurrentProject = function (project) {
          $rootScope.currentProject = project;
      };

      this.CurrentMenuItem = function () {
          for (var i = 0; i < $rootScope.menuItems.length; i++) {
              if ($rootScope.menuItems[i].selected) {                       
                  return $rootScope.menuItems[i];
              }
          }
      };      

      this.ShowMenu = function () {
          if ($cookies.session !== undefined) {
              return true;
          }
          return false;
      };

      this.Logout = function () {
          delete $cookies.session;
          $location.path('Login');
      };

      this.Toggle = function (name) {
          for (var i = 0; i < $rootScope.menuItems.length; i++) {
              if (name === $rootScope.menuItems[i].name) {
                  $rootScope.menuItems[i].selected = true;
                  $rootScope.currMenuItem = $rootScope.menuItems[i];
                  setTimeout(function () { $rootScope.$broadcast('load-' + name); }, 100);                
                  $location.path($rootScope.currMenuItem.name);
              }
              else {
                  $rootScope.menuItems[i].selected = false;
              }
          }
      };

      this.IsAuthenticated = function () {
          if ($cookies.session === undefined) {
              $location.path('Login');
          }
      };
  });
