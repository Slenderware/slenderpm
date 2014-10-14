"use strict";angular.module("slenderpmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/Tasks",{templateUrl:"views/tasks.html",controller:"TasksCtrl"}).when("/Gantt",{templateUrl:"views/gantt.html",controller:"GanttCtrl"}).when("/Comments",{templateUrl:"views/comments.html",controller:"CommentsCtrl"}).when("/Resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/Login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/Projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).when("/Error",{templateUrl:"404.html"}).otherwise({redirectTo:"/Error"})}]),angular.module("slenderpmApp").controller("TasksCtrl",["$scope","MenuService",function(a,b){b.Toggle("Tasks"),a.roleList1=[{roleName:"User",roleId:"role1",children:[{roleName:"subUser1",roleId:"role11",children:[]},{roleName:"subUser2",roleId:"role12",children:[{roleName:"subUser2-1",roleId:"role121",children:[{roleName:"subUser2-1-1",roleId:"role1211",children:[]},{roleName:"subUser2-1-2",roleId:"role1212",children:[]}]}]}]},{roleName:"Admin",roleId:"role2",children:[]},{roleName:"Guest",roleId:"role3",children:[]}],a.roleList=a.roleList1}]),angular.module("slenderpmApp").controller("GanttCtrl",["$scope","MenuService",function(a,b){b.Toggle("Gantt")}]),angular.module("slenderpmApp").controller("CommentsCtrl",["$scope","MenuService",function(a,b){b.Toggle("Comments")}]),angular.module("slenderpmApp").controller("ResourcesCtrl",["$scope","MenuService",function(a,b){b.Toggle("Resources")}]),angular.module("slenderpmApp").factory("LoginModule",function(){var a=function(){};return a}).factory("SessionModule",function(){var a=function(a,b,c){this.username=a,this.page=b,this.token=c};return this.toString=function(){return console.log(this.username+", "+this.page+", "+this.token),this.username+", "+this.page+", "+this.token},a}).service("LoginService",["$location","$cookies",function(a,b){this.Authenticate=function(a,c){return 0!==a.length&&0!==c.length?(b.session="tasks",!0):!1},this.IsAuthenticated=function(){void 0!==b.session&&a.path("Tasks")}}]).controller("LoginCtrl",["$scope","$location","LoginService",function(a,b,c){a.username="",a.password="",a.result=!0,a.error="",c.IsAuthenticated(),a.authenticate=function(){a.result=c.Authenticate(a.username,a.password),a.result?b.path("Tasks"):a.error="Username/Password was incorrect!"}}]),angular.module("slenderpmApp").controller("ProjectsCtrl",["$scope","MenuService",function(a,b){b.Toggle("Projects")}]),angular.module("slenderpmApp").factory("MenuItemModule",function(){var a=function(a,b,c){this.name=a,this.icon=b,this.selected=c};return a}).service("MenuService",["$location","$rootScope","$cookies","MenuItemModule",function(a,b,c,d){this.InitMenuItems=function(){var a=new d("Tasks","tasks",!0),b=new d("Gantt","area-chart",!1),c=new d("Comments","comments-o",!1),e=new d("Resources","group",!1),f=[];return f.push(a),f.push(b),f.push(c),f.push(e),f},this.CurrentMenuItem=function(){for(var a=0;a<b.menuItems.length;a++)if(b.menuItems[a].selected)return b.menuItems[a]},this.ShowMenu=function(){return"tasks"===c.session?!0:!1},this.Logout=function(){delete c.session},this.Toggle=function(c){for(var d=0;d<b.menuItems.length;d++)c===b.menuItems[d].name?(b.menuItems[d].selected=!0,b.currMenuItem=b.menuItems[d],a.path(b.currMenuItem.name)):b.menuItems[d].selected=!1},this.IsAuthenticated=function(){void 0===c.session&&a.path("Login")}}]).controller("MenuCtrl",["$rootScope","$scope","MenuService",function(a,b,c){a.menuItems=c.InitMenuItems(),c.IsAuthenticated(),a.currMenuItem=c.CurrentMenuItem(),a.toggle=function(a){c.Toggle(a)},a.showMenu=function(){return c.ShowMenu()},a.logout=function(){c.Logout()}}]);