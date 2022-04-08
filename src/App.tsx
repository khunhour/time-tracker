import React, { useState } from "react";
import Buttons from "./component/Buttons";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Today from "./component/Today";

const App: React.FC = () => {
	const [startWork, setStartWork] = useState<boolean>(false);
	const [startBreak, setStartBreak] = useState<boolean>(false);

	const handleWorkButton = () => {
		setStartWork(!startWork);
	};

	const handleBreakButton = () => {
		setStartBreak(!startBreak);
	};
	return (
		<div>
			<Navbar />
			<Buttons
				startWork={startWork}
				startBreak={startBreak}
				handleWorkButton={handleWorkButton}
				handleBreakButton={handleBreakButton}
			/>
			{/* <Today /> */}
			<Form
				type={"Sign In"}
				action={() => {
					console.log("login");
				}}
			/>
		</div>
	);
};

export default App;
