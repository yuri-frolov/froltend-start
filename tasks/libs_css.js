const plugins = [
    //'node_modules/library/library.min.css'
];

const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const maps = require('gulp-sourcemaps');
const c = require('ansi-colors');

module.exports = async function libs_css(done) {
	if (plugins.length > 0) {
		return src(plugins)
			.pipe(maps.init())
			.pipe(sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError))
			.pipe(concat('libs.min.css'))
			.pipe(maps.write())
			.pipe(dest('./build/css/'))
	} else {
		return done(console.log(c.blueBright('No added CSS/SCSS plugins')));
	}
}
