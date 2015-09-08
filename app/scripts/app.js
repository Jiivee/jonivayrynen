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
        controller: 'CvController'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/:categoryname', {
        templateUrl: 'views/category.html',
        controller: 'CategoryController'
      })
      .when('/:categoryname/:artworkname', {
        templateUrl: 'views/artwork.html',
        controller: 'ArtworkController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
