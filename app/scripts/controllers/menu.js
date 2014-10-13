'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('MenuCtrl', function ($scope, $cookies, $location) {
    $scope.menuItems = [
      {name:'Tasks', icon:'tasks', selected: true},
      {name:'Gantt', icon:'area-chart', selected: false},
      {name:'Comments', icon:'comments-o', selected: false},
      {name:'Resources', icon:'group', selected: false}
    ];

    $scope.currMenuItem = $scope.menuItems[0];

     $scope.toggle = function(name){     	
     	for (var i = 0; i < $scope.menuItems.length; i++)
     	{
     		if(name === $scope.menuItems[i].name ){
  				$scope.menuItems[i].selected = true;
  				$scope.currMenuItem = $scope.menuItems[i];          
  				$location.path( $scope.currMenuItem.name );
     		}
     		else{
     			$scope.menuItems[i].selected = false;
     		}
     	}
     };

     $scope.showMenu = function(){
     	if($cookies.session === 'tasks'){
     		return true;
     	}
     	return false;
     };

     $scope.logout = function(){
      delete $cookies.session;
     };

  });
