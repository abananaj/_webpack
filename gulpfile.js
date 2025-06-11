// gulpfile.js

const gulp = require("gulp");

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('development/styles/index.scss')
    .pipe(sass())
    .pipe(dest('production/styles'))
}

function watchTask() {
  watch(['development/styles/index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)