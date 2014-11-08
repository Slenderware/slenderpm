'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.menu.factory')

  //Factory for MenuItemModule
  .factory('MenuItemModule', function () {

      var MenuItemModule = function (name, icon, selected) {
          this.name = name;
          this.icon = icon;
          this.selected = selected;
      };

      return MenuItemModule;
  })

    //Factory for Project
  .factory('Project', function () {

      var Project = function (projectCreator, projectManager, projectName, projectDescription, startDate, endDate) {
          this.projectName = projectName;
          this.projectDescription = projectDescription;
          this.startDate = startDate;
          this.endDate = endDate;
          this.projectCreator = projectCreator;
          this.projectManager = projectManager; 
      };

      return Project;
  })
;
