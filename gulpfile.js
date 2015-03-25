var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');


gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('./css'));
});

gulp.task('default',['sass'], function() {
 gulp.watch('./scss/*.scss', ['sass']);
});
