export const randomRgbaVal = () => Math.floor(Math.random() * 255);

export const randomMutedVal = () => {
	const val = Math.floor(Math.random() * 200);

	return val < 100 ? 100 : val;
};

export const randomMedVal = () => {
	const val = Math.floor(Math.random() * 255);

	return val > 127 ? 127 : val;
}

export const randomDarkVal = () => {
	const val = Math.floor(Math.random() * 255);

	return val > 225 ? 225 : val;
}

export const createCanvas = ({ id, height, width }) => {
	const freshCanvas = document.createElement("canvas", { id });
	freshCanvas.setAttribute('id', id);
	freshCanvas.style.height = `${height}px`;
	freshCanvas.style.width = `${width}px`;
	freshCanvas.style.margin = "auto";

	document.body.appendChild(freshCanvas);

	const canvas = document.getElementById(id);
	const ctx = canvas.getContext('2d');

	return {
		canvas,
		ctx
	}
}
