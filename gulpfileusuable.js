
"use strict";


//  Load Node- Modules / Plugins
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const imagemin = require("gulp-imagemin");
const plumber = require('gulp-plumber');
const beeper = require('beeper');
const rename = require("gulp-rename");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");


// Error Handler
function onError(err) {
    beeper();
    console.log('Name:', err.name);
    console.log('Reason:', err.reason);
    console.log('File:', err.file);
    console.log('Line:', err.line);
    console.log('Column:', err.column);
}


// custom Sass file : style.scss -> style.css
 function custom_css () {
         return gulp
        .src('src/scss/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass({ outputStyle: "expanded" }))        
        .pipe(gulp.dest('dist/css'))
        .pipe(browsersync.stream());       
        
};

// Optimize Images
function imageTask() {
        return gulp
        .src('src/img/*')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browsersync.stream());

};



// Watch Task
function watchTask () {
       
        gulp.watch("src/scss/*.scss", gulp.series(custom_css));
        gulp.watch("src/img/*", gulp.series(imageTask));
        
    
 };



// Execute build tasks to initiate project
const build = gulp.series(custom_css, imageTask);


// Continuously check for updates 
const watch = gulp.series(watchTask);



// gulp terminal commands to build the project 
exports.build = build; // gulp build -> terminal command

// To monitor progress as we code 
exports.default = watch; // gulp -> terminal command 



// PRODUCTION ENV -  MINIFY CSS

function prod_css() {
    return gulp
        .src('src/scss/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: ".min" }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest('dist/css'))
        .pipe(browsersync.stream());

};

const prod = gulp.series(prod_css);

exports.prod = prod; // gulp prod

// REMEMEBER TO LINK  -> style.min.css

// REMEMBER  - Move files  /jquery/pooper.js/boostrap.min.js/tether /bootstrap.min.css  manually
// use live server in vs code as reloader