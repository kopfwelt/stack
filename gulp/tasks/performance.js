// variables

var gulp    = require('gulp');
var ngrok     = require('ngrok');
var psi       = require('psi');
var sequence  = require('run-sequence');
var site      = '';
var portVal   = 3020;

gulp.task('ngrok-url', function(cb) {
  return ngrok.connect(3000, function (err, url) {
    // site = url;
    site = 'http://127.0.0.1:3000';
    console.log('serving your tunnel from: ' + site);
    cb();
  });
});

// this is where your server task goes. I'm using browser sync
gulp.task('browser-sync-psi', ['default'], function() {
  // browserSync({
  //   port: portVal,
  //   open: false,
  //   server: {
  //     baseDir: '_site'
  //   }
  // });
});

gulp.task('psi-desktop', function (cb) {
  psi(site, {
    nokey: 'true',
    strategy: 'desktop'
  }, cb);
});

gulp.task('psi-mobile', function (cb) {
  psi(site, {
    nokey: 'true',
    strategy: 'mobile'
  }, cb);
});

// psi sequence with 'browser-sync-psi' instead
gulp.task('psi-seq', function (cb) {
  return sequence(
    'browser-sync-psi',
    'ngrok-url',
    'psi-desktop',
    'psi-mobile',
    cb
  );
});

// psi task runs and exits
gulp.task('psi', ['psi-seq'], function() {
  console.log('Woohoo! Check out your page speed scores!')
  process.exit();
})