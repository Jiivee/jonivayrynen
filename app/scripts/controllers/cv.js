'use strict';

angular.module('jonivayrynenApp')
  .controller('CvController', function ($scope, $http, $document) {
    var bodyRef = angular.element( $document[0].body );
    bodyRef.removeClass('stop-scroll');
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
    });

  });
