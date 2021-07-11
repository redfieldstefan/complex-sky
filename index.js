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
