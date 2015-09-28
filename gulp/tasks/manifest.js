var gulp  = require('gulp');
var config= require('../config').manifest;
var manifest  = require('gulp-manifest');

gulp.task('manifest', ['html'], function() {
  return gulp.src(['build/*']).pipe(manifest(
    config
  )).pipe(gulp.dest('build'));
});
