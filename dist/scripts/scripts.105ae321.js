"use strict";angular.module("slenderpmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/Tasks",{templateUrl:"views/tasks.html",controller:"TasksCtrl"}).when("/Gantt",{templateUrl:"views/gantt.html",controller:"GanttCtrl"}).when("/Comments",{templateUrl:"views/comments.html",controller:"CommentsCtrl"}).when("/Resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/Login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/Projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).otherwise({redirectTo:"/Login"})}]),angular.module("slenderpmApp").controller("MainCtrl",["$scope",function(a){a.menuItems=[{name:"Tasks",icon:"tasks",selected:!0},{name:"Gantt",icon:"area-chart",selected:!1},{name:"Comments",icon:"comments-o",selected:!1},{name:"Resources",icon:"group",selected:!1}],a.userState=[{name:"Unsecure",active:!0},{name:"SecureProj",active:!1},{name:"SecureTask",active:!1}],a.currMenuItem=a.menuItems[0],a.currUserState=a.userState[0],a.user={username:"Jannik Richter"},a.toggle=function(b){for(var c=0;c<a.menuItems.length;c++)b!==a.menuItems[c].name?a.menuItems[c].selected=!1:(a.menuItems[c].selected=!0,a.currMenuItem=a.menuItems[c])},a.changeUserState=function(b){for(var c=0;c<a.userState.length;c++)c===b?(a.userState[c].active=!0,a.currUserState=a.userState[c]):a.userState[c].active=!1}}]),angular.module("slenderpmApp").controller("TasksCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("slenderpmApp").controller("GanttCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("slenderpmApp").controller("CommentsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("slenderpmApp").controller("ResourcesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("slenderpmApp").controller("LoginCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("slenderpmApp").controller("ProjectsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);