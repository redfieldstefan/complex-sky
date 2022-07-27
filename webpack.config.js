import dotEnv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import glob from 'glob';
import path from 'path';
import canvasTempate from './templates/canvas.js';
import fs from "fs";

dotEnv.config();

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

export default {
	mode: process.env.MODE,
	entry: entries,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('build')
  },
  plugins: generateCanvasTemplates(),
}
