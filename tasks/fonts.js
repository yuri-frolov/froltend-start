const fs = require('fs');

let srcFonts = 'src/scss/core/_local-fonts.scss';
let appFonts = 'build/fonts/';
module.exports = function fonts(done) {
  fs.writeFile(srcFonts, '', () => {});
  fs.readdir(appFonts, (err, items) => {
    if (items) {
      let c_fontname;
      for (let i = 0; i < items.length; i++) {
        let fontname = items[i].split('.'),
          fontExt;
        fontExt = fontname[1];
        fontname = fontname[0];
        if (c_fontname != fontname) {
          if (fontExt == 'woff' || fontExt == 'woff2') {
            fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 400);\r\n`, () => {});
            console.log(`Added new font: ${fontname}
----------------------------------------------------------------------------------
Please, move mixin call from src/scss/core/_local-fonts.scss to src/scss/core/_typography.scss and then change it!
----------------------------------------------------------------------------------
`);
          }
        }
        c_fontname = fontname;
      }
    }
  })
  done();
}
