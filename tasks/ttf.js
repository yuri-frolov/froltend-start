const {
  src,
  dest
} = require('gulp');
const changed = require('gulp-changed'); // установить
const ttf2woff2 = require('gulp-ttftowoff2'); // установить
const ttf2woff = require('gulp-ttf2woff'); // установить

module.exports = function ttf(done) {
  return src('src/assets/fonts/**/*.ttf')
    .pipe(changed('dist/fonts', {
      extension: '.woff2',
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(ttf2woff2())
    .pipe(dest('dist/fonts'))
  done();
}
