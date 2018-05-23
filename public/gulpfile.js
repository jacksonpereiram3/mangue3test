'use strict';

var csso = require('gulp-csso');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('styles', function(){
  return gulp.src('assets/css/*.css')
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('gulp/css'))
});

gulp.task('scripts', function(){
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('gulp/js'))
});

gulp.task('default', [ 'styles', 'scripts' ]);