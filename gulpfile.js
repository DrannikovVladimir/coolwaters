/* eslint-disable no-unreachable */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gulpClean = require('gulp-clean');
const gulpBabel = require('gulp-babel');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream()));

gulp.task('script', () => gulp.src('src/assets/**/*.js')
  .pipe(gulpBabel({
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/proposal-class-properties'],
  }))
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream()));

gulp.task('clean', () => {
  return gulp.src('dist', { read: false, force: true, allowEmpty: true })
    .pipe(gulpClean());
});

gulp.task('server', () => browserSync.init({
  server: {
    baseDir: 'src',
  },
  notify: false,
  online: true,
}),

gulp.watch('src/sass/**/*.scss', gulp.series('sass')),
gulp.watch('src/**/*.html').on('change', browserSync.reload),
gulp.watch('src/assets/**/*.js', gulp.series('script')));

gulp.task('start', gulp.series('clean', 'sass', 'script', 'server'));
