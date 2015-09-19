'use strict';

angular.module('jonivayrynenApp')
  .controller('CategoryController', function ($scope, $http, $routeParams, $document, getIndex) {
    var bodyRef = angular.element( $document[0].body );
    bodyRef.removeClass('stop-scroll');
    document.ontouchstart = function(){ return true; };
    $scope.categoryid = $routeParams.categoryid;

    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      var categoryIndex = getIndex(data, $scope.categoryid);
      $scope.category = data[categoryIndex];
      $scope.artworks = $scope.category.artworks;
    });
  });
