const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');

module.exports = function dev_js() {
  return src(['src/js/**/*.js', 'src/js/main.js'])
    .pipe(uglify())
    .pipe(webpack({
      entry: {
        app: './src/js/main.js',
      },
      output: {
        filename: 'webpack.bundle.js',
      },
    }))
    .pipe(dest('./dist/js/'))
}
