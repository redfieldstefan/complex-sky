import { randomRgbaVal, createCanvas } from '../index.js';

const Streak = ({id="streak", height = 500, width = 700}) => {
	const { ctx } = createCanvas({ id, height, width, title: "Streak" });

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

	const hotspotX = 240;
	const hotspotY = 873;
	const hotSpot = hotspotY * hotspotX;

	for (var i = 0; i < area; i++) {
		if (y >= width) {
			x++
			y = 0;
		}

		const plot = x * y;	
		const diff = Math.abs(plot - hotSpot);

		const imageData = new ImageData(new Uint8ClampedArray([randomRgbaVal(), randomRgbaVal(), randomRgbaVal(), Math.floor(Math.random() * diff)]), 1, 1);

		ctx.putImageData(imageData, y, x);
		y++;
	};
};

export default (Streak)({});
