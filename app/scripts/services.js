'use strict';

angular.module('jonivayrynenApp.services', [])
  .factory('getIndex', function () {
    return function (arraytosearch, valuetosearch) {
      for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i].id === valuetosearch) {
          return i;
        }
      }
      return null;
    };
  });
