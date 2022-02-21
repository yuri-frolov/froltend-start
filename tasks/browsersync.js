const {
  watch,
  parallel,
  series
} = require('gulp');
const bs = require('browser-sync').create();

module.exports = function browsersync() {

  bs.init({
    server: {
      baseDir: 'dist/',
      host: '192.168.0.104',
    },
    ui: false, // ОТКЛЮЧАЕТ UI BROWSERSYNC
    browser: 'chrome',
    logPrefix: 'bs_html',
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    notify: false, // всплывающая уведа при открытии страницы
    //open: external, // Что открывать при запуске. local | external | ui | tunnel
    online: true, // true, если нужен tunnel или external
    tunnel: "froltend"
  })
  watch('./src/views/**/*.njk', parallel('html'));
  watch('./src/scss/**/*.scss', parallel('dev_css'));
  watch('src/assets/img/**/*.+(svg|ico)', parallel('rastr'));
  watch('src/assets/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
  watch('src/assets/**/*.svg', series('svg_css', 'dev_css'));
  watch(['./src/js/**/*.js', './src/js/main.js'], parallel('dev_js'));
  watch('./src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));

  watch('./dist/**/*.*').on('change', bs.reload);
}
