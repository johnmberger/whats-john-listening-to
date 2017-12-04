// sample angular code

(function() {

  'use strict';

  angular
    .module('music', [
      'ngRoute',
      'ui.materialize',
      'music.config',
      'music.components.stats',
      'getStats'
    ]);

})();
