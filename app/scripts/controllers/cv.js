'use strict';

angular.module('jonivayrynenApp')
  .controller('CvController', function ($scope, $http) {
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
    });

  });
