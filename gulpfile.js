/*******************************
            Set-up
*******************************/

var
  gulp         = require('gulp-help')(require('gulp')),

  // read user config to know what task to load
  config       = require('./tasks/config/user'),

  // watch for file changes and build
  watch        = require('./tasks/watch'),

  // build all files
  build        = require('./tasks/build'),
  buildJS      = require('./tasks/build/javascript'),
  buildCSS     = require('./tasks/build/css'),
  buildAssets  = require('./tasks/build/assets'),

  // utility tasks
  clean        = require('./tasks/clean'),
  version      = require('./tasks/version'),

  // install tasks
  install      = require('./tasks/install'),
  checkInstall = require('./tasks/check-install'),

  // docs tasks
  serveDocs    = require('./tasks/docs/serve'),
  buildDocs    = require('./tasks/docs/build'),

  // rtl
  buildRTL     = require('./tasks/rtl/build'),
  watchRTL     = require('./tasks/rtl/watch')
;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
  'check-install'
]);

gulp.task('watch', watch);

gulp.task('build', build);
gulp.task('build-javascript', buildJS);
gulp.task('build-css', buildCSS);
gulp.task('build-assets', buildAssets);

gulp.task('clean', clean);
gulp.task('version', version);

gulp.task('install', install);
gulp.task('check-install', checkInstall);

/*--------------
      Docs
---------------*/

/*
  Lets you serve files to a local documentation instance
  https://github.com/Semantic-Org/Semantic-UI-Docs/
*/

gulp.task('serve-docs', serveDocs);
gulp.task('build-docs', buildDocs);


/*--------------
      RTL
---------------*/

if(config.rtl) {
  gulp.task('watch-rtl', watchRTL);
  gulp.task('build-rtl', buildRTL);
}

/* Admin Tasks */
if(config.admin) {
  require('./tasks/collections/admin')(gulp);
}
