var notify = require("gulp-notify");

module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "<%= error.name %>" + ": " + "<%= error.plugin %>",
    subtitle: "<%= error.plugin %>",
    message: "<%= error.message %>",
    sound:    "Beep"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};
