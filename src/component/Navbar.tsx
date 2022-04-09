import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface Props {
	isLoggedIn: boolean;
	handleChangeFormType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navbar: React.FC<Props> = ({ isLoggedIn, handleChangeFormType }) => {
	const NavButtons = isLoggedIn ? (
		<Stack spacing={2} direction="row">
			<Button color="inherit">Today</Button>
			<Button color="inherit">Work History</Button>
			<Button color="inherit" variant="outlined" value="login">
				Log Out
			</Button>
		</Stack>
	) : (
		<Stack spacing={2} direction="row">
			<Button
				color="inherit"
				variant="outlined"
				value="login"
				onClick={handleChangeFormType}
			>
				Login
			</Button>
			<Button
				color="inherit"
				variant="outlined"
				value="signup"
				onClick={handleChangeFormType}
			>
				Sign Up
			</Button>
		</Stack>
	);

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
					{NavButtons}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
