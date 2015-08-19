var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');

gulp.task( 'less', function () {
	return gulp.src('./src/styles/**/*.less')
		.pipe(less())
		.pipe(concatCss("bundle.css"))
		.pipe(gulp.dest('./static/css'));
} );
