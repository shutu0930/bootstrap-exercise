const gulp = require('gulp')
const sass = require('gulp-ruby-sass')

gulp.task('sass', function () {
    return sass('./style.scss')//compile scss file
        .on('error', sass.logError)//error info
        .pipe(gulp.dest('./css'))////target path
})

gulp.task('dist',function(){
    gulp.watch('./scss/*.scss',['sass']);// listen file
});