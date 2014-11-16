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
