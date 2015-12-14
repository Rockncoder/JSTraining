var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var del = require('del');

gulp.task('scripts', function () {
  return gulp.src([
      'patterns/*.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
  return gulp.src([
      'patterns/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function () {
  return del(['dest']);
});

gulp.task('default', ['clean'], function () {
  gulp.start('scripts');
});