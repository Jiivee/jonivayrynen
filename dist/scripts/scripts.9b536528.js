"use strict";angular.module("jonivayrynenApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/rakennelmat",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).when("/akuankkapiirrokset",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).when("/muut",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).when("/cv",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).when("/category/item",{templateUrl:"views/item.html",controller:"ItemCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("jonivayrynenApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("jonivayrynenApp").controller("CategoryCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("jonivayrynenApp").controller("ItemCtrl",["$scope",function(a){}]);