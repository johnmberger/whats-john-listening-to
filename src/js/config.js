(function() {

  'use strict';

  angular
    .module('music.config', [])
    .config(appConfig)
    .filter('dateFormat', function() {
      return function(input) {
        return new Date(input);
      };
    })
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

    function appConfig($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'html/stats.html',
        controller: 'statsController',
        controllerAs: 'statsCtrl'
      })
      .otherwise('/');
    }

})();
