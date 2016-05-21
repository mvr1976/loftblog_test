var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), //Подключаем Sass пакет
	jade = require('gulp-jade'),//
	browserSync = require('browser-sync');

gulp.task('sass', function(){ // Создаем таск "sass"
	return gulp.src('app/sass/**/*.scss') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('jade', function(){
	return gulp.src('app/jade/**/*.jade')
		.pipe(jade({pretty:true}))
		.pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function(){
	browserSync({ // Выполняем browser Sync
		server: { // Определяем параметры сервера
		baseDir: './' // Директория для сервера - app
				},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['jade','sass', 'browser-sync'], function(){
	gulp.watch('app/sass/**/*.scss', ['sass'], browserSync.reload);
	gulp.watch('app/jade/**/*.jade', ['jade'],browserSync.reload);
	gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

// gulp.task('clear', function () {
//     return cache.clearAll();
// });