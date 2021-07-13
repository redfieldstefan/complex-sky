import { randomDarkVal, createCanvas } from '../index';

const Hotspot = ({id="hotspot", height = 500, width = 700}) => {
	const { ctx, removePlaceholder } = createCanvas({id, height, width});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 2.35);
	const hotspotY = Math.floor(height / 3);

	const setRandomLean = (x, y) => {

		const xdiff = 255 - Math.min(Math.abs(hotspotX - x), 255);
		const ydiff = 255 - Math.min(Math.abs(hotspotY - y), 255);

		const randomX = Math.floor(Math.random() * xdiff);
		const randomY = Math.floor(Math.random() * ydiff);

		// if (xdiff * ydiff < 10000) {
		// 	return Math.random() < .6 ? randomY : randomX
		// }

		return (y === hotspotY || x === hotspotX) ? 0 : Math.random() < .3 ? randomY : randomX;

	}

	let x = 0;
	let y = 0;

	for (var i = 0; i < area; i++) {
		if (x >= width) {
			y++
			x = 0;
		}

		const imageData = new ImageData(new Uint8ClampedArray([setRandomLean(x, y), setRandomLean(x, y), setRandomLean(x, y), randomDarkVal(x, y)]), 1, 1);

		ctx.putImageData(imageData, x, y);
		x++;
	};

	return;
};

export default (Hotspot)({});
