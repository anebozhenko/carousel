var gulp = require('gulp'),
		sass = require('gulp-sass'),
		livereload = require('gulp-livereload');

// Error handling 
function errorLog(error) {
    console.error(error.message);
}﻿

// Html
gulp.task('html', function() {
	gulp.src('*.html')
		.on('error', errorLog)
		.pipe(livereload());
});

// Css
gulp.task('css', function() {
	gulp.src('sass/*.sass')
		.pipe(sass())
		.on('error', errorLog)
		.pipe(gulp.dest('css/'))
		.pipe(livereload());
});

// Js
gulp.task('js', function() {
	gulp.src('js/*.js')
		.on('error', errorLog)
		.pipe(livereload());
})

// Watch
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('*.html', ['html']);
	gulp.watch('*css/*.css', ['css']);
	gulp.watch('sass/*.sass', ['css']);
	gulp.watch('js/*.js', ['js']);
});

// Default
gulp.task('default', ['watch']);