const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');

const entryFiles = glob.sync('./canvases/*.js').map(file => {
	return {
		file,
		base: file.replace("./canvases/", "").replace(".js", "")
	}
});

const navList = entryFiles.map(({base}) => `<a href="${base}.html">${base}</a>`).reduce((accum, val) => accum + val, "");

const generateHtml = () => entryFiles.map(({ base }) => {
	const baseFileName = base;

	return new HtmlWebpackPlugin({
		filename: `${baseFileName}.html`,
		inject: false,
	  templateContent: `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>${baseFileName}</title>
				</head>
				<style>
					* {
							margin: 0;
							padding: 0;
							box-sizing:border-box; 
						 -moz-box-sizing:border-box; 
						 -webkit-box-sizing:border-box; 
						 -ms-box-sizing:border-box;
					}

					html {
						height: 100%;
					}

					body {
						height: 100%;
						display: flex;
					}
				</style>
				<body>
					<nav>
						${navList}
					</nav>
					
				</body>
				<script src="./${baseFileName}.bundle.js"></script>
			</html>
	  `
	})
});

const entries = entryFiles.reduce((accum, { file, base }) => {
	return {
		[base]: file,
		...accum
	}
}, { index: './index.js' })

module.exports = {
	mode: 'development',
	entry: entries,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: generateHtml(),
}
