(function() {

  'use strict';

  angular
    .module('getStats', [])
    .service('getStats', GetStats);

  function GetStats($http) {
    let vm = this;
    vm.weeklyArtists = () => $http({method: 'GET', url: 'https://beer-proxy.herokuapp.com/music/weekly-artists'});
    vm.weeklyTracks = () => $http({method: 'GET', url: 'https://beer-proxy.herokuapp.com/music/weekly-tracks'});
    vm.recentTracks = () => $http({method: 'GET', url: 'https://beer-proxy.herokuapp.com/music/recent-tracks'});
  }

})();
