var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var coffee        = require('gulp-coffee');
var gulpDoxx      = require('gulp-doxx');
var rimraf        = require('gulp-rimraf');
var config        = require('../config').documentation;
var handleErrors  = require('../util/handleErrors');


gulp.task('documentation:clean', function() {
  // var pack = require(config.pack);
  return gulp.src('docs', { read: false })
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(rimraf({
      force: true
    }));
});

gulp.task('documentation:compile', ['documentation:clean'], function() {
  return gulp.src(['src/scripts/**/*.coffee'])
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(coffee({
      bare: true
    }))
    .pipe(gulp.dest('docs/javascript'));
});

gulp.task('documentation', ['documentation:clean', 'documentation:compile'], function() {
  return gulp.src(['docs/javascript/**/*.js'])
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(gulpDoxx({
     title: 'Stack'
    }))
    .pipe(gulp.dest('docs'));
});