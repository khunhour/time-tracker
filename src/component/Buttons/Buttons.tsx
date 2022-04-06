import { Box, Button } from "@mui/material";
import React, { useState } from "react";

interface Props {
	startWork: boolean;
	startBreak: boolean;
	handleWorkButton: () => void;
	handleBreakButton: () => void;
}

const Buttons: React.FC<Props> = ({
	startWork,
	startBreak,
	handleWorkButton,
	handleBreakButton,
}) => {
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
				<Button
					variant="contained"
					color="warning"
					disabled={startBreak}
					onClick={handleBreakButton}
				>
					Start Break
				</Button>
				<Button
					variant="contained"
					color="warning"
					disabled={!startBreak}
					onClick={handleBreakButton}
				>
					End Break
				</Button>
			</Box>
		</>
	);
};

export default Buttons;
