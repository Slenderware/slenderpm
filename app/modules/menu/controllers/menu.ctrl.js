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
               
      $scope.getUser = function () {
          if ($scope.user === undefined) {
              LoginService.GetUser($scope.RESTURI).then(function (result) {
                  $rootScope.user = angular.fromJson(result);

                  $rootScope.$broadcast('current-user-init');
              });
          }
      };

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
              });
          }
          else {
              //Indicate that loading is complete
              $scope.projectsLoading = false;            
              //$scope.currentProject($scope.currProject);
          }
      };

      //Set current project and get tasks
      $scope.currentProject = function (project) {

          $rootScope.currProject = project;
          $rootScope.$broadcast('current-project-init');
      };

      //Adds Project
      $scope.addProject = function () {          
          $scope.projectDto = new Project($scope.user.id, $scope.user.id, $scope.projectName, $scope.projectDescription, $scope.startDate, $scope.endDate);
          MenuService.AddProjects($scope.projectDto, $scope.RESTURI).then(function (result) {
              $scope.result = angular.fromJson(result);

              if ($scope.result.success) {
                  setTimeout(function () { $('#AddProjModal').modal('hide'); $scope.result = undefined;}, 1000);

                  //Garbage collector for Add Project attributes
                  $scope.user.id = undefined;
                  $scope.user.id = undefined;
                  $scope.projectName = undefined;
                  $scope.projectDescription = undefined;
                  $scope.startDate = undefined;
                  $scope.endDate = undefined;

                  //Reload Projects
                  $scope.projects = undefined; //Garbage collector
                  $scope.getProjects();
              }
          });
      };

      $scope.$on('current-user-init', function (event, args) {        
          $scope.getProjects();
      });
      
      $scope.$on('load-Tasks', function (event, args) {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
              $rootScope.$broadcast('current-project-init');
          }
      });

      $scope.$on('load-Project Resources', function (event, args) {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
              $rootScope.$broadcast('current-project-init');
          }
      });

      $scope.$on('load-Project Comments', function (event, args) {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
              $rootScope.$broadcast('current-project-init');
          }
      });

      //DatePicker
      $scope.dateOptions = {
          changeYear: true,
          changeMonth: true,
          yearRange: '0:+5'
      };
      
      //$rootScope.
      $rootScope.currMenuItem = MenuService.CurrentMenuItem();
      $rootScope.toggle = function (name) { MenuService.Toggle(name); };
      $rootScope.showMenu = function () { return MenuService.ShowMenu(); };
      $rootScope.logout = function () {
          $scope.tasks = undefined;
          $scope.projects = undefined;
          $rootScope.currTask = undefined;
          $rootScope.currProject = undefined;
          $rootScope.user = undefined;
          MenuService.Logout();
      };

  });
