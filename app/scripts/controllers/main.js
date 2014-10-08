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
      {name:'Tasks', icon:'tasks', selected: true},
      {name:'Gantt', icon:'area-chart', selected: false},
      {name:'Comments', icon:'comments-o', selected: false},
      {name:'Resources', icon:'group', selected: false}
    ];

    $scope.currMenuItem = $scope.menuItems[0];

    $scope.user = { username: 'Jannik Richter' };

    $scope.toggle = function(name) {    	
    
	    for(var i = 0 ; i < $scope.menuItems.length; i++){
	    	if(name !== $scope.menuItems[i].name){

	    		$scope.menuItems[i].selected = false;
	    	}
	    	else{
				  $scope.menuItems[i].selected = true;
          $scope.currMenuItem = $scope.menuItems[i];          
			}			
		}
  	};

  });
