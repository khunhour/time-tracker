import { useEffect, useState } from "react";

export const useDate = () => {
	const [today, setToday] = useState(new Date());

	useEffect(() => {
		// update every minute
		const timer = setInterval(() => {
			setToday(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return today;
};
