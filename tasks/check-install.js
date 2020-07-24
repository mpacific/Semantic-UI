/*******************************
         Check Install
*******************************/

var
  // node dependencies
  gulp         = require('gulp'),
  fs           = require('fs'),
  console      = require('better-console'),
  install      = require('./config/project/install')
;

// export task
module.exports = function() {

  setTimeout(function() {
    if( !install.isSetup() ) {
      console.log('Starting install...');
      return gulp.parallel('install');
    }
    else {
      return gulp.parallel('watch');
    }
  }, 50); // Delay to allow console.clear to remove messages from check event


};
