import { format } from "date-fns";

export const formatDate = (seconds) => {
	return format(seconds, "yyyy/MM/dd");
};

alert(formatDate(1649592629035));
