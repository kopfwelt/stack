var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var ignore        = require('gulp-ignore');
var rimraf        = require('gulp-rimraf');
var handleErrors  = require('../util/handleErrors');

gulp.task('clean', function(cb) {
  return gulp.src('build', { read: false }) // much faster
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(rimraf({
      force: true
    }));
});