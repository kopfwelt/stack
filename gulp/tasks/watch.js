/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp    = require('gulp');
var config  = require('../config');

gulp.task('watching', function() {
  GLOBAL.isWatching = true;
});

gulp.task('watch', ['psi', 'watching', 'default', 'browserSync'], function() {
  gulp.watch(config.styles.src, ['styles']);
  // gulp.watch(config.images.src, ['images']);
  gulp.watch(config.html.src, ['html']);
});
