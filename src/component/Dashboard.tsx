import React from "react";

//material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//components
import BasicTable from "./BasicTable";
import Buttons from "./Buttons";
import Timer from "./Timer";

interface Props {
	startWork: boolean;
	startBreak: boolean;
	handleWorkButton: () => void;
	handleBreakButton: () => void;
	submitToDatabase: () => void;
	data: any;
	timer: number;
}

const Dashboard: React.FC<Props> = ({
	startWork,
	startBreak,
	handleWorkButton,
	handleBreakButton,
	submitToDatabase,
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
			<Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					variant="contained"
					size="large"
					onClick={submitToDatabase}
				>
					Submit Work
				</Button>
			</Box>
		</>
	);
};

export default Dashboard;
