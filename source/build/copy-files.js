var copy = require('copy');

const distPath = "./dist/**"
const mainPath = "./../"



module.exports = {
	copy: function () {
		copy(distPath, mainPath, function(err) {
			console.log('All files copied in root.\n');
		});
	}
}