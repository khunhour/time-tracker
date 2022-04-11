import { Typography } from "@mui/material";
import React from "react";
import BasicTable from "./BasicTable";
import Buttons from "./Buttons";
import Timer from "./Timer";

interface Props {
	startWork: boolean;
	startBreak: boolean;
	handleWorkButton: () => void;
	handleBreakButton: () => void;
	data: any;
	timer: number;
}

const Dashboard: React.FC<Props> = ({
	startWork,
	startBreak,
	handleWorkButton,
	handleBreakButton,
	data,
	timer,
}) => {
	const arrayData = [];
	arrayData.push(data);
	return (
		<>
			<Timer timer={timer} />
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
