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
    'jonivayrynenApp.services',
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
      .when('/:categoryid', {
        templateUrl: 'views/category.html',
        controller: 'CategoryController'
      })
      .when('/:categoryid/:artworkid', {
        templateUrl: 'views/artwork.html',
        controller: 'ArtworkController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
