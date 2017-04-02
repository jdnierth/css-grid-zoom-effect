module.exports = {
	lessToCss: {
		files: {
			'./source/dist/main.min.css': ['./source/styles/main.less']
		},
		options: {
			compress: true,
			sourceMap: true,
			sourceMapURL: './main.min.css.map'
		}
	}
};