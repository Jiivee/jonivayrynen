'use strict';

angular.module('jonivayrynenApp')
  .controller('HeaderController', function ($scope) {
    $scope.navbaron = false;
    $scope.showNavbar = function () {
      $scope.navbaron = !$scope.navbaron;
    };
  });
