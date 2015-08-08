'use strict';

angular.module('jonivayrynenApp')
  .controller('CategoryCtrl', function ($scope, $http, $routeParams) {
    $scope.categoryname = $routeParams.categoryname;
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
      $scope.category = data[$scope.categoryname];
    });
  });
