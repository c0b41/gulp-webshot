var gulp = require('gulp'),
    webshot=require('./index.js');

gulp.task('webshot', function() {
  return gulp.src('./theme/*.html')
        .pipe(webshot({ dest:'build/',root:'theme'}));
});


gulp.task('default', ['webshot']);