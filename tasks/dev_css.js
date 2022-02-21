const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

module.exports = function dev_css() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(maps.init())
    .pipe(bulk())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
    .pipe(concat('style.min.css'))
    .pipe(maps.write())
    .pipe(gulp.dest('./dist/css'));
}
