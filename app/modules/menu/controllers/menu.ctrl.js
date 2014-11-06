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
  .controller('MenuCtrl', function ($rootScope, $scope, MenuService, ngSlenderListService, LoginService, SlenderCommentService) {
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
              console.log($scope.user);
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
                  //console.log($scope.projects);

              });
          }
          else {
              $scope.projectsLoading = false;
              console.log('else 2');
              $scope.currentProject($scope.currProject);
          }
      };
          

      
      $rootScope.currMenuItem = MenuService.CurrentMenuItem();
      $rootScope.toggle = function (name) { MenuService.Toggle(name); };
      $rootScope.showMenu = function () { return MenuService.ShowMenu(); };
      $rootScope.logout = function () { MenuService.Logout(); };

  });
