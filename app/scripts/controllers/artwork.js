'use strict';

angular.module('jonivayrynenApp')
  .controller('ArtworkCtrl', function ($scope, $http, $routeParams, $document, usSpinnerService) {
    $scope.artworkname = $routeParams.artworkname;
    $scope.categoryname = $routeParams.categoryname;
    $http.get('artwork/artwork.json').success(function(data) {
      $scope.artworks = data;
      $scope.category = data[$scope.categoryname];
      $scope.artwork = data[$scope.categoryname][$scope.artworkname];
      $scope.allImages = data[$scope.categoryname][$scope.artworkname].images;
    });

    $scope.getNameOfCategory = function (nameofcategory) {
      if (nameofcategory === 'rakennelmat') {
        return 'Rakennelmat';
      }
      else if (nameofcategory === 'akuankkapiirustukset') {
        return 'Aku Ankka piirustukset';
      }
      return nameofcategory;
    };


  var bodyRef = angular.element( $document[0].body );
  $scope.imgData = '';
  $scope.modalShown = false;
  $scope.toggleModal = function(imagedata) {
    usSpinnerService.spin('spinner-1');
    bodyRef.addClass('stop-scroll');
    $scope.modalShown = !$scope.modalShown;
    $scope.imgData = imagedata;
    $scope.allImages = $scope.artwork.images;
  };
  });
