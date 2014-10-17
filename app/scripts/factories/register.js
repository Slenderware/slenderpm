'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')

//Factory for RegisterModule
  .factory('RegisterModule', function () {
  		
  		 var RegisterModule = function(name, surname, email){
  			this.name = name;
  			this.surname = surname;
  			this.email = email;
  		};

  		return RegisterModule;
  });
