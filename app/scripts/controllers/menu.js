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
  })

  //Service called MenuService
  .service('MenuService', function($location, $rootScope, $cookies, MenuItemModule){

      //Initialize Login Module using a factory
      this.InitMenuItems = function(){
        var item1 = new MenuItemModule('Tasks', 'tasks', true);
        var item2 = new MenuItemModule('Gantt', 'area-chart', false);
        var item3 = new MenuItemModule('Comments', 'comments-o', false);
        var item4 = new MenuItemModule('Resources', 'group', false);

        var items = [];
        items.push(item1);
        items.push(item2);
        items.push(item3);
        items.push(item4);
       
        return items; 
      };

      this.CurrentMenuItem = function(){
        for (var i = 0; i < $rootScope.menuItems.length; i++) {
          if($rootScope.menuItems[i].selected){
            return $rootScope.menuItems[i];
          }
        }
      };

      this.ShowMenu = function(){        
        if($cookies.session === 'tasks'){
          return true;
        }
        return false;
      };

      this.Logout = function(){
          delete $cookies.session;
      };

      this.Toggle = function(name){
        for (var i = 0; i < $rootScope.menuItems.length; i++) {
          if(name === $rootScope.menuItems[i].name ){
            $rootScope.menuItems[i].selected = true;
            $rootScope.currMenuItem = $rootScope.menuItems[i];          
            $location.path( $rootScope.currMenuItem.name );
          }
          else{
            $rootScope.menuItems[i].selected = false;
          }
        }
      };

      this.IsAuthenticated = function(){
          if($cookies.session === undefined) {      
            $location.path( 'Login' );
        }
      };
  })

  //Menu Controller
  .controller('MenuCtrl', function ($rootScope, $scope, MenuService) {
    $rootScope.menuItems = MenuService.InitMenuItems();

    //Checks to see if user is authenticated
    MenuService.IsAuthenticated();

    $rootScope.currMenuItem = MenuService.CurrentMenuItem();
    $rootScope.toggle = function(name) { MenuService.Toggle(name); };
    $rootScope.showMenu = function() { return MenuService.ShowMenu(); };
    $rootScope.logout = function() { MenuService.Logout(); };

  });
