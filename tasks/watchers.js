const config = protoss.config.watch;
const chokidar = require('chokidar');

module.exports = function(options) {

  if (!config) return cb(null);

  return function(cb) {

    var queue = config.length;

    var watcherLog = options.logger;

    var runWatcher = function (watch) {

      var run = function () {

        var watcher = chokidar.watch(
          watch.path,
          {
            ignored: watch.ignore,
            ignoreInitial: true,
            cwd: watch.cwd
          });

        watch.on.forEach(function (on) {
          watcher.on(on.event, function (event, path) {

            // todo: two args path on 'all' event, one - on other events
            // https://github.com/paulmillr/chokidar#getting-started
            if (!path) {
              path = event;
              event = on.event;
            }

            watcherLog(event, path);
            protoss.gulp.start(on.task);

          })
        });

        handleQueue();

      };

      var handleQueue = function () {
        if (queue) {

          queue--;

          if (queue === 0) {
            protoss.flags.isWatching = true;
            cb(null); // End task
          }

        }
      };

      return run();

    };

    config.forEach(runWatcher);

  }

};