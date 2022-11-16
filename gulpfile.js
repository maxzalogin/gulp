const gulp = require('gulp'), sass = require('gulp-sass')(require('sass')); 

gulp.task('sass', function(){ // Создаем таск "sass"
	return gulp.src('app/sass/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});