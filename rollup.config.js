// rollup.config.mjs

import htmlInsert from 'rollup-plugin-html-insert';

export default {
	input: 'main.js',
	// input: 'index.html',
	output: {
		file: 'dist/bundle.js',
		// format: 'es',//默认值
		// format: 'cjs',
	},
	plugins: [
		htmlInsert({
			template: 'index.html',
		}),
	],
};

// rollup.config.cjs
// module.exports = {};
