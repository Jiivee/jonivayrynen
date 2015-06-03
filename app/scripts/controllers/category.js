'use strict';

/**
 * @ngdoc function
 * @name jonivayrynenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jonivayrynenApp
 */
angular.module('jonivayrynenApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
