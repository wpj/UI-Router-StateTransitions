var gulp        = require('gulp');
var concat      = require('gulp-concat');
var sass        = require('gulp-ruby-sass');
var prefix      = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('js', function() {
  gulp.src(['src/js/**/*'])
  .pipe(gulp.dest('dist/js/'))
  .pipe(reload({stream: true}));
});

gulp.task('views', function() {
  gulp.src('src/index.html').pipe(gulp.dest('dist/'));
  gulp.src('src/views/**/*').pipe(gulp.dest('dist/views'))
  .pipe(reload({stream: true}));
});

gulp.task('styles', function() {
  gulp.src('src/styles/*.scss')
  .pipe(sass({
    onError: function(e) {console.log(e); },
    sourcemap: true
  }))
  .pipe(gulp.dest('dist/css/'))
  .pipe(reload({stream: true}));
});

gulp.task('img', function() {
  gulp.src('src/img/**.*').pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch(['src/js/**', 'src/js/**/*.js'], ['js']);
  gulp.watch(['src/index.html', 'src/views/**'], ['views']);
  gulp.watch(['src/styles/**'], ['styles']);
});

gulp.task('default', ['browser-sync', 'build', 'watch']);

gulp.task('build', ['js', 'views', 'styles', 'img']);
