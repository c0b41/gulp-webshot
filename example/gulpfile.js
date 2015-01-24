var
  gulp = require('gulp'),
  webshot=require('../index.js');

gulp.task('webshot', function() {
  return gulp.src('./Theme/**/**.html')
        .pipe(webshot({ dest:'build/',root:'Theme'}));
})



gulp.task('default', ['webshot']);

