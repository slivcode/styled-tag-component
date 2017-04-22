let {resolve} = require('path');
let cfg = {
	entry: {
		'StyledTagComponent': [
			resolve(__dirname, 'lib/index.js'),
		],
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'StyledTagComponent',
	},
	externals: {
		react: 'global React',
	},
};
module.exports = cfg;