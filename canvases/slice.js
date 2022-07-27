import { randomDarkVal, createCanvas } from '../index.js';

const Slice = ({id="slice", height = 500, width = 700}) => {
	const { ctx } = createCanvas({id, height, width, title: "slice"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 4);
	const hotspotY = Math.floor(height * .25);

	const setRandomLean = (x, y) => {
		const xdiff = Math.abs(hotspotX - x);
		const ydiff = Math.abs(hotspotY - y);

		if (xdiff >  100) {
			return randomDarkVal()
		}

		if (ydiff > 100) {
			return randomDarkVal()
		}

		const howClose = ((255/2) - xdiff) + ((255/2) - ydiff);

		return Math.min(howClose, 255);
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

export default (Slice)({});
