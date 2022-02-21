const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const htmlmin = require('gulp-html-minifier-terser');

const combiner = require('stream-combiner2').obj;
const notify = require('gulp-notify');

// ошибки с gulp-notify
module.exports = function html() {
  return combiner(
  gulp.src(['src/views/*.njk', '!src/**/_*.njk']),
  nunjucks.compile(),
  htmlmin({ collapseWhitespace: true }),
  gulp.dest('dist')
  ).on('error', notify.onError({
    title: 'Нунчаки похерились',
    message: 'Error: <%= error.message %>'
  }));
}

//Показывает ошибку. После исправления в ассетах продолжает обновлять страницу
//А после ошибки и исправления в главных .njk - не обновляет ни в ассетах, ни в главных .njk
//module.exports = function html() {
//  return combiner(
//  gulp.src(['src/**/*.njk', '!src/**/_*.njk']),
//  nunjucks.compile(),
//  htmlmin({ collapseWhitespace: true }),
//  gulp.dest('dist')
//  ).on('error', function(err) {
//    console.log(c.bgRed.bold(" Нунчаки похерились "));
//    console.log(err.message);
//    this.end();
//  });
//}
