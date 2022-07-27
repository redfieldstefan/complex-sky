import { randomDarkVal, createCanvas } from '../index.js';

const closest = (array, point) => {
	let closestVal;

	array.forEach(val => {
		const diff = Math.abs(point - val);

		if (!closestVal || diff < closestVal) {
			closestVal = diff;
		}

		return;
	});

	return closestVal;
}

const Plural = ({id="plural", height = 400, width = 400}) => {
	const { ctx } = createCanvas({id, height, width, title: "plural"});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

	const generateRandomXPlot = () => Math.floor(Math.random() * width)
	const generateRandomYPlot = () => Math.floor(Math.random() * height)

	const hotSpots = {
		x: Array.from({length: 10}, () => generateRandomXPlot()),
		y: Array.from({length: 10}, () => generateRandomYPlot())
	}

	const strengthInRender = (x, y) => {

		const closestX = closest(hotSpots.x, x);
		const closestY = closest(hotSpots.y, y);

		const howClose = ((255/2) - closestX) + ((255/2) - closestY);
		const lean = howClose / 255; 

		return Math.floor(Math.random() * howClose);
	}

	let x = 1;
	let y = 1;

	for (var i = 1; i < area; i++) {
		if (x >= width) {
			y++
			x = 1;
		}

		const imageData = new ImageData(new Uint8ClampedArray([strengthInRender(x, y), strengthInRender(x, y), strengthInRender(x, y), randomDarkVal()]), 1, 1);

		ctx.putImageData(imageData, x, y);
		x++;
	};

	return;
};

export default (Plural)({});
