const {gulp, src, dest, watch, series, parallel, task} = require('gulp');
const requireDir = require('require-dir');
const tasksDirectory = requireDir('./tasks');


exports.libs_css = tasksDirectory.libs_css;
exports.svg_css = tasksDirectory.svg_css;
exports.dev_css = tasksDirectory.dev_css;
exports.prod_css = tasksDirectory.prod_css;

exports.libs_js = tasksDirectory.libs_js;
exports.dev_js = tasksDirectory.dev_js;
exports.prod_js = tasksDirectory.prod_js;

exports.rastr = tasksDirectory.rastr;
exports.webp = tasksDirectory.webp;

exports.html = tasksDirectory.html;
exports.browsersync = tasksDirectory.browsersync;

exports.ttf = tasksDirectory.ttf;
exports.ttf2 = tasksDirectory.ttf2;
exports.fonts = tasksDirectory.fonts;

exports.clean = tasksDirectory.clean;

exports.deploy = tasksDirectory.deploy;

exports.default = parallel(
  exports.libs_css,
  exports.svg_css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.dev_css,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  exports.html,
  exports.browsersync
);

exports.build = parallel(
  exports.clean,
  exports.libs_css,
  exports.svg_css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.prod_css,
  exports.libs_js,
  exports.prod_js,
  exports.rastr,
  exports.webp,
  exports.html
)
