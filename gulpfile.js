var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var runSequence = require('run-sequence');

requireDir( './gulp' );

function watchAndRecompile() {
	gulp.watch( [ './static/index.html', './static/index.js' ], [ 'through' ] );
	gulp.watch( './src/styles/**/*', [ 'less' ] );
}

gulp.task( 'watch-all', function () {
	watchAndRecompile();
	watchAndRebuild();
} );

gulp.task( 'watch-compile', watchAndRecompile );

gulp.task( 'default', [ 'watch-compile' ] );
