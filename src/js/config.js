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
    .directive('time', ['$timeout','$filter',
      function($timeout, $filter) {

        return function(scope, element, attrs) {
          let time = parseInt(attrs.time);
          let intervalLength = 1000 * 20; // 20 seconds
          let filter = $filter('momentJS');
          let timeoutId;

          function updateTime() {
            element.text(filter(time));
          }

          function updateLater() {
            timeoutId = $timeout(function() {
              updateTime();
              updateLater();
            }, intervalLength);
          }

          element.bind('$destroy', function() {
            $timeout.cancel(timeoutId);
          });

          updateTime();
          updateLater();
        };
      }
    ])
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
