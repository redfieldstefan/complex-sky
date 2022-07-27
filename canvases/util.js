import { randomDarkVal, createCanvas } from '../index.js';

const Util = ({id="util", height = 500, width = 700}) => {
	const { ctx } = createCanvas({id, height, width, title: "util"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 4);
	const hotspotY = Math.floor(height * .25);

	const setRandomLean = (x, y) => {
		const xdiff = Math.abs(255 - (x - hotspotX));
		const ydiff = Math.abs(255 - (y - hotspotY));

		const randomX = Math.floor(Math.random() * xdiff);
		const randomY = Math.floor(Math.random() * ydiff);

		const add = randomY - randomX

		return Math.min(add, 255);
	}

	let x = 0;
	let y = 0;

	for (let i = 0; i < area; i++) {
		if (x >= width) {
			y++
			x = 0;
		}

		const imageData = new ImageData(new Uint8ClampedArray([randomDarkVal(), randomDarkVal(), randomDarkVal(), setRandomLean(x, y)]), 1, 1);

		ctx.putImageData(imageData, x, y);
		x++;
	};

	return;
};


export default (Util)({});
