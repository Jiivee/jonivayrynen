'use strict';

angular.module('jonivayrynenApp')
  .controller('ArtworkCtrl', function ($scope, $http, $routeParams) {
    var artworkname = $routeParams.artworkname;
    var artworkurl = 'artwork/' + artworkname + '.json';
    $http.get(artworkurl).success(function(data) {
      $scope.artwork = data;
    });


  });
