import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
	title: string;
	time: string;
}

const ColumnText: React.FC<Props> = ({ title, time }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography component="div" variant="h6">
				{title}
			</Typography>
			<Typography component="div">{time}</Typography>
		</Box>
	);
};

export default ColumnText;
