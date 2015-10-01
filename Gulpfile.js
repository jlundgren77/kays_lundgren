
"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');


gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
    	.pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});

//Watch task
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});