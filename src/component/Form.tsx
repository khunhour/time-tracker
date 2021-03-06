import React from "react";

// material ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// component
import ErrorMsg from "./ErrorMsg";

interface Props {
	type: string;
	email: string;
	password: string;
	error: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({
	type,
	email,
	password,
	error,
	handleChange,
	handleSubmit,
}) => {
	let text: string = "";
	if (type === "login") {
		text = "Log In";
	} else if (type === "signup") {
		text = "Sign Up";
	}

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
						{text}
					</Typography>
					<Box component="form" onSubmit={handleSubmit} id={type}>
						<TextField
							margin="normal"
							required
							fullWidth
							type="email"
							id="email"
							label="Email Address"
							name="email"
							onChange={handleChange}
							value={email}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
							onChange={handleChange}
							value={password}
						/>
						<ErrorMsg error={error} />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							{text}
						</Button>
					</Box>
					<div>
						<Typography variant="h6">
							Email and Password for testing:
						</Typography>
						<Typography>Email: testing123@test.com</Typography>
						<Typography>Password: 123456</Typography>
					</div>
				</Box>
			</Paper>
		</Container>
	);
};

export default Form;
