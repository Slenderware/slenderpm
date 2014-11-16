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

      MenuService.Toggle('Project Comments');

      $scope.addComment = function (comment) {
          var comment = ProjectCommentService.InitProjectComment($scope.user.id, $scope.currProject.id, comment);              
          ProjectCommentService.AddComment(comment, $scope.RESTURI).then(function (result) {
              $scope.comment = undefined;           
              $scope.getComments();
          });
      };

      $scope.getComments = function () {
          ProjectCommentService.GetComments($scope.currProject.id, $scope.RESTURI).then(function (result) {
              $scope.comments = angular.fromJson(result);            
          });
      };

      $scope.$on('current-project-init', function (event, args) {
          $scope.getComments(); 
      });
  });
