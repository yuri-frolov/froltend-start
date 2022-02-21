const {
	src
} = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('dist/img/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('dist/img', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['src/assets/img', 'dist/img']))
  }
