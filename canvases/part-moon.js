import { randomRgbaVal, randomMedVal, createCanvas } from '../index';

const partMoon = ({id="part-moon", height = 500, width = 700}) => {
	const canvas = document.getElementById('canvas');
	const { ctx } = createCanvas({id, height, width});

	const area = height * width;

	ctx.canvas.width  = width;
  ctx.canvas.height = height;

  const quadrants = {
  	1: width / 2 * height / 2,
  	2: width * height / 2,
  	3: width / 2 * height,
  	4: area,
  };

	let x = 0;
	let y = 0;

	for (var i = 0; i < area; i++) {
		if (y >= width) {
			x++
			y = 0;
		}

		const plot = x * y;
		
		let val = randomRgbaVal();

		if (plot < quadrants[1]) {
			val = randomMedVal();
		} 

		const imageData = new ImageData(new Uint8ClampedArray([val, val, val, randomRgbaVal()]), 1, 1);

		ctx.putImageData(imageData, y, x);
		y++;
	};
};

export default (partMoon)({});

