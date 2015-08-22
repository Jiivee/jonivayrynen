'use strict';

angular.module('jonivayrynenApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;

      $scope.allBuildingImages = [];
      var build = 'rakennelmat';
      var buildings = data[build];
      for (var building in buildings) {
        var imagesD = buildings[building].images;
        for (var i = 0; i < imagesD.length; i++) {
          $scope.allBuildingImages.push(imagesD[i]);
        }
      }
      console.log($scope.allBuildingImages);

      $scope.allDrawingImages = [];
      var draw = 'akuankkapiirustukset';
      var drawings = data[draw];
      for (var drawing in drawings) {
        var imagesP = drawings[drawing].images;
        for (var j = 0; j < imagesP.length; j++) {
          $scope.allDrawingImages.push(imagesP[j]);
        }
      }
      console.log($scope.allDrawingImages);
    });

  });
