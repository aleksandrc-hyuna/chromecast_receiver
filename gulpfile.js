const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const src = {
  html: './src/index.html',
  css: './src/styles/*.css',
  js: './src/scripts/*.js',
  images: './src/images/*'
}

const dest = {
  html: './public/',
  css: './public/styles',
  js: './public/scripts',
  images: './public/images'
}

gulp.task('html', () => {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./public/'));
});

gulp.task('css', () => {
  return gulp.src('./src/styles/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'))
});

gulp.task('images', () => {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'))
})

gulp.task('default', ['html', 'css', 'js', 'images']);
gulp.task('imagemin', ['images']);