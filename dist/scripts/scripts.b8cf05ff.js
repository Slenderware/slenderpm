angular.module("ngSlenderComments.config",[]).value("ngSlenderComments.config",{debug:!0}),angular.module("ngSlenderComments.directives",[]),angular.module("ngSlenderComments.filters",[]),angular.module("ngSlenderComments.services",[]),angular.module("ngSlenderComments.controllers",[]),angular.module("ngSlenderComments",["ngSlenderComments.config","ngSlenderComments.directives","ngSlenderComments.filters","ngSlenderComments.services","ngSlenderComments.controllers"]),angular.module("ngSlenderComments.directives",[]).directive("taskComments",function(){return{templateUrl:"modules/task/submodules/ngSlenderComments/ngSlenderComments.html"}}),angular.module("ngSlenderList.config",[]).value("ngSlenderList.config",{debug:!0}),angular.module("ngSlenderList.directives",[]),angular.module("ngSlenderList.filters",[]),angular.module("ngSlenderList.services",[]),angular.module("ngSlenderList.controllers",[]),angular.module("ngSlenderList",["ngSlenderList.config","ngSlenderList.directives","ngSlenderList.filters","ngSlenderList.services","ngSlenderList.controllers"]),angular.module("ngSlenderList.directives",[]).directive("taskList",function(){return{templateUrl:"modules/task/submodules/ngSlenderList/ngSlenderList.html",restrict:"E"}}),angular.module("ngSlenderProgress.config",[]).value("ngSlenderProgress.config",{debug:!0}),angular.module("ngSlenderProgress.directives",[]),angular.module("ngSlenderProgress.filters",[]),angular.module("ngSlenderProgress.services",[]),angular.module("ngSlenderProgress.controllers",[]),angular.module("ngSlenderProgress",["ngSlenderProgress.config","ngSlenderProgress.directives","ngSlenderProgress.filters","ngSlenderProgress.services","ngSlenderProgress.controllers"]),angular.module("ngSlenderProgress.directives",[]).directive("taskProgress",function(){return{templateUrl:"modules/task/submodules/ngSlenderProgress/ngSlenderProgress.html",restrict:"E"}}),angular.module("ngSlenderContribGraph.config",[]).value("ngSlenderContribGraph.config",{debug:!0}),angular.module("ngSlenderContribGraph.directives",[]),angular.module("ngSlenderContribGraph.filters",[]),angular.module("ngSlenderContribGraph.services",[]),angular.module("ngSlenderContribGraph",["ngSlenderContribGraph.config","ngSlenderContribGraph.directives","ngSlenderContribGraph.filters","ngSlenderContribGraph.services"]),angular.module("ngSlenderContribGraph.directives",[]).directive("taskContribGraph",function(){return{templateUrl:"modules/task/submodules/ngSlenderContribGraph/ngSlenderContribGraph.html"}}),angular.module("ngSlenderUserList.config",[]).value("ngSlenderUserList.config",{debug:!0}),angular.module("ngSlenderUserList.directives",[]),angular.module("ngSlenderUserList.filters",[]),angular.module("ngSlenderUserList.services",[]),angular.module("ngSlenderUserList.controllers",[]),angular.module("ngSlenderUserList",["ngSlenderUserList.config","ngSlenderUserList.directives","ngSlenderUserList.filters","ngSlenderUserList.services","ngSlenderUserList.controllers"]),angular.module("ngSlenderUserList.directives",[]).directive("taskUserList",function(){return{templateUrl:"modules/task/submodules/ngSlenderUserList/ngSlenderUserList.html"}}),angular.module("slenderpmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.date","angularCharts","slenderpmApp.login","slenderpmApp.register","slenderpmApp.task","slenderpmApp.menu","slenderpmApp.gantt","slenderpmApp.comment","slenderpmApp.resource"]).run(["$rootScope",function(a){a.RESTURI="http://192.168.0.101:8084/slenderware-webservice-rest/webresources/",a.HEADERS={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT","Content-Type":"application/json",Accept:"application/json"}}]).factory("ResultModule",function(){var a=function(a,b){this.success=a,this.message=b};return a}).factory("SessionModule",function(){var a=function(a,b,c){this.username=a,this.page=b,this.token=c};return this.toString=function(){return console.log(this.username+", "+this.page+", "+this.token),this.username+", "+this.page+", "+this.token},a}).config(["$routeProvider",function(a){a.when("/Tasks",{templateUrl:"modules/task/views/tasks.html",controller:"TasksCtrl"}).when("/Gantt",{templateUrl:"modules/gantt/views/gantt.html",controller:"GanttCtrl"}).when("/Project Comments",{templateUrl:"modules/comment/views/comments.html",controller:"CommentsCtrl"}).when("/Project Resources",{templateUrl:"modules/resource/views/resources.html",controller:"ResourcesCtrl"}).when("/Login",{templateUrl:"modules/login/views/login.html",controller:"LoginCtrl"}).when("/Register",{templateUrl:"modules/register/views/register.html",controller:"RegisterCtrl"}).otherwise({redirectTo:"/Login"})}]),angular.module("slenderpmApp.login.config",[]).value("slenderpmApp.login.config",{debug:!0}),angular.module("slenderpmApp.login.directive",[]),angular.module("slenderpmApp.login.factory",[]),angular.module("slenderpmApp.login.service",[]),angular.module("slenderpmApp.login.controller",[]),angular.module("slenderpmApp.login",["slenderpmApp.login.config","slenderpmApp.login.directive","slenderpmApp.login.factory","slenderpmApp.login.service","slenderpmApp.login.controller"]),angular.module("slenderpmApp.login.factory").factory("LoginModule",function(){var a=function(a,b){this.username=a,this.password=b};return a}),angular.module("slenderpmApp.login.service").service("LoginService",["$http","$location","$q","$cookies","ResultModule","LoginModule",function(a,b,c,d,e,f){this.InitLoginModule=function(a,b){return new f(a,b)},this.Authenticate=function(b,d,e){var f=c.defer();return a({method:"POST",url:e.concat("accounts/authenticate"),data:"username="+b+"&password="+d,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise},this.GetUser=function(b){var e=c.defer();return a({method:"POST",url:b.concat("users/getUserBySession"),data:"sessionId="+d.session,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.Register=function(){b.path("Register")},this.IsAuthenticated=function(){void 0!==d.session&&b.path("Tasks")}}]),angular.module("slenderpmApp.login.controller").controller("LoginCtrl",["$rootScope","$scope","$cookies","$location","LoginService",function(a,b,c,d,e){e.IsAuthenticated(),b.register=function(){e.Register()},b.loginLoading=!1,b.authenticate=function(){b.loginLoading=!0,e.Authenticate(b.username,b.password,b.RESTURI).then(function(e){b.loginLoading=!1;try{b.result=angular.fromJson(e),void 0!==b.result&&(b.message=b.result.message,b.result.success&&(d.path("Tasks"),c.session=b.result.sessionId,setTimeout(function(){a.$broadcast("load-Tasks")},100),b.result=void 0))}catch(f){b.message="Whoops, look's like the server didn't like the request. Please try again later"}})},b.validate=function(a){return void 0===a?!0:0===a.length?!1:!0}}]),angular.module("slenderpmApp.register.config",[]).value("slenderpmApp.register.config",{debug:!0}),angular.module("slenderpmApp.register.directive",[]),angular.module("slenderpmApp.register.factory",[]),angular.module("slenderpmApp.register.service",[]),angular.module("slenderpmApp.register.controller",[]),angular.module("slenderpmApp.register",["slenderpmApp.register.config","slenderpmApp.register.directive","slenderpmApp.register.factory","slenderpmApp.register.service","slenderpmApp.register.controller"]),angular.module("slenderpmApp.register.directive",[]).directive("passwordStrength",function(){return{restrict:"A",link:function(a,b,c){a.$watch(c.passwordStrength,function(b){console.log(b),angular.isDefined(b)&&(a.strength=b.length>8?"strong":b.length>3?"medium":"weak")})}}}),angular.module("slenderpmApp.register.factory").factory("RegisterModule",function(){var a=function(a,b,c,d,e,f){this.firstName=a,this.lastName=b,this.username=c,this.password=e,this.email=d,this.roleId=1,this.companyId=f};return a}).factory("RegisterCompanyModule",function(){var a=function(a){this.name=a};return a}),angular.module("slenderpmApp.register.service").service("RegisterService",["$http","$location","$q","$cookies","RegisterModule","RegisterCompanyModule",function(a,b,c,d,e,f){this.InitRegisterModule=function(a,b,c,d,f,g){return new e(a,b,c,d,f,g)},this.InitRegisterCompanyModule=function(a){return new f(a)},this.IsAuthenticated=function(){void 0!==d.session&&b.path("Tasks")},this.RegisterAdminUser=function(b,d){var e=c.defer();return a({method:"POST",url:d.concat("users/addAdminUser"),data:"firstName="+b.firstName+"&lastName="+b.lastName+"&username="+b.username+"&password="+b.password+"&email="+b.email+"&companyId="+b.companyId+"&roleId="+b.roleId,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.RegisterUser=function(b,d){var e=c.defer();return a({method:"POST",url:d.concat("users/addUser"),data:"firstName="+b.firstName+"&lastName="+b.lastName+"&username="+b.username+"&password="+b.password+"&email="+b.email+"&companyId="+b.companyId+"&roleId=2",headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.RegisterCompany=function(b,d){var e=c.defer();return a({method:"POST",url:d.concat("company/addCompany"),data:"name="+b.name,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.Back=function(){b.path("Login")}}]),angular.module("slenderpmApp.register.controller").controller("RegisterCtrl",["$cookies","$location","$rootScope","$scope","RegisterService",function(a,b,c,d,e){d.registerUser=function(a,b,c,f,g,h){var i=d.validateEmail(f);if(!i)return void(d.message="The email address that you've supplied is incorrect. Please correct this to continue");if(g!==h)return void(d.message="The passwords that you have supplied does not match");d.registerLoading=!0;var j=e.InitRegisterModule(a,b,c,f,g,d.user.companyId);e.RegisterUser(j,d.RESTURI).then(function(a){d.registerLoading=!1;try{console.log(a),d.result=angular.fromJson(a),$("#AddUserModal").modal("hide"),d.result=void 0}catch(b){d.message="Whoops, look's like the server didn't like the request. Please try again later"}})},d.validateEmail=function(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)},d.registerLoading=!1,d.registerAdminUser=function(a,c,f,g,h,i){var j=d.validateEmail(g);if(!j)return void(d.message="The email address that you've supplied is incorrect. Please correct this to continue");if(h!==i)return void(d.message="The passwords that you have supplied does not match");d.registerLoading=!0;var k=e.InitRegisterModule(a,c,f,g,h,d.company.id);e.RegisterAdminUser(k,d.RESTURI).then(function(a){d.registerLoading=!1;try{d.result=angular.fromJson(a),b.path("Login")}catch(c){d.message="Whoops, look's like the server didn't like the request. Please try again later"}})},d.registerCompany=function(a){d.registerLoading=!0;var b=e.InitRegisterCompanyModule(a);e.RegisterCompany(b,d.RESTURI).then(function(a){d.registerLoading=!1;try{c.company=angular.fromJson(a),d.stage=d.stage+1}catch(b){d.message="Whoops, look's like the server didn't like the request. Please try again later"}})},d.back=function(){e.Back()},d.stage=0,d.validate=function(a){return void 0===a?!0:0===a.length?!1:!0}}]),angular.module("slenderpmApp.task.config",[]).value("slenderpmApp.task.config",{debug:!0}),angular.module("slenderpmApp.task.directive",[]),angular.module("slenderpmApp.task.factory",[]),angular.module("slenderpmApp.task.service",[]),angular.module("slenderpmApp.task.controller",[]),angular.module("slenderpmApp.task",["ngSlenderUserList","ngSlenderContribGraph","ngSlenderComments","ngSlenderProgress","ngSlenderList","slenderpmApp.task.config","slenderpmApp.task.directive","slenderpmApp.task.factory","slenderpmApp.task.service","slenderpmApp.task.controller"]),angular.module("slenderpmApp.task.factory").factory("Task",function(){var a=function(a,b,c,d,e,f,g){this.taskName=a,this.taskDesc=b,this.plannedStartDate=c,this.plannedEndDate=d,this.projectId=e,this.timeAllocation=f,this.priorityId=g};return a}).factory("TaskProgress",function(){var a=function(a,b,c){this.taskId=a,this.userId=b,this.hours=c};return a}).factory("Comment",function(){var a=function(a,b,c){this.userId=a,this.parentId=b,this.comment=c};return a}).factory("Chart",function(){var a=function(a,b,c){this.x=a,this.y=[],this.y.push(b),this.tooltip=c};return a}),angular.module("slenderpmApp.task.service").service("TasksService",["$http","$q","Task","TaskProgress","Chart",function(a,b,c,d,e){this.InitTask=function(a,b,d,e,f,g,h){return new c(a,b,d,e,f,g,h)},this.GetTasks=function(c,d,e){var f=b.defer();return a({method:"POST",url:e.concat("projects/getProjectTasks"),data:"id="+d,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise},this.GetUserTasks=function(c,d,e){var f=b.defer();return a({method:"POST",url:e.concat("users/getUserProjectTasks"),data:"sessionId="+c+"&projectId="+d,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise},this.AddTask=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/addTask"),data:"taskName="+c.taskName+"&taskDesc="+c.taskDesc+"&plannedStartDate="+c.plannedStartDate+"&plannedEndDate="+c.plannedEndDate+"&projectId="+c.projectId+"&timeAllocation="+c.timeAllocation+"&priorityId="+c.priorityId,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.MarkTaskComplete=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/markAsComplete"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.InitTaskProgress=function(a,b,c){return new d(a,b,c)},this.AddTaskProgress=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/addProgress"),data:"id="+c.taskId+"&userId="+c.userId+"&hours="+c.hours,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.GetTaskProgress=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/getProgressPercentage"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.AddComment=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/addTaskComment"),data:"userId="+c.userId+"&taskId="+c.parentId+"&comment="+c.comment,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.GetComments=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/getTaskComments"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.GetUsers=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("tasks/getTaskUsers"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.AddUser=function(c,d,e){var f=b.defer();return a({method:"POST",url:e.concat("users/assignUserToTask"),data:"userId="+c+"&taskId="+d,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise},this.GetProjectUsers=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("projects/getProjectUsers"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.InitChart=function(a){for(var b=[],c=0;c<a.length;c++){var d=new e(a[c].username,a[c].progressPercentage,a[c].username+": "+a[c].progressHours+" hours");b.push(d)}return b}}]),angular.module("slenderpmApp.task.controller").controller("TasksCtrl",["$cookies","$scope","$rootScope","MenuService","TasksService","ProjectCommentService",function(a,b,c,d,e,f){d.Toggle("Tasks"),b.setCurrentTask=function(a){c.currTask=a,c.$broadcast("current-task-init")},b.taskLoading=!1,b.getTasks=function(){b.taskLoading=!0,void 0!==b.currProject&&(1===b.user.roleId?(console.log(b.currProject.id),e.GetTasks(a.session,b.currProject.id,b.RESTURI).then(function(a){b.taskLoading=!1,console.log("test"),b.tasks=angular.fromJson(a),console.log(b.tasks),b.setCurrentTask(b.tasks[0])})):e.GetUserTasks(a.session,b.currProject.id,b.RESTURI).then(function(a){b.taskLoading=!1,b.tasks=a,b.setCurrentTask(b.tasks[0])}))},b.addTask=function(){var a=e.InitTask(this.taskName,this.taskDesc,this.plannedStartDate,this.plannedEndDate,b.currProject.id,this.timeAllocation,this.priorityId);e.AddTask(a,b.RESTURI).then(function(a){a.success&&($("#addTaskModal").modal("hide"),b.result=void 0,b.getTasks())})},b.markTaskAsComplete=function(a){console.log(a),a===b.currTask.name?e.MarkTaskComplete(b.currTask.id,b.RESTURI).then(function(a){a.success&&($("#markAsCompleteTaskModal").modal("hide"),b.result=void 0,b.getTasks())}):(b.message="This task name does not match the task that must be deleted!",b.success=!1)},b.$on("current-project-init",function(){console.log("current-project-init"),b.getTasks()}),b.addTaskProgress=function(a){var c=e.InitTaskProgress(b.currTask.id,b.user.id,a);e.AddTaskProgress(c,b.RESTURI).then(function(a){a.success&&($("#LogTimeModal").modal("hide"),b.result=void 0,b.getTaskProgress(),b.getUsers(),b.getChartData())})},b.getTaskProgress=function(){void 0!==b.currTask&&e.GetTaskProgress(b.currTask.id,b.RESTURI).then(function(a){b.currTaskProgress=a>100?100:a})},b.$on("current-task-init",function(){b.getTaskProgress()}),b.getComments=function(){void 0!==b.currTask&&e.GetComments(b.currTask.id,b.RESTURI).then(function(a){b.comments=angular.fromJson(a)})},b.addComment=function(a){var c=f.InitProjectComment(b.user.id,b.currTask.id,a);e.AddComment(c,b.RESTURI).then(function(a){console.log(a),b.comment=void 0,b.getComments()})},b.$on("current-task-init",function(){b.getComments()}),b.getUsers=function(){void 0!==b.currTask&&e.GetUsers(b.currTask.id,b.RESTURI).then(function(a){b.users=angular.fromJson(a),c.$broadcast("current-users-init")})},b.getProjectUsers=function(){void 0!==b.currProject&&e.GetProjectUsers(b.currProject.id,b.RESTURI).then(function(a){b.projectusers=angular.fromJson(a)})},b.addUser=function(){void 0!==b.currTask&&void 0!==b.selectedProjectUser&&e.AddUser(b.selectedProjectUser.id,b.currTask.id,b.RESTURI).then(function(a){console.log(a),b.projectusers=void 0,b.selectedProjectUser=void 0,$("#AddUserToProjectModal").modal("hide"),b.getUsers()})},b.userNotAdded=function(a){if(console.log(a),console.log(b.users),void 0!==a&&void 0!==b.users){for(var c=0;c<b.users.length;c++)if(b.users[c].id===a.id)return!1;return!0}return!0},b.setSelectedProjUser=function(a){b.selectedProjectUser=a},b.$on("current-task-init",function(){b.getUsers()}),b.$on("current-users-init",function(){b.getChartData()}),b.getChartData=function(){if(void 0!==b.currTask){b.data1={data:e.InitChart(b.users)},b.chartColors=[];for(var a=0;a<b.users.length;a++)switch(a){case 0:b.chartColors.push("#3498db");break;case 1:b.chartColors.push("#2ecc71");break;case 2:b.chartColors.push("#1abc9c");break;case 3:b.chartColors.push("#e67e22");break;case 4:b.chartColors.push("#e74c3c");break;case 5:b.chartColors.push("#ecf0f1");break;case 6:b.chartColors.push("#95a5a6");break;case 7:b.chartColors.push("#34495e");break;case 8:b.chartColors.push("#c0392b");break;case 9:b.chartColors.push("#d35400");break;case 10:b.chartColors.push("#f39c12");break;case 11:b.chartColors.push("#7f8c8d");break;case 12:b.chartColors.push("#2980b9")}b.chartType="pie",b.config1={labels:!1,title:"User Contribution",legend:{display:!0,position:"left"},colors:b.chartColors,innerRadius:50}}},b.dateOptions={changeYear:!0,changeMonth:!0,yearRange:"0:+5"}}]),angular.module("slenderpmApp.menu.config",[]).value("slenderpmApp.menu.config",{debug:!0}),angular.module("slenderpmApp.menu.directive",[]),angular.module("slenderpmApp.menu.factory",[]),angular.module("slenderpmApp.menu.service",[]),angular.module("slenderpmApp.menu.controller",[]),angular.module("slenderpmApp.menu",["slenderpmApp.menu.config","slenderpmApp.menu.directive","slenderpmApp.menu.factory","slenderpmApp.menu.service","slenderpmApp.menu.controller"]),angular.module("slenderpmApp.menu.directive",[]).directive("slenderTopMenu",function(){return{templateUrl:"modules/menu/views/ngSlenderFixedMenu.html",restrict:"E",link:function(){$("#selector").slenselect()}}}).directive("slenderBreadCrumb",function(){return{templateUrl:"modules/menu/views/ngSlenderBreadCrumb.html",restrict:"E"}}).directive("slenderMenu",function(){return{templateUrl:"modules/menu/views/ngSlenderMenu.html",restrict:"E"}}),angular.module("slenderpmApp.menu.factory").factory("MenuItemModule",function(){var a=function(a,b,c){this.name=a,this.icon=b,this.selected=c};return a}).factory("Project",function(){var a=function(a,b,c,d,e,f){this.projectName=c,this.projectDescription=d,this.startDate=e,this.endDate=f,this.projectCreator=a,this.projectManager=b};return a}),angular.module("slenderpmApp.menu.service").service("MenuService",["$http","$location","$rootScope","$q","$cookies","MenuItemModule",function(a,b,c,d,e,f){this.InitMenuItems=function(){var a=new f("Tasks","tasks",!0),b=new f("Project Comments","comments-o",!1),c=new f("Project Resources","group",!1),d=[];return d.push(a),d.push(b),d.push(c),d},this.GetProjects=function(b){var c=d.defer();return a({method:"POST",url:b.concat("users/getUserProjects"),data:"sessionId="+e.session,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){c.resolve(a)}).error(function(a){c.resolve(a)}),c.promise},this.AddProjects=function(b,e){var f=d.defer();return a({method:"POST",url:e.concat("projects/addProject"),data:"projectName="+b.projectName+"&projectDescription="+b.projectDescription+"&startDate=2014-11-08&endDate=2014-11-09&projectCreator="+c.user.id+"&projectManager="+c.user.id,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise},this.CurrentProject=function(a){c.currentProject=a},this.CurrentMenuItem=function(){for(var a=0;a<c.menuItems.length;a++)if(c.menuItems[a].selected)return c.menuItems[a]},this.ShowMenu=function(){return void 0!==e.session?!0:!1},this.Logout=function(){delete e.session,b.path("Login")},this.Toggle=function(a){for(var d=0;d<c.menuItems.length;d++)a===c.menuItems[d].name?(c.menuItems[d].selected=!0,c.currMenuItem=c.menuItems[d],setTimeout(function(){c.$broadcast("load-"+a)},100),b.path(c.currMenuItem.name)):c.menuItems[d].selected=!1},this.IsAuthenticated=function(){void 0===e.session&&b.path("Login")}}]),angular.module("slenderpmApp.menu.controller").controller("MenuCtrl",["$rootScope","$scope","MenuService","LoginService","Project",function(a,b,c,d,e){a.menuItems=c.InitMenuItems(),b.getUser=function(){void 0===b.user&&d.GetUser(b.RESTURI).then(function(b){a.user=angular.fromJson(b),a.$broadcast("current-user-init")})},c.IsAuthenticated(),b.projectsLoading=!1,b.getProjects=function(){b.projectsLoading=!0,void 0===b.projects?c.GetProjects(b.RESTURI).then(function(a){b.projectsLoading=!1,b.projects=angular.fromJson(a),b.currentProject(b.projects[0])}):b.projectsLoading=!1},b.currentProject=function(b){console.log("project init"),a.currProject=b,a.$broadcast("current-project-init")},b.addProject=function(){b.projectDto=new e(b.user.id,b.user.id,b.projectName,b.projectDescription,b.startDate,b.endDate),c.AddProjects(b.projectDto,b.RESTURI).then(function(a){b.result=angular.fromJson(a),b.result.success&&(setTimeout(function(){$("#AddProjModal").modal("hide"),b.result=void 0},1e3),b.result=void 0,b.user.id=void 0,b.user.id=void 0,b.projectName=void 0,b.projectDescription=void 0,b.startDate=void 0,b.endDate=void 0,b.projects=void 0,b.getProjects())})},b.$on("current-user-init",function(){b.getProjects()}),b.$on("load-Tasks",function(){void 0===b.user?b.getUser():a.$broadcast("current-project-init")}),b.$on("load-Project Resources",function(){void 0===b.user?b.getUser():a.$broadcast("current-project-res")}),b.$on("load-Project Comments",function(){void 0===b.user?b.getUser():a.$broadcast("current-project-comment")}),b.dateOptions={changeYear:!0,changeMonth:!0,yearRange:"0:+5"},a.currMenuItem=c.CurrentMenuItem(),a.toggle=function(a){c.Toggle(a)},a.showMenu=function(){return c.ShowMenu()},a.logout=function(){b.tasks=void 0,b.projects=void 0,a.currTask=void 0,a.currProject=void 0,a.user=void 0,c.Logout()}}]),angular.module("slenderpmApp.gantt.config",[]).value("slenderpmApp.gantt.config",{debug:!0}),angular.module("slenderpmApp.gantt.directive",[]),angular.module("slenderpmApp.gantt.factory",[]),angular.module("slenderpmApp.gantt.service",[]),angular.module("slenderpmApp.gantt.controller",[]),angular.module("slenderpmApp.gantt",["slenderpmApp.gantt.config","slenderpmApp.gantt.directive","slenderpmApp.gantt.factory","slenderpmApp.gantt.service","slenderpmApp.gantt.controller"]),angular.module("slenderpmApp.gantt.factory"),angular.module("slenderpmApp.gantt.service").service("GanttService",function(){this.FetchData=function(){return{}}}),angular.module("slenderpmApp.gantt.controller").directive("dhxGantt",function(){return{restrict:"A",scope:!1,transclude:!0,template:"<div ng-transclude></div>",link:function(a,b,c){a.$watch(c.data,function(){},!0),a.$watch(function(){return b[0].offsetWidth+"."+b[0].offsetHeight},function(){})}}}).controller("GanttCtrl",["$scope","MenuService","GanttService",function(a,b,c){b.Toggle("Gantt"),a.tasks=c.FetchData(1)}]),angular.module("slenderpmApp.comment.config",[]).value("slenderpmApp.comment.config",{debug:!0}),angular.module("slenderpmApp.comment.directive",[]),angular.module("slenderpmApp.comment.factory",[]),angular.module("slenderpmApp.comment.services",[]),angular.module("slenderpmApp.comment.controller",[]),angular.module("slenderpmApp.comment",["slenderpmApp.comment.config","slenderpmApp.comment.directive","slenderpmApp.comment.factory","slenderpmApp.comment.services","slenderpmApp.comment.controller"]),angular.module("slenderpmApp.comment.services").service("ProjectCommentService",["$http","$q","Comment",function(a,b,c){this.InitProjectComment=function(a,b,d){return new c(a,b,d)},this.AddComment=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("projects/addProjectComment"),data:"userId="+c.userId+"&projectId="+c.parentId+"&comment="+c.comment,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.GetComments=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("projects/getProjectComments"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise}}]),angular.module("slenderpmApp.comment.controller").controller("CommentsCtrl",["$scope","MenuService","ProjectCommentService",function(a,b,c){b.Toggle("Project Comments"),a.addComment=function(b){var b=c.InitProjectComment(a.user.id,a.currProject.id,b);c.AddComment(b,a.RESTURI).then(function(){a.comment=void 0,a.getComments()})},a.getComments=function(){c.GetComments(a.currProject.id,a.RESTURI).then(function(b){a.comments=angular.fromJson(b)})},a.$on("current-project-comment",function(){a.getComments()})}]),angular.module("slenderpmApp.resource.config",[]).value("slenderpmApp.resource.config",{debug:!0}),angular.module("slenderpmApp.resource.directive",[]),angular.module("slenderpmApp.resource.factory",[]),angular.module("slenderpmApp.resource.service",[]),angular.module("slenderpmApp.resource.controller",[]),angular.module("slenderpmApp.resource",["slenderpmApp.resource.config","slenderpmApp.resource.directive","slenderpmApp.resource.factory","slenderpmApp.resource.service","slenderpmApp.resource.controller"]),angular.module("slenderpmApp.resource.service").service("ResourceService",["$http","$q",function(a,b){this.GetUsers=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("projects/getProjectUsers"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.GetCompanyUsers=function(c,d){var e=b.defer();return a({method:"POST",url:d.concat("company/getCompanyUsers"),data:"id="+c,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){e.resolve(a)}).error(function(a){e.resolve(a)}),e.promise},this.AddUser=function(c,d,e){var f=b.defer();return a({method:"POST",url:e.concat("users/assignUserToProject"),data:"userId="+c+"&projectId="+d,headers:{"Content-Type":"application/x-www-form-urlencoded;"}}).success(function(a){f.resolve(a)}).error(function(a){f.resolve(a)}),f.promise}}]),angular.module("slenderpmApp.resource.controller").controller("ResourcesCtrl",["$scope","MenuService","ResourceService",function(a,b,c){b.Toggle("Project Resources"),a.getUsers=function(){c.GetUsers(a.currProject.id,a.RESTURI).then(function(b){console.log(b),a.users=angular.fromJson(b)})},a.getProjectUsers=function(){void 0!==a.currProject&&c.GetCompanyUsers(a.user.companyId,a.RESTURI).then(function(b){a.projectusers=angular.fromJson(b)})},a.addUser=function(){void 0!==a.currTask&&void 0!==a.selectedProjectUser&&c.AddUser(a.selectedProjectUser.id,a.currProject.id,a.RESTURI).then(function(b){console.log(b),a.projectusers=void 0,a.selectedProjectUser=void 0,$("#AddUserToProjectModal").modal("hide"),a.getUsers()})},a.userNotAdded=function(b){if(void 0!==b&&void 0!==a.users){for(var c=0;c<a.users.length;c++)if(a.users[c].id===b.id)return!1;return!0}return!0},a.$on("current-project-res",function(){a.getUsers()}),a.setSelectedProjUser=function(b){a.selectedProjectUser=b}}]);