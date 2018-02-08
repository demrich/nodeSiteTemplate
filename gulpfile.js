'use strict';

///// Gulp is taking everything that /////  
///// I need to do in this app and /////  
///// converting it into a readable /////  
///// output for the browser /////  

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


///////////////////////
/////// SCSS/CSS //////
///////////////////////


//// Compiling SCSS ////

gulp.task('compile_scss', function(){
    gulp.src('./src/Assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed('./src/Assets/css'))
    .pipe(gulp.dest('./src/Assets/css'));
    
});

// Detecting changes in SCSS

gulp.task('watch_scss', function(){
    gulp.watch('./src/Assets/scss/**/*.scss', ['compile_scss'])
});


// Running tasks
gulp.task('default', ['watch_scss']);