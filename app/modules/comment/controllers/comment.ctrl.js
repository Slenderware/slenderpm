'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.comment.controller')
  .controller('CommentsCtrl', function ($scope, MenuService) {

      MenuService.Toggle('Comments');

  });
