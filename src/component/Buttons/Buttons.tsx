import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const Buttons = () => {
	const [startWork, setStartWork] = useState(false);

	const handleWorkButton = () => {
		setStartWork(!startWork);
	};
	return (
		<>
			<Box
				mt={9}
				mb={2}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}
			>
				<Button
					variant="contained"
					color="success"
					disabled={startWork}
					onClick={handleWorkButton}
				>
					Start Work
				</Button>
				<Button
					variant="contained"
					color="error"
					disabled={!startWork}
					onClick={handleWorkButton}
				>
					End Work
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}
			>
				<Button variant="contained" color="warning" disabled={false}>
					Start Break
				</Button>
				<Button variant="contained" color="warning" disabled={true}>
					End Break
				</Button>
			</Box>
		</>
	);
};

export default Buttons;
