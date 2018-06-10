var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require("browser-sync");
var reload = browserSync.reload;


//
//Paths
//
var path = {
    build: {
        html:'./',
        css: './css/',
        js: './js/',
        img: './img/'
    },
    src: {
        scss: [
            './src/scss/main.scss'
        ],
        js: [
          './src/js/**'
        ],
        img: './src/img/**'
    },
    watch: {
        scss: './src/scss/**'
    }
};


gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});


gulp.task('watcher',function(){
    gulp.watch(path.watch.scss, ['css_dev']);
    gulp.watch('*.html', browserSync.reload);
});



//
//CSS
//


gulp.task('css_dev', function () {
    return gulp.src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 2 versions']))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream:true}));
});

gulp.task('css_prod', function () {
    return gulp.src(path.src.scss)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream:true}));
});




//
//General Tasks
//

gulp.task('dev',['css_dev']);

gulp.task('prod',['css_prod']);

gulp.task('default',['css_dev', 'watcher', 'browserSync']);
