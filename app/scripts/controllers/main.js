'use strict';

angular.module('jonivayrynenApp')
  .controller('MainController', function ($scope, $http, $document) {
    var bodyRef = angular.element( $document[0].body );
    bodyRef.removeClass('stop-scroll');
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

      $scope.allDrawingImages = [];
      var draw = 'akuankkapiirustukset';
      var drawings = data[draw];
      for (var drawing in drawings) {
        var imagesP = drawings[drawing].images;
        for (var j = 0; j < imagesP.length; j++) {
          $scope.allDrawingImages.push(imagesP[j]);
        }
      }

      $scope.allOtherImages = [];
      var other = 'muut';
      var others = data[other];
      for (var o in others) {
        var imagesO = others[o].images;
        for (var k = 0; k < imagesO.length; k++) {
          $scope.allOtherImages.push(imagesO[k]);
        }
      }
    });

  });
