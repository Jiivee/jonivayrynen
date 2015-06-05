'use strict';

/**
 * @ngdoc overview
 * @name jonivayrynenApp
 * @description
 * # jonivayrynenApp
 *
 * Main module of the application.
 */
angular
  .module('jonivayrynenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:categoryname', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/:categoryname/:artworkname', {
        templateUrl: 'views/artwork.html',
        controller: 'ArtworkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
