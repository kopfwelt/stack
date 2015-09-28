var gulp          = require('gulp')
var plumber       = require('gulp-plumber');
  // karma       = require('gulp-karma')
  // browserify  = require('browserify')
  // glob        = require('glob'),
var coffeelint    = require('gulp-coffeelint');
var config        = require('../config').tests;
var handleErrors  = require('../util/handleErrors');

// gulp.task('test', ['clean'],function() {
//   // Bundle a test JS bundle and put it on our project JS root path.
//   var testFiles = glob.sync('./tests/**/*.js');  // Bundle all our tests.
//   return browserify(testFiles).bundle({debug: true})
//     .pipe(source('tests.js'))  // The bundle name.
//     .pipe(gulp.dest('./build/test/'));  // The JS root path.
// });


// gulp.task('test', ['lint', 'scripts'], function() {
gulp.task('test', ['lint'], function() {
  // console.log(config.src);
  // // Be sure to return the stream
  // return gulp.src(config.src)
  //   .pipe(karma({
  //     configFile: config.karma,
  //     action: 'run'
  //   }))
  //   .on('error', function(err) {
  //     // Make sure failed tests cause gulp to exit non-zero
  //     // throw err;
  //   });
});

// gulp.task('test.watch', ['scripts'], function() {
//   gulp.watch(['./src/javascript/*', './tests/*'], ['scripts']);
//   gulp.src(config.src)
//   .pipe(karma({
//     configFile: config.karma,
//     action: 'watch'
//   }));
// });

gulp.task('lint', function () {
  gulp.src(config.src)
    .pipe(plumber({errorHandler: handleErrors}))
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
});
