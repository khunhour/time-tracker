import React from "react";

//material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// custom hooks
import { useDate } from "../custom hooks/useDate";

// datefns
import { formatDuration } from "../utils/formatDuration";

interface Props {
	timer?: number;
}
const Timer: React.FC<Props> = ({ timer }) => {
	const date = useDate();
	return (
		<Box mt={3}>
			<Typography variant="h6" textAlign="center">
				{date.toLocaleString()}
			</Typography>
			<Typography variant="h2" textAlign="center" mt={3}>
				{formatDuration(timer)}
			</Typography>
		</Box>
	);
};

export default Timer;
