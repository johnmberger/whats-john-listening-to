(function() {

  angular
    .module('music.components.stats', [])
    .controller('statsController', statsController);

  statsController.$inject = ['$scope', 'getStats'];

  function statsController($scope, getStats) {
    let vm = this;

    vm.getStats = () => {
      vm.loading = true;
      getStats.weeklyArtists()
      .then((res, err) => {
        if (!err) {
          vm.weeklyArtists = res.data.weeklyartistchart.artist;
          return getStats.weeklyTracks()
        } else {
          vm.error = 'We\'re having trouble connecting to Last.fm. Please try later!';
          vm.loading = false;
        }
      })
      .then((res, err) => {
        if (!err) {
          vm.weeklyTracks = res.data.toptracks.track;
          return getStats.recentTracks()
        } else {
          vm.error = 'We\'re having trouble connecting to Last.fm. Please try later!';
          vm.loading = false;
        }
      })
      .then((res, err) => {
        if (!err) {
          vm.recentTracks = res.data.recenttracks.track;
          vm.loading = false;
        } else {
          vm.error = 'We\'re having trouble connecting to Last.fm. Please try later!';
          vm.loading = false;
        }
      })
      .catch(() => {
        vm.error = 'Last.fm is mad at us right now. Try back in an hour or so!';
      });

    };

    vm.getStats();
  }
})();
