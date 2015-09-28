var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var uglify        = require('gulp-uglify');
var handleErrors  = require('../util/handleErrors');

gulp.task('minify', ['scripts'], function() {
  return gulp.src('build/js/*.js')
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(gulp.dest('build/js/'));
});