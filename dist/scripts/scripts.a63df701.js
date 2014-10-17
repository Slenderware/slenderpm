"use strict";angular.module("slenderpmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).factory("ResultModule",function(){var a=function(a,b){this.success=a,this.message=b};return a}).factory("SessionModule",function(){var a=function(a,b,c){this.username=a,this.page=b,this.token=c};return this.toString=function(){return console.log(this.username+", "+this.page+", "+this.token),this.username+", "+this.page+", "+this.token},a}).config(["$routeProvider",function(a){a.when("/Tasks",{templateUrl:"views/tasks.html",controller:"TasksCtrl"}).when("/Gantt",{templateUrl:"views/gantt.html",controller:"GanttCtrl"}).when("/Comments",{templateUrl:"views/comments.html",controller:"CommentsCtrl"}).when("/Resources",{templateUrl:"views/resources.html",controller:"ResourcesCtrl"}).when("/Login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/Projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).when("/Register",{templateUrl:"views/register.html",controller:"RegisterCtrl"}).when("/Timesheet",{templateUrl:"views/timesheet.html",controller:"TimesheetCtrl"}).otherwise({redirectTo:"/Login"})}]),angular.module("slenderpmApp").factory("TaskModule",function(){var a=function(a,b){this.username=a,this.password=b};return a}),angular.module("slenderpmApp"),angular.module("slenderpmApp").controller("CommentsCtrl",["$scope","MenuService",function(a,b){b.Toggle("Comments")}]),angular.module("slenderpmApp"),angular.module("slenderpmApp").factory("LoginModule",function(){var a=function(a,b){this.username=a,this.password=b};return a}),angular.module("slenderpmApp"),angular.module("slenderpmApp").factory("MenuItemModule",function(){var a=function(a,b,c){this.name=a,this.icon=b,this.selected=c};return a}),angular.module("slenderpmApp").factory("RegisterModule",function(){var a=function(a,b,c){this.name=a,this.surname=b,this.email=c};return a}),angular.module("slenderpmApp"),angular.module("slenderpmApp"),angular.module("slenderpmApp").service("GanttService",function(){this.FetchData=function(){return{data:[{id:1,text:"Project #2",start_date:"01-04-2013",duration:18,order:10,progress:.4,open:!0},{id:2,text:"Task #1",start_date:"02-04-2013",duration:8,order:10,progress:.6,parent:1},{id:3,text:"Task #2",start_date:"11-04-2013",duration:8,order:20,progress:.6,parent:1}],links:[{id:1,source:1,target:2,type:"1"},{id:2,source:2,target:3,type:"0"},{id:3,source:3,target:4,type:"0"},{id:4,source:2,target:5,type:"2"}]}}}),angular.module("slenderpmApp"),angular.module("slenderpmApp"),angular.module("slenderpmApp").service("LoginService",["$location","$cookies","ResultModule","LoginModule",function(a,b,c,d){this.InitLoginModule=function(a,b){return new d(a,b)},this.Authenticate=function(a){return"admin"===a.username&&"admin"===a.password?(b.session="tasks",new c(!0,"Login was successfull, redirecting...")):new c(!1,"Username/Password was incorrect!")},this.Register=function(){a.path("Register")},this.IsAuthenticated=function(){void 0!==b.session&&a.path("Tasks")}}]),angular.module("slenderpmApp"),angular.module("slenderpmApp").service("MenuService",["$location","$rootScope","$cookies","MenuItemModule",function(a,b,c,d){this.InitMenuItems=function(){var a=new d("Tasks","tasks",!0),b=new d("Gantt","area-chart",!1),c=new d("Comments","comments-o",!1),e=new d("Resources","group",!1),f=[];return f.push(a),f.push(b),f.push(c),f.push(e),f},this.CurrentMenuItem=function(){for(var a=0;a<b.menuItems.length;a++)if(b.menuItems[a].selected)return b.menuItems[a]},this.ShowMenu=function(){return"tasks"===c.session?!0:!1},this.Logout=function(){delete c.session,a.path("Login")},this.Toggle=function(c){for(var d=0;d<b.menuItems.length;d++)c===b.menuItems[d].name?(b.menuItems[d].selected=!0,b.currMenuItem=b.menuItems[d],a.path(b.currMenuItem.name)):b.menuItems[d].selected=!1},this.IsAuthenticated=function(){void 0===c.session&&a.path("Login")}}]),angular.module("slenderpmApp").service("RegisterService",["$location","$cookies","RegisterModule","ResultModule",function(a,b,c,d){this.InitRegisterModule=function(a,b,d){return new c(a,b,d)},this.IsAuthenticated=function(){void 0!==b.session&&a.path("Tasks")},this.RegisterUser=function(a){return console.log(a.name),new d(!0,"Registration was successful, check your inbox for your verifaction email")},this.Back=function(){a.path("Login")}}]),angular.module("slenderpmApp"),angular.module("slenderpmApp").directive("taskList",function(){return{templateUrl:"templates/tasklist.html"}}).factory("TaskModule",function(){var a=function(a,b){this.username=a,this.password=b};return a}).controller("TasksCtrl",["$scope","MenuService",function(a,b){b.Toggle("Tasks")}]),angular.module("slenderpmApp").directive("dhxGantt",function(){return{restrict:"A",scope:!1,transclude:!0,template:"<div ng-transclude></div>",link:function(a,b,c){a.$watch(c.data,function(a){gantt.clearAll(),gantt.parse(a,"json")},!0),a.$watch(function(){return b[0].offsetWidth+"."+b[0].offsetHeight},function(){gantt.setSizes()}),gantt.init(b[0])}}}).controller("GanttCtrl",["$scope","MenuService","GanttService",function(a,b,c){b.Toggle("Gantt"),a.tasks=c.FetchData(1)}]),angular.module("slenderpmApp").controller("CommentsCtrl",["$scope","MenuService",function(a,b){b.Toggle("Comments")}]),angular.module("slenderpmApp").controller("ResourcesCtrl",["$scope","MenuService",function(a,b){b.Toggle("Resources")}]),angular.module("slenderpmApp").controller("LoginCtrl",["$scope","$location","LoginService",function(a,b,c){c.IsAuthenticated(),a.register=function(){c.Register()},a.authenticate=function(){var d=c.InitLoginModule(a.username,a.password);a.result=c.Authenticate(d),a.result.success&&b.path("Tasks")}}]),angular.module("slenderpmApp").controller("ProjectsCtrl",["$scope","MenuService",function(a,b){b.Toggle("Projects")}]),angular.module("slenderpmApp").controller("MenuCtrl",["$rootScope","$scope","MenuService",function(a,b,c){a.menuItems=c.InitMenuItems(),c.IsAuthenticated(),a.currMenuItem=c.CurrentMenuItem(),a.toggle=function(a){c.Toggle(a)},a.showMenu=function(){return c.ShowMenu()},a.logout=function(){c.Logout()}}]),angular.module("slenderpmApp").controller("RegisterCtrl",["$scope","RegisterService",function(a,b){a.registerUser=function(c,d,e){var f=b.InitRegisterModule(c,d,e);a.result=b.RegisterUser(f)},a.back=function(){b.Back()}}]),angular.module("slenderpmApp").controller("TimesheetCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);