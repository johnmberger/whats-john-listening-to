(function() {

  'use strict';

  angular
    .module('music.config', [])
    .config(appConfig)
    .filter('momentJS', function() {
      return function(input) {
        return moment(input).fromNow();
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
