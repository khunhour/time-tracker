import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

const SignIn = () => {
	return (
		<Container component="main" maxWidth="sm">
			<Paper elevation={5}>
				<Box
					p={5}
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Sign In
					</Typography>
					<Box component="form">
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

export default SignIn;
