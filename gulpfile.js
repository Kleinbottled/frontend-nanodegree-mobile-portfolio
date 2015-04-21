var gulp = require('gulp')
	uglify = require('gulp-uglify');

gulp.task('main', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js/'))
});

gulp.task('pizza', function() {
	gulp.src('views/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('views/js'))
});

gulp.task('default', ['pizza', 'main']);
