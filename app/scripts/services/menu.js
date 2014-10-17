'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

  //Service called MenuService
  .service('MenuService', function($location, $rootScope, $cookies, MenuItemModule){

      //Initialize Login Module using a factory
      this.InitMenuItems = function(){
        var item1 = new MenuItemModule('Tasks', 'tasks', true);
        var item2 = new MenuItemModule('Gantt', 'area-chart', false);
        var item3 = new MenuItemModule('Comments', 'comments-o', false);
        var item4 = new MenuItemModule('Resources', 'group', false);
        //var item5 = new MenuItemModule('Timesheet', 'calendar', false);

        var items = [];
        items.push(item1);
        items.push(item2);
        items.push(item3);
        items.push(item4);
        //items.push(item5);
       
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
          $location.path( 'Login' );
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
  });
