'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
