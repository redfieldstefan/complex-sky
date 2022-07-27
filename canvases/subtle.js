import { randomDarkVal, createCanvas } from '../index.js';

const Subtle = ({id="subtle", height = 500, width = 700}) => {
	const { ctx } = createCanvas({id, height, width, title: "subtle"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 4);
	const hotspotY = Math.floor(height * .25);

	const setRandomLean = (x, y) => {
		const xdiff = 122 - (x - hotspotX);
		const ydiff = 122 - (y - hotspotY);

		const randomX = Math.floor(Math.random() * xdiff);
		const randomY = Math.floor(Math.random() * ydiff);

		const howClose = randomY + randomX;

		if (howClose > 50) {
			return 0;
		}

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

export default (Subtle)({});
