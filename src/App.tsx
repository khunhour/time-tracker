import React, { useState } from "react";
import Buttons from "./component/Buttons/Buttons";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
	const [startWork, setStartWork] = useState(false);
	const [startBreak, setStartBreak] = useState(false);
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
				handleBreakButton
			/>
		</div>
	);
};

export default App;
