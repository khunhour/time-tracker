import React from "react";
import Buttons from "./Buttons";

interface Props {
	startWork: boolean;
	startBreak: boolean;
	handleWorkButton: () => void;
	handleBreakButton: () => void;
}

const Dashboard: React.FC<Props> = ({
	startWork,
	startBreak,
	handleWorkButton,
	handleBreakButton,
}) => {
	return (
		<>
			<Buttons
				startWork={startWork}
				startBreak={startBreak}
				handleWorkButton={handleWorkButton}
				handleBreakButton={handleBreakButton}
			/>
		</>
	);
};

export default Dashboard;
