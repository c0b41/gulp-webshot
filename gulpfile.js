var
  gulp = require('gulp'),
  connect = require('gulp-connect');
  webshot=require('./index.js'),
  mocha = require('gulp-mocha');


gulp.task('connect', function(){
    connect.server({
    root: ['Theme'],
    port: 1337
  })
});


gulp.task('webshot', function() {
  return gulp.src('./Theme/*.html')
        .pipe(webshot({ dest:'build/',p:1337}));
})



gulp.task('default', ['connect', 'webshot']);

