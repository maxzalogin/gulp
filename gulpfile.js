const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function styles() {
	return src('./app/sass/*.sass')
	.pipe(sass())
	.pipe(concat('main.css'))
	.pipe(dest('./app/css'))
}

function parts () {
	return src(['./app/parts/head.html', 
							'./app/parts/body.html', 	
							'./app/parts/footer.html'])
	.pipe(concat('index.html'))
	.pipe(dest('./app/html'))
}

exports.styles =  styles;
exports.parts = parts;