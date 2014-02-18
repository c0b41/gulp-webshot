var
  gulp = require('gulp'),
  connect = require('gulp-connect');
  webshot=require('./index.js'),
  mocha = require('gulp-mocha');


gulp.task('connect', connect.server({
  root: ['Theme'],
  port: 1337
}));


gulp.task('webshot', function(done) {
  return gulp.src('./Theme/*.html')
        .pipe(webshot({ dest:'build/',
                        p:1337, 
                        screenSize: {
                        width: 1366,
                        height: 768},
                        shotSize: {
                        width: 'window',
                        height: 'all'}
              })
              .on("error", function(err){
                  console.log(err.toString());
                  this.emit('end');
              }));
       
});

gulp.task('mocha', function () {
   return gulp.src('test.js')
         .pipe(mocha({reporter: 'spec'}));
});

gulp.task('shot', ['connect', 'webshot']);

