import { randomDarkVal, createCanvas } from '../index.js';

const Stacked = ({id="stacked", height = 500, width = 700}) => {
	const { ctx } = createCanvas({id, height, width, title: "stacked"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 4);
	const hotspotY = Math.floor(height * .25);

	const setRandomLean = (x, y) => {
		const xdiff = Math.abs(hotspotX - x);
		const ydiff = Math.abs(hotspotY - y);

		const howClose = ((255/2) - xdiff) + ((255/2) - ydiff);


		const lean = howClose / 255; 

		if (xdiff < hotspotX) {
			return  Math.random() > (((255/2) - xdiff) / 255) ? 0 : 255
		} else if (ydiff < hotspotY) {
			return Math.random() > (((255/2) - ydiff) / 255) ? 0 : 255;
		} else {
			return 0;
		}

		return Math.random() > lean ? 0 : 255;
	}

	let x = 0;
	let y = 0;

	for (var i = 0; i < area; i++) {
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

export default (Stacked)({});
