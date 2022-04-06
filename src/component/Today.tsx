import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
import ColumnText from "./ColumnText";

const Today: React.FC = () => {
	const columnConstant = [
		{ title: "Start Work", time: "11" },
		{ title: "Start Break", time: "11" },
		{ title: "End Break", time: "11" },
		{ title: "End Work", time: "11" },
	];
	return (
		<Box mt={8} mx={3}>
			<Card sx={{ display: "flex", justifyContent: "space-evenly" }}>
				{columnConstant.map((ele) => {
					return <ColumnText title={ele.title} time={ele.time} />;
				})}
			</Card>
		</Box>
	);
};

export default Today;
