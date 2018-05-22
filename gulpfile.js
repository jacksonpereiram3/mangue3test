
'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('styles', function(){
  return gulp.src('public/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('public/css/gulp-css'))
});

gulp.task('scripts', function(){
  return gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/gulp-js'))
});

gulp.task('default', [ 'styles', 'scripts' ]);
