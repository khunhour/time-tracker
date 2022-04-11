import { addSeconds, format } from "date-fns";

export const formatDuration = (seconds) => {
	//offset by 9 hours
	let offsettedTimer = seconds - 32400;
	const date = addSeconds(new Date(0), offsettedTimer);
	return format(date, "HH:mm:ss");
};
