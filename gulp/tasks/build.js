var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');

gulp.task('production', function() {
  GLOBAL.environment = 'production';
});

gulp.task('build', ['clean', 'production', 'test', 'default', 'minify', 'manifest'], function() {
  notifier.notify({
    title: 'Production Build',
    message: 'Done',
    sound:    'Pop'
  });
});