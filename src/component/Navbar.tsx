import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Time Tracker
					</Typography>
					<Box mx={1}>
						<Button color="inherit">Today</Button>
					</Box>
					<Box mx={1}>
						<Button color="inherit">Work History</Button>
					</Box>
					<Box mx={1}>
						<Button color="inherit" variant="outlined">
							Login
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
