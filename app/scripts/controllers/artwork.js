'use strict';

angular.module('jonivayrynenApp')
  .controller('ArtworkController', function ($scope, $http, $routeParams, $document, usSpinnerService, $location, getIndex) {
    var bodyRef = angular.element( $document[0].body );
    bodyRef.removeClass('stop-scroll');
    document.ontouchstart = function(){ return true; };
    $scope.artworkid = $routeParams.artworkid;
    $scope.categoryid = $routeParams.categoryid;
    $http.get('artwork/artwork.json').success(function(data) {
      var categoryIndex = getIndex(data, $scope.categoryid);
      $scope.category = data[categoryIndex];
      var artworkIndex = getIndex($scope.category.artworks, $scope.artworkid);
      $scope.artwork = $scope.category.artworks[artworkIndex];
    });
    $scope.currentPath = $location.path();

    $scope.getInfoName = function (value) {
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
    };

    $scope.dontShowThis = function (work) {
      if (work.id === $scope.artworkid || work.id === 'rahasailiovaiheet') {
        return false;
      }
      return true;
    };

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
