'use strict';

angular.module('jonivayrynenApp')
  .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(true);
  }]);
