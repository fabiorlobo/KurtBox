/* * * * * * * * * * * * * *
REQUIRES
* * * * * * * * * * * * * */

// Gulp
gulp = require('gulp'),

// Plumber
plumber = require('gulp-plumber'),

// Watch
watch = require('gulp-watch'),

// Compass
compass = require('gulp-compass'),

// Scripts
uglify = require('gulp-uglify'),

// Image Optimization
imagemin = require('gulp-imagemin'),
guetzli = require('imagemin-gifsicle'),
guetzli = require('imagemin-guetzli'),
optipng = require('imagemin-optipng'),
svgo = require('imagemin-svgo');

/* * * * * * * * * * * * * *
COMPASS
* * * * * * * * * * * * * */

function styles() {
    return gulp.src('./dev_files/assets/styles/**/*.scss')
        .pipe(plumber())
        .pipe(compass({
            style: 'compressed',
            comments: 'false',
            sass: 'dev_files/assets/styles',
            css: 'job_folder/assets/styles'
        }))
        .pipe(gulp.dest('./job_folder/assets/styles'));
};

gulp.task('styles', styles);

/* * * * * * * * * * * * * *
SCRIPTS
* * * * * * * * * * * * * */

function scripts() {
    return gulp.src('./dev_files/assets/scripts/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./job_folder/assets/scripts'));
};

gulp.task('scripts', scripts);

/* * * * * * * * * * * * * *
IMAGE OPTIMIZATION
* * * * * * * * * * * * * */

function gifPngSvg() {
    return gulp.src('./dev_files/optimize_images/**/*.{gif,png,svg}')
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('./job_folder/presentation'));
};

gulp.task('gifPngSvg', gifPngSvg);

function jpg() {
    return gulp.src('./dev_files/optimize_images/**/*.{jpg,jpeg}')
        .pipe(plumber())
        .pipe(imagemin([
            guetzli({
                quality: 88
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('./job_folder/presentation'));
};

gulp.task('jpg', jpg);

gulp.task('images', ['gifPngSvg', 'jpg']);

/* * * * * * * * * * * * * *
TASK DEFAULT

Generate CSS, JS and IMGs
* * * * * * * * * * * * * */

gulp.task('default', ['styles', 'scripts', 'images']);

/* * * * * * * * * * * * * *
WATCH

Watch for SASS and JS
* * * * * * * * * * * * * */

gulp.task('watch', function() {
    watch('./dev_files/assets/styles/**/*', styles);
    watch('./dev_files/assets/scripts/**/*', scripts);
});
