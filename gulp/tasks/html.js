var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jade    = require('gulp-jade');
var replace       = require('gulp-replace');
var config  = require('../config').html;

gulp.task('html', ['clean'], function() {
  var stream = gulp.src(config.src)
    // .pipe(plumber({
    //   errorHandler: function (error) {
    //     console.log(error);
    //   }}
    // ))
    .pipe(plumber())
    .pipe(jade({
      pretty: GLOBAL.environment === 'development'
    }));

  if(GLOBAL.environment === 'production') {
    // insert manifest in html tag
    stream.pipe(replace('<html>', '<html manifest="app.manifest">'));
  }
  return stream.pipe(gulp.dest(config.dest))
});