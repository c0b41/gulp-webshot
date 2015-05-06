var gulp = require('gulp'),
    webshot=require('gulp-webshot');

gulp.task('webshot', function() {
  return gulp.src('./Theme/**/**.html')
        .pipe(webshot({ dest:'build/',root:'Theme'}));
})





gulp.task('shot', ['webshot']);