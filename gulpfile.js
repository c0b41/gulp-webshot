var
  gulp = require('gulp'),
  connect = require('gulp-connect');
  gulpshot=require('./index.js'),
  mocha = require('gulp-mocha');

gulp.task('connect', connect.server({
  root: ['Theme'],
  port: 1337
}));


gulp.task('webshot', function() {
  return gulp.src('./Theme/*.html')
        .pipe(gulpshot({ dest:'build/',p:1337}));
});

gulp.task('mocha', function () {
    gulp.src('test.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('shot', ['connect', 'webshot']);

