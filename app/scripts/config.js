'use strict';

angular.module('jonivayrynenApp')
  .config(['$compileProvider', function ($compileProvider) {
    //change to false for "a significant performance boost"
    $compileProvider.debugInfoEnabled(false);
  }]);
