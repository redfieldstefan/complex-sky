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

export const createCanvas = ({ id, height, width, title }) => {
	const container = document.getElementById("container");
	const label = title && document.createElement("p");
	const placeholder = document.getElementById("placeholder");
	const freshCanvas = document.createElement("canvas");

	freshCanvas.setAttribute('id', id);
	container.style.height = `${height}px`;
	container.style.width = `${width}px`;

	container.appendChild(freshCanvas);

	if (label) {
		label.innerHTML = title.toUpperCase();
		label.style.fontSize = '.8em';
		container.appendChild(label);
	}

	if (placeholder) {
		placeholder.remove();
	}

	const canvas = document.getElementById(id);
	const ctx = canvas.getContext('2d');

	return {
		canvas,
		ctx
	}
}
