'use strict';

angular.module('jonivayrynenApp')
  .controller('CvCtrl', function ($scope, $http) {
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
    });

  });
