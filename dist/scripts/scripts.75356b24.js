"use strict";angular.module("jonivayrynenApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:categoryname",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).when("/:categoryname/:artworkname",{templateUrl:"views/artwork.html",controller:"ArtworkCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("jonivayrynenApp").controller("MainCtrl",["$scope",function(a){a.items={}}]),angular.module("jonivayrynenApp").controller("CategoryCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("jonivayrynenApp").controller("ArtworkCtrl",["$scope","$http","$routeParams",function(a,b,c){var d=c.artworkname,e="artwork/"+d+".json";b.get(e).success(function(b){a.artwork=b})}]);