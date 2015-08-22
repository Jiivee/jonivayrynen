'use strict';

angular.module('jonivayrynenApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$scope.categoryname = $routeParams.categoryname;
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
      //$scope.category = data[$scope.categoryname];
    });

  });
