import { Typography } from "@mui/material";
import React from "react";
import BasicTable from "./BasicTable";
import Buttons from "./Buttons";

interface Props {
	startWork: boolean;
	startBreak: boolean;
	handleWorkButton: () => void;
	handleBreakButton: () => void;
	data: any;
}

const Dashboard: React.FC<Props> = ({
	startWork,
	startBreak,
	handleWorkButton,
	handleBreakButton,
	data,
}) => {
	const arrayData = [];
	arrayData.push(data);
	return (
		<>
			<Buttons
				startWork={startWork}
				startBreak={startBreak}
				handleWorkButton={handleWorkButton}
				handleBreakButton={handleBreakButton}
			/>
			<Typography variant="h4" my={2} textAlign="center">
				Today's Work
			</Typography>
			<BasicTable data={arrayData} />
		</>
	);
};

export default Dashboard;
