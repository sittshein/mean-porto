'use strict';

(function() {

  angular.module('meanFullstackApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          template: '<main></main>'
        });
    });
})();
