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
  .controller('MenuCtrl', function ($rootScope, $scope, MenuService, ngSlenderListService) {
      $rootScope.menuItems = MenuService.InitMenuItems();

      //Checks to see if user is authenticated
      MenuService.IsAuthenticated();

      $scope.projectsLoading = false;
      //Gets Projects for user based on sessionid in cookieStore
      $scope.getProjects = function () {
          //Indicate that loading has started
          $scope.projectsLoading = true;
          if ($scope.projects === undefined) {
              MenuService.GetProjects($scope.RESTURI).then(function (data) {
                  //Indicate that loading is complete
                  $scope.projectsLoading = false;
                  
                  $scope.projects = angular.fromJson(data);

                  $scope.currentProject($scope.projects[0]);

                  if ($scope.projects.length !== 0) {
                      $rootScope.currentProject = $scope.projects[0];
                  }
                  console.log($scope.projects);

              });
          }
          else {
              $scope.projectsLoading = false;

              $scope.currentProject($scope.projects[0])
          }
      };
          

      $scope.currentProject = function (project) {
          
          $scope.currentProject = project;
         
          ngSlenderListService.GetTasks($scope.currentProject.id, $scope.RESTURI).then(function (result) {
              $scope.tasks = angular.fromJson(result);
              $rootScope.currentTask = $scope.tasks[0];
          });
      };
      $rootScope.currMenuItem = MenuService.CurrentMenuItem();
      $rootScope.toggle = function (name) { MenuService.Toggle(name); };
      $rootScope.showMenu = function () { return MenuService.ShowMenu(); };
      $rootScope.logout = function () { MenuService.Logout(); };

  });
