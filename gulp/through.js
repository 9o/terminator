var gulp = require( 'gulp' );

gulp.task( 'through', function () {
	return gulp.src( [ './static/index.html', './static/index.js' ] )
		.pipe( gulp.dest( './static' ) );
} );
