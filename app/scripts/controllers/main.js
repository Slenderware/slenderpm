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

    $scope.userState = [
      {name:'Unsecure', active: true},
      {name:'SecureProj', active: false},
      {name:'SecureTask', active: false}
    ];

    $scope.currMenuItem = $scope.menuItems[0];
    $scope.currUserState = $scope.userState[0];

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

    $scope.changeUserState = function(value) {     
        for(var i = 0 ; i < $scope.userState.length; i++){
            if(i===value)
            {
              $scope.userState[i].active = true;
              $scope.currUserState = $scope.userState[i];
            }
            else
            {
              $scope.userState[i].active = false;
            }
        }    
    };

  });
