export const formatDuration = (duration) => {
	// format 1 to 01
	for (const key in duration) {
		if (duration[key].toString().length === 1) {
			let prop = duration[key].toString();
			duration[key] = "0" + prop;
		}
	}
	const { hours, minutes, seconds } = duration;
	return `${hours}:${minutes}:${seconds}`;
};
