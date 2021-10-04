const gulp = require ('gulp');

gulp.task('build',function(cb){
    console.log('construyendo el sitio');
    setTimeout(cb,1200);

});

gulp.task('serve',function(cb){
    gulp.src('W')
        .pipe(server({
            livereload:true,
            open:true
        }))
})