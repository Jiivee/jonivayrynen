"use strict";angular.module("jonivayrynenApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularSpinner","jonivayrynenApp.directives","jonivayrynenApp.services"]).config(["$routeProvider",function(a){a.when("/cv",{templateUrl:"views/cv.html",controller:"CvController"}).when("/",{templateUrl:"views/main.html",controller:"MainController"}).when("/:categoryid",{templateUrl:"views/category.html",controller:"CategoryController"}).when("/:categoryid/:artworkid",{templateUrl:"views/artwork.html",controller:"ArtworkController"}).otherwise({redirectTo:"/"})}]),angular.module("jonivayrynenApp").config(["$compileProvider",function(a){a.debugInfoEnabled(!1)}]),angular.module("jonivayrynenApp").controller("HeaderController",["$scope","$location",function(a,b){a.navbaron=!1,a.showNavbar=function(){a.navbaron=!a.navbaron},a.hideNavbar=function(c){a.navbaron=!1,b.path(c)}}]),angular.module("jonivayrynenApp").controller("MainController",["$scope","$http","$document",function(a,b,c){var d=angular.element(c[0].body);d.removeClass("stop-scroll"),b.get("artwork/artwork.json",{headers:{"Cache-Control":"no-cache"}}).success(function(b){a.categories=b})}]),angular.module("jonivayrynenApp").controller("CategoryController",["$scope","$http","$routeParams","$document","getIndex",function(a,b,c,d,e){var f=angular.element(d[0].body);f.removeClass("stop-scroll"),document.ontouchstart=function(){return!0},a.categoryid=c.categoryid,b.get("artwork/artwork.json",{headers:{"Cache-Control":"no-cache"}}).success(function(b){var c=e(b,a.categoryid);a.category=b[c],a.artworks=a.category.artworks}),a.skipConstructionPhase=function(a){return"rahasailiovaiheet"===a.id?!1:!0}}]),angular.module("jonivayrynenApp").controller("ArtworkController",["$scope","$http","$routeParams","$document","usSpinnerService","$location","getIndex",function(a,b,c,d,e,f,g){var h=angular.element(d[0].body);h.removeClass("stop-scroll"),document.ontouchstart=function(){return!0},a.artworkid=c.artworkid,a.categoryid=c.categoryid,b.get("artwork/artwork.json").success(function(b){var c=g(b,a.categoryid);a.category=b[c];var d=g(a.category.artworks,a.artworkid);a.artwork=a.category.artworks[d]}),a.currentPath=f.path(),a.getInfoName=function(a){return"year"===a?"Vuosi:":"size"===a?"Koko:":"materials"===a?"Materiaalit:":"technologies"===a?"Tekniikat:":void 0},a.dontShowThis=function(b){return b.id===a.artworkid||"rahasailiovaiheet"===b.id?!1:!0},a.imgData="",a.modalShown=!1,a.toggleModal=function(b){e.spin("spinner-1"),h.addClass("stop-scroll"),document.ontouchstart=function(a){a.preventDefault()},a.modalShown=!a.modalShown,a.imgData=b,a.allImages=a.artwork.images}}]),angular.module("jonivayrynenApp").controller("CvController",["$scope","$http","$document",function(a,b,c){var d=angular.element(c[0].body);d.removeClass("stop-scroll"),b.get("artwork/artwork.json",{headers:{"Cache-Control":"no-cache"}}).success(function(b){a.artworks=b})}]),angular.module("jonivayrynenApp.directives",[]).directive("imageModal",["$document","usSpinnerService",function(a,b){return{restrict:"E",scope:{show:"=",imagedata:"=",allimages:"="},replace:!0,transclude:!0,link:function(c){c.hideModal=function(){var d=angular.element(a[0].body);d.removeClass("stop-scroll"),document.ontouchstart=function(){return!0},c.show=!1,b.stop("spinner-1")},c.nextImage=function(){var a=c.allimages.indexOf(c.imagedata),d=c.allimages.length;d>1&&(b.spin("spinner-1"),d-1>a?c.imagedata=c.allimages[a+1]:c.imagedata=c.allimages[0])},c.prevImage=function(){var a=c.allimages.indexOf(c.imagedata),d=c.allimages.length;d>1&&(b.spin("spinner-1"),0!==a?c.imagedata=c.allimages[a-1]:c.imagedata=c.allimages[d-1])}},template:'<div class="modal" ng-show="show">  <div class="modal-overlay" ng-click="hideModal()"></div>  <span us-spinner spinner-key="spinner-1"></span>  <div class="modal-close" ng-click="hideModal()"></div>  <div class="modal-dialog">    <img class="modal-image" imageonload ng-src="{{imagedata.large}}">  </div>  <div class="modal-caption-bar">    <div class="modal-prev modal-move" ng-click="prevImage()">← Edellinen</div>    <div class="modal-next modal-move" ng-click="nextImage()">Seuraava →</div>    <div class="modal-caption">{{imagedata.caption}}</div>  </div></div>'}}]).directive("imageonload",["usSpinnerService",function(a){return{restrict:"A",link:function(b,c){c.bind("load",function(){a.stop("spinner-1")})}}}]),angular.module("jonivayrynenApp.services",[]).factory("getIndex",function(){return function(a,b){for(var c=0;c<a.length;c++)if(a[c].id===b)return c;return null}});