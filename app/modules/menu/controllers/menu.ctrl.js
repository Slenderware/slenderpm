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
  .controller('MenuCtrl', function ($rootScope, $scope, MenuService, LoginService, Project) {
      $rootScope.menuItems = MenuService.InitMenuItems();
         
      //Set current project and get tasks
      $scope.currentProject = function (project) {         

          $rootScope.currProject = project;
          //Broadcast that default project is initialized
          $rootScope.$broadcast('current-project-init');         
      };

      $scope.getUser = function () {
          LoginService.GetUser($scope.RESTURI).then(function (result) {
              $rootScope.user = angular.fromJson(result);              
          });
      };

      //Checks to see if user is authenticated
      MenuService.IsAuthenticated();

      $scope.projectsLoading = false;
      //Gets Projects for user based on sessionid in cookieStore
      $scope.getProjects = function () {
          
          //Indicate that loading has started
          $scope.projectsLoading = true;
          if ($scope.projects === undefined) {
              console.log(2);
              MenuService.GetProjects($scope.RESTURI).then(function (data) {
                  //Indicate that loading is complete
                  $scope.projectsLoading = false;                  
                  $scope.projects = angular.fromJson(data);
                  $scope.currentProject($scope.projects[0]);  
              });
          }
          else {
              $scope.projectsLoading = false;            
              $scope.currentProject($scope.currProject);
          }
      };

      //Adds Project
      $scope.addProject = function () {          
          $scope.projectDto = new Project($scope.user.id, $scope.user.id, $scope.projectName, $scope.projectDescription, $scope.startDate, $scope.endDate);
          MenuService.AddProjects($scope.projectDto, $scope.RESTURI).then(function (data) {

          });
      };
      
      $scope.$on('load-Tasks', function (event, args) {         
          setTimeout(function () { $rootScope.$broadcast('current-project-init'); }, 100);
                 
      });
      
      //$rootScope.
      $rootScope.currMenuItem = MenuService.CurrentMenuItem();
      $rootScope.toggle = function (name) { MenuService.Toggle(name); };
      $rootScope.showMenu = function () { return MenuService.ShowMenu(); };
      $rootScope.logout = function () { MenuService.Logout(); };

  });
