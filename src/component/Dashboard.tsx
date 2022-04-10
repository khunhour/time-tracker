import React from "react";
import BasicTable from "./BasicTable";
import Buttons from "./Buttons";
import Today from "./Today";

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
			<BasicTable data={arrayData} />
		</>
	);
};

export default Dashboard;
