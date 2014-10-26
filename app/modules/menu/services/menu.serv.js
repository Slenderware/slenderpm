'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.menu.service')

  //Service called MenuService
  .service('MenuService', function ($http, $location, $rootScope, $q, $cookies, MenuItemModule) {

      //Initialize Login Module using a factory
      this.InitMenuItems = function () {
          var item1 = new MenuItemModule('Tasks', 'tasks', true);
          var item2 = new MenuItemModule('Gantt', 'area-chart', false);
          var item3 = new MenuItemModule('Comments', 'comments-o', false);
          var item4 = new MenuItemModule('Resources', 'group', false);
          //var item5 = new MenuItemModule('Timesheet', 'calendar', false);

          var items = [];
          items.push(item1);
          items.push(item2);
          items.push(item3);
          items.push(item4);
          //items.push(item5);

          return items;
      };
      
      //Gets Projects for user based on sessionid in cookieStore
      this.GetProjects = function (uri) {
          var deferred = $q.defer();

          $http({
              method: 'POST',
              url: uri.concat('projects/getProjects'),
              data: 'sessionId=' + $cookies.session,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;' }
          })
          .success(function (data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available   

              deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.               
              deferred.resolve(data);
          });

          return deferred.promise;
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
