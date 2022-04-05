import { Box, Button, ButtonGroup, Paper } from "@mui/material";
import React from "react";

const Buttons = () => {
	return (
		<>
			<Box
				mt={9}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button variant="contained" color="success">
					Start Work
				</Button>
				<Button variant="contained" color="error">
					End Work
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button variant="contained" color="warning">
					Start Break
				</Button>
				<Button variant="contained" color="warning">
					End Break
				</Button>
			</Box>
		</>
	);
};

export default Buttons;
