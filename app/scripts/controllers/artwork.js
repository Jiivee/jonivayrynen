'use strict';

angular.module('jonivayrynenApp')
  .controller('ArtworkController', function ($scope, $http, $routeParams, $document, usSpinnerService) {
    var bodyRef = angular.element( $document[0].body );
    bodyRef.removeClass('stop-scroll');
    document.ontouchstart = function(){ return true; };
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
      else if (nameofcategory === 'muut') {
        return 'Muut työt';
      }
      return nameofcategory;
    };

    $scope.getInfoName =function (value) {
      if (value === 'year') {
        return 'Vuosi:';
      }
      else if (value === 'size') {
        return 'Koko:';
      }
      else if (value === 'materials') {
        return 'Materiaalit:';
      }
      else if (value === 'technologies') {
        return 'Tekniikat:';
      }
    }

    $scope.imgData = '';
    $scope.modalShown = false;
    $scope.toggleModal = function(imagedata) {
      usSpinnerService.spin('spinner-1');
      bodyRef.addClass('stop-scroll');
      document.ontouchstart = function(e){ e.preventDefault(); };
      $scope.modalShown = !$scope.modalShown;
      $scope.imgData = imagedata;
      $scope.allImages = $scope.artwork.images;
    };
  });
