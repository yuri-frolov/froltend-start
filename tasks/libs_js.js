const plugins = [
  //'node_modules/library/library.min.js'
];

/*
  Либы не нужно вебпачить, так как
  их исходники уже сбандлены
*/

const {src,dest} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const c = require('ansi-colors');


module.exports = async function libs_js(done) {
  if (plugins.length > 0)
    return src(plugins)
      .pipe(map.init())
      .pipe(uglify())
      .pipe(concat('libs.min.js'))
      .pipe(map.write())
      .pipe(dest('dist/js/'))
  else {
    return done(console.log(c.yellowBright('No added JS plugins')));
  }

}
