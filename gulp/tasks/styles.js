var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var ignore        = require('gulp-ignore');
var sass          = require('gulp-ruby-sass');
var autoprefixer  = require('gulp-autoprefixer');
var minify        = require('gulp-minify-css');
var replace       = require('gulp-replace');
var sourcemaps    = require('gulp-sourcemaps');
var rev           = require('gulp-rev');
var config        = require('../config').styles;

gulp.task('styles', function () {
  var stream = gulp.src(config.src)
    .pipe(plumber())
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemapPath: '../styles',
      noCache: false
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulp.dest(config.dest));

  if (GLOBAL.environment == 'production') {
    stream
      .pipe(ignore('**/*.map'))
      .pipe(minify());

      // alternative sourcemaps
      // replace important comment syntax from /*# to /*! to match keepSpecialComments
      // .pipe(replace(/\/\*#/g, '\/\*!')) 
      // .pipe(minify({
      //   keepSpecialComments: config.keepmaps ? '*' : 0
      // }));
  }

  stream
    .pipe(ignore('**/*.map'))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions'],
      cascade: GLOBAL.environment === 'development'
    }))

  if (GLOBAL.environment == 'development') {
    stream.pipe(sourcemaps.write({
      includeContent: false
    }))
  }else {
    stream.pipe(rev());
  }
  
  return stream.pipe(gulp.dest(config.dest));
});
