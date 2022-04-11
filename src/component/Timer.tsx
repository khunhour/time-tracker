import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDate } from "../custom hooks/useDate";
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
			<Typography variant="h1" textAlign="center" mt={3}>
				{formatDuration(timer)}
			</Typography>
		</Box>
	);
};

export default Timer;
