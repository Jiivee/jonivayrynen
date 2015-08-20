'use strict';

angular.module('jonivayrynenApp.directives', []).directive('imageModal', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      path: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope) {
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template:
      '<div class="ng-modal" ng-show="show">' +
      '  <div class="ng-modal-overlay" ng-click="hideModal()"></div>' +
      '  <div class="ng-modal-dialog">' +
      '  <img class="modal-image" ng-src="{{path}}">' +
      '    <div class="ng-modal-close" ng-click="hideModal()">X</div>' +
      '    <div class="ng-modal-dialog-content ng-transclude"></div>' +
      '  </div>' +
      '</div></div>'
  };
});
