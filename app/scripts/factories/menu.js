'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

  //Factory for MenuItemModule
  .factory('MenuItemModule', function () {
      
       var MenuItemModule = function(name, icon, selected){
        this.name = name;
        this.icon = icon;
        this.selected = selected;        
      };

      return MenuItemModule;
  });
