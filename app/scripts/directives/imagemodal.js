'use strict';

angular.module('jonivayrynenApp.directives', [])
  .directive('imageModal', function($document) {
    return {
      restrict: 'E',
      scope: {
        show: '=',
        imagedata: '=',
        allimages: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope) {
        scope.hideModal = function() {
          var bodyRef = angular.element( $document[0].body );
          bodyRef.removeClass('stop-scroll');
          scope.show = false;
        };
        scope.nextImage = function() {
          var imageIndex = scope.allimages.indexOf(scope.imagedata);
          var numberOfImages = scope.allimages.length;
          if (imageIndex < (numberOfImages - 1)) {
            scope.imagedata = scope.allimages[imageIndex + 1];
          }
          else {
            scope.imagedata = scope.allimages[0];
          }
        };
        scope.prevImage = function() {
          var imageIndex = scope.allimages.indexOf(scope.imagedata);
          var numberOfImages = scope.allimages.length;
          if (imageIndex !== 0) {
            scope.imagedata = scope.allimages[imageIndex - 1];
          }
          else {
            scope.imagedata = scope.allimages[numberOfImages - 1];
          }
        };
      },
      template:
        '<div class="modal" ng-show="show">' +
        '  <div class="modal-overlay" ng-click="hideModal()"></div>' +
        '  <div class="modal-dialog">' +
        '    <img class="modal-image" imageonload ng-src="{{imagedata.large}}">' +
        '    <div class="modal-close" ng-click="hideModal()"></div>' +
        '  </div>' +
        '  <div class="modal-caption-bar">' +
        '    <div class="modal-prev modal-move" ng-click="prevImage()">← Edellinen</div>' +
        '    <div class="modal-next modal-move" ng-click="nextImage()">Seuraava →</div>' +
        '    <div class="modal-caption">{{imagedata.caption}}</div>' +
        '  </div>' +
        '</div></div>'
    };
  })
  .directive('imageonload', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        console.log('hello');
        element.bind('load', function() {
          console.log('image is loaded');
        });
      }
    };
  });
