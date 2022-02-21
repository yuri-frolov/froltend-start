const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');

module.exports = function build_css() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(bulk())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
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
    .pipe(gulp.dest('./dist/css'));
}
