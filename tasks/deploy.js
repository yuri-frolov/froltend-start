const {
	src
} = require('gulp');
const ftp = require('vinyl-ftp');
const ftpSettings = require('../tasks/ftp_settings');
const c = require('ansi-colors');
const connect = ftp.create(ftpSettings);

module.exports = function deploy() {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer('public_html/'))
		.pipe(connect.dest('public_html/'))
		.on('end', () => console.log(`Finished deploing ./build to https://${c.blueBright(ftpSettings.host)}`))
}
