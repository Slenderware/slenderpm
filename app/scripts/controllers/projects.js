'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
