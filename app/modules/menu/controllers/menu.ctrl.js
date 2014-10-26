'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.menu.controller')

  //Menu Controller
  .controller('MenuCtrl', function ($rootScope, $scope, MenuService) {
      $rootScope.menuItems = MenuService.InitMenuItems();

      //Checks to see if user is authenticated
      MenuService.IsAuthenticated();

      //Gets Projects for user based on sessionid in cookieStore
      $scope.getProjects = function () {
          if ($scope.projects === undefined) {
              MenuService.GetProjects($scope.RESTURI).then(function (data) {
                  $scope.projects = angular.fromJson(data);
                  console.log($scope.projects)
              });
          }
      };

      $rootScope.currMenuItem = MenuService.CurrentMenuItem();
      $rootScope.toggle = function (name) { MenuService.Toggle(name); };
      $rootScope.showMenu = function () { return MenuService.ShowMenu(); };
      $rootScope.logout = function () { MenuService.Logout(); };

  });
