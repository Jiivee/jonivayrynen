'use strict';

angular.module('jonivayrynenApp')
  .controller('ArtworkCtrl', function ($scope, $http, $routeParams) {
    $scope.artworkname = $routeParams.artworkname;
    $scope.categoryname = $routeParams.categoryname;
    $http.get('artwork/artwork.json').success(function(data) {
      $scope.artworks = data;
      $scope.category = data[$scope.categoryname];
      $scope.artwork = data[$scope.categoryname][$scope.artworkname];
    });

  });
