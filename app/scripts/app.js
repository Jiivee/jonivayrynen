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
      .when('/rakennelmat', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/akuankkapiirrokset', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/muut', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/category/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
