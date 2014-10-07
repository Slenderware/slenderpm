'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.menuItems = [
      {name:'Dashboard', icon:'desktop', selected: true},
      {name:'Project', icon:'gear', selected: false},
      {name:'Tasks', icon:'tasks', selected: false},
      {name:'Messaging', icon:'comments-o', selected: false},
      {name:'Timeline', icon:'line-chart', selected: false}
    ];

    $scope.user = { username: 'Jannik Richter' };

    $scope.toggle = function(name) {    	
    
	    for(var i = 0 ; i < $scope.menuItems.length; i++){
	    	if(name !== $scope.menuItems[i].name){

	    		$scope.menuItems[i].selected = false;
	    	}
	    	else{
				$scope.menuItems[i].selected = true;
			}			
		}
  	};

  });
