/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-htmlmin gulp-notify gulp-rename gulp-cache gulp-webserver sc5-styleguide gulp-webstandards del --save-dev
 */

// Load plugins
var pkg = require("./package.json"),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    styleguide = require('sc5-styleguide');
    webserver = require("gulp-webserver"),
    del = require('del'),
    webstandards = require('gulp-webstandards'),
    paths = {
      styleguide : './styleguide'
    };

// HTML minification
gulp.task('htmlmin', function() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(notify({
            message: 'HTML task complete'
        }));
});


// SCSS to CSS and minification
gulp.task('sass', function() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({
            //outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/styles'))
        
        .pipe(notify({
            message: 'Styles task complete'
        }));
});



// Scripts Concatenation and Uglification (Minification)
gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

gulp.task('webstandards', function () {
    return gulp.src(['src/**/*.html', 'src/scripts/**/*.js'])
        .pipe(webstandards());
});

// Images Minification
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({
            message: 'Images task complete'
        }));
});

// Styleguide
gulp.task('styleguide:generate', function() {
  return gulp.src(['./src/styles/**/*.scss'])
    .pipe(styleguide.generate({
        title: 'My Styleguide',
        server: true,
        rootPath: paths.styleguide,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(paths.styleguide));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(['./src/styles/**/*.scss'])
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(paths.styleguide));
});



// Start Webserver
gulp.task('serve', function() {

    gulp.watch('src/**/*.html', ['htmlmin', 'webstandards']);
    gulp.watch('src/styles/**/*.scss', ['sass', 'webstandards']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch(['src/styles/**/*.scss'], ['styleguide']);

    gulp.src('./dist/')
        .pipe(webserver({
            port: 7010,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));

});

// Clean
gulp.task('clean', function() {
    return del(['dist/htmlmin', 'dist/sass', 'dist/scripts', 'dist/images']);
});

// Tasks
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']); // Generating Styleguide
gulp.task("default", ['serve']); // Generating Development and Production codes

