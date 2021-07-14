const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');
const canvasTempate = require('./templates/canvas');

const entryFiles = glob.sync('./canvases/*.js').map(file => {
	return {
		file,
		base: file.replace("./canvases/", "").replace(".js", "")
	}
});

const generateCanvasTemplates = () => entryFiles.map(({ base }) => {
	const baseFileName = base;

	return new HtmlWebpackPlugin(canvasTempate(base, entryFiles))
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
  plugins: generateCanvasTemplates(),
}
