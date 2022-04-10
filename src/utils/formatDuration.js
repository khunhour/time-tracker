export const formatDuration = (duration) => {
	for (const key in duration) {
		if (duration[key].toString().length === 1) {
			let prop = duration[key].toString();
			duration[key] = "0" + prop;
		}
	}
	const { hours, minutes, seconds } = duration;
	return `${hours}:${minutes}:${seconds}`;
};
