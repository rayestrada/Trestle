'use strict';

/**
 * MODULES
 */
  // Utilities
const gulp = require('gulp');
const del = require('del');
const gulpif = require('gulp-if');

// Sass Processing
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
const bourbon = require('node-bourbon').includePaths;

// Image Processing
const imagemin = require('gulp-imagemin');

/**
 * CONFIGURATION
 */
const config = {
  production: process.argv.indexOf('--production') > -1,
  browserList: ['last 2 version', '> 1%', 'ie 11'],
  sass_libraries: {
    includePaths: [
      bourbon,
      'node_modules/breakpoint-sass/stylesheets/',
      'node_modules/singularitygs/stylesheets/'
    ]
  },
  src: {
    sass: 'src/sass/**/*.scss',
    images: 'src/images/**/*'
  },
  dest: 'dist'
};

/**
 * TASKS
 */
// Clean output directories
gulp.task('clean', () => del([config.dest]));

// Sass compiler task
gulp.task('sass', () => gulp.src(config.src.sass)
  .pipe(sourcemaps.init())
  .pipe(sass(config.sass_libraries).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
  .pipe(prefix(config.browserList))
  .pipe(sourcemaps.write())
  .pipe(gulpif(config.production, csso({
    restructure: false
  })))
  .pipe(gulp.dest(config.dest + '/css'))
);

// Image minification task
gulp.task('images', () => gulp.src(config.src.images)
  .pipe(imagemin())
  .pipe(gulp.dest(config.dest + '/images'))
);

// Watch task runner
gulp.task('watch', (done) => {
  if (!config.production) {
  gulp.watch(config.src.sass, gulp.series('sass'));
  gulp.watch(config.src.images, gulp.series('images'));
}
done();
});

/**
 * BUILD
 */
const tasks = [
  'sass',
  'images',
  'watch'
];

gulp.task('default', gulp.series('clean', gulp.series(tasks)));

