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
    'ngTouch',
    'angularSpinner',
    'jonivayrynenApp.directives',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
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
