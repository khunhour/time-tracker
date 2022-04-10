import { format } from "date-fns";

export const formatDate = (seconds) => {
	if (seconds === 0) {
		return "--/--/--";
	}
	return format(seconds, "yyyy/MM/dd");
};
