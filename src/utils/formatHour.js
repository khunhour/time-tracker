import { format } from "date-fns";

export const formatHour = (seconds) => {
	if (seconds === 0) {
		return "--:--";
	}
	return format(seconds, "HH:mm");
};
