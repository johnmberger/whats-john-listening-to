// *** dependencies *** //

const gulp = require('gulp');
const connect = require('gulp-connect');
const runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('connect', () => {
  connect.server({
    root: './src/',
    port: 8888,
    livereload: true
  });
});

// *** defailt task *** //
gulp.task('default', () => {
  runSequence(
    ['connect']
  );
});
