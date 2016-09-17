'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task("cancatScripts", () => {
    gulp.src ([
      'js/jquery.js',
      'js/sticky/jquery.sticky.js',
      'js/main.js'
    ])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", () => {
  gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("default", ["cancatScripts"], () => {
    console.log("This is the default task!");
});
