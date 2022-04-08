import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
					<Box mx={1}>
						<Button color="inherit" variant="outlined">
							Sign Up
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
