/*
    Gulp file for Aravolo development
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
var sassdoc = require('sassdoc');
var uglify = require('gulp-uglify');
var optimizejs = require('gulp-optimize-js');
var util = require('gulp-util');
var notifier = require('node-notifier');
var path = require('path');

var localConfig = require('./config/local_config.json');
var gulpModulesConfig = require('./config/gulp_modules_config.json');

gulpModulesConfig.sassdoc.dest = localConfig.BASE_DIR + '/' + localConfig.SCSS_INPUT_DIR + 'docs/';

gulp.task('sass', function () {
    return gulp
        .src(localConfig.SCSS_INPUT_DIR, {cwd: localConfig.BASE_DIR})
        .pipe(sourcemaps.init())
        .pipe(sass(gulpModulesConfig.sass).on('error', function () {
            util.log('Error during SASS build, stream aborted.');
            notifier.notify({
                title: 'Gulp failed',
                message: 'Error during SASS build',
                icon: 'dialog-error'
            });
            gulp.task('run');
        }))
        .on('finish', function () {
            util.log('SCSS to CSS conversion finished');
        })
        .pipe(postcss([autoprefixer(gulpModulesConfig.autoprefixer)]))
        .on('finish', function () {
            util.log('CSS autoprefixer applied');
        })
        .pipe(csso())
        .on('finish', function () {
            util.log('CSS file minified');
        })
        .pipe(sourcemaps.write('.'))
        .on('finish', function () {
            util.log('Sourcemap file written');
        })
        .pipe(gulp.dest(localConfig.CSS_OUTPUT_DIR, {cwd: localConfig.BASE_DIR}))
        .on('finish', function () {
            util.log('CSS file saved');
            notifier.notify({
                title: 'Gulp succeeded',
                message: 'All css files built succesfully',
                icon: 'dialog-ok'
            });
        })
        .resume();
});

gulp.task('js', function () {
    return gulp
        .src(localConfig.JS_INPUT_DIR, {cwd: localConfig.BASE_DIR})
        .pipe(sourcemaps.init())
        .pipe(uglify(gulpModulesConfig.uglify))
        .on('error', function () {
            util.log('Error during Javascript uglification build, stream aborted.');
            notifier.notify({
                title: 'Gulp failed',
                message: 'Error during js uglify',
                icon: 'dialog-error'
            });
            gulp.task('run');
        })
        .on('finish', function () {
            util.log('JS file uglified');
        })
        .pipe(optimizejs())
        .on('finish', function () {
            util.log('JS file optimized');
        })
        .pipe(sourcemaps.write('.'))
        .on('finish', function () {
            util.log('Sourcemap file written');
        })
        .pipe(gulp.dest(localConfig.JS_OUTPUT_DIR, {cwd: localConfig.BASE_DIR}))
        .on('finish', function () {
            util.log('JS file saved');
            notifier.notify({
                title: 'Gulp succeeded',
                message: 'All js files build succesfully',
                icon: 'dialog-ok'
            });
        })
        .resume();
});

gulp.task('watch-sass', function() {
    return gulp
        .watch(localConfig.SCSS_INPUT_DIR, {cwd: localConfig.BASE_DIR}, ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('watch-js', function () {
    return gulp
        .watch(localConfig.JS_INPUT_DIR, {cwd: localConfig.BASE_DIR}, ['js'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('run', ['watch-js', 'watch-sass']);