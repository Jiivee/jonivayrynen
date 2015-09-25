'use strict';

angular.module('jonivayrynenApp')
  .controller('HeaderController', function ($scope, $location) {
    $scope.navbaron = false;
    $scope.showNavbar = function () {
      $scope.navbaron = !$scope.navbaron;

    };

    $scope.hideNavbar = function (path) {
      $scope.navbaron = false;
      $location.path(path);
    };
  });
