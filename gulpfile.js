/* eslint-disable no-unreachable */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gulpClean = require('gulp-clean');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(gulp.dest('src/css'))
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
gulp.watch('src/js/**/*.js').on('change', browserSync.reload));

gulp.task('start', gulp.series('clean', 'sass', 'server'));
