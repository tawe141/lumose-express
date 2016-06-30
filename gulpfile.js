var gulp = require('gulp');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function() {
    return gulp.src('./components/src/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./components/dist/'));
});

gulp.task('bundle', function() {
    var b = browserify({
        entries: './components/src/index.js',
        debug: true,
        transform: [babelify]
    });

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./components/dist'));
});

gulp.watch('./components/src/**/*.jsx', ['default'])
    .on('change', function(event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
