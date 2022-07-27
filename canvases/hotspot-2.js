import { randomDarkVal, createCanvas } from '../index.js';

const Hotspot = ({id="hotspot-2", height = 400, width = 400}) => {
	const { ctx } = createCanvas({id, height, width, title: "hotspot-2"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const hotspotX = Math.floor(width / 2);
	const hotspotY = Math.floor(height / 2);

	const strengthInRender = (x, y) => {

		const xdiff = Math.abs(hotspotX - x);
		const ydiff = Math.abs(hotspotY - y);

		const randomX = Math.floor(Math.random() * xdiff);
		const randomY = Math.floor(Math.random() * ydiff);

		return (y === hotspotY || x === hotspotX) ? 0 : Math.random() < .6 ? randomY : randomX;

	}

	let x = 1;
	let y = 1;

	for (var i = 1; i < area; i++) {
		if (x >= width) {
			y++
			x = 1;
		}

		const imageData = new ImageData(new Uint8ClampedArray([strengthInRender(x, y), strengthInRender(x, y), strengthInRender(x, y), randomDarkVal(x, y)]), 1, 1);

		ctx.putImageData(imageData, x, y);
		x++;
	};

	return;
};

export default (Hotspot)({});
