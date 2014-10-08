'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('ResourcesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
