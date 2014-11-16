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
			console.log('project init');
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
				  $scope.result = undefined;
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

      $scope.$on('current-user-init', function () {        
          $scope.getProjects();
      });
      
      $scope.$on('load-Tasks', function () {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
			//if($scope.currProject === undefined){
				$rootScope.$broadcast('current-project-init');
			  //}
          }
      });

      $scope.$on('load-Project Resources', function () {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
              $rootScope.$broadcast('current-project-res');
          }
      });

      $scope.$on('load-Project Comments', function () {
          if ($scope.user === undefined) {
              $scope.getUser();
          } else {
              $rootScope.$broadcast('current-project-comment');
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
