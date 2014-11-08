'use strict';

/**
 * @ngdoc function
 * @name slenderpmApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the slenderpmApp
 */
angular.module('slenderpmApp.comment.controller')
  .controller('CommentsCtrl', function ($scope, MenuService, ProjectCommentService) {

      MenuService.Toggle('Comments');

      $scope.getComments = function () {
          ProjectCommentService.GetComments($scope.currProject.id, $scope.RESTURI).then(function (result) {
              $scope.comments = angular.fromJson(result);
              console.log($scope.comments);
          });
      };

      $scope.$on('load-Comments', function (event, args) {
          console.log('sdf');
          setTimeout(function () { $scope.getComments(); }, 100);
      });
  });
