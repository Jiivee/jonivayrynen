'use strict';

angular.module('jonivayrynenApp')
  .controller('CategoryController', function ($scope, $http, $routeParams) {
    $scope.categoryname = $routeParams.categoryname;
    $http.get('artwork/artwork.json', { headers: { 'Cache-Control' : 'no-cache' } } ).success(function(data) {
      $scope.artworks = data;
      $scope.category = data[$scope.categoryname];
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
  });
