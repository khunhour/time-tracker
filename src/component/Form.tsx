import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

interface Props {
	type: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	action: () => void;
}

const Form: React.FC<Props> = ({ type, handleChange, action }) => {
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
						{type}
					</Typography>
					<Box component="form" onSubmit={action}>
						<TextField
							margin="normal"
							required
							fullWidth
							type="email"
							id="email"
							label="Email Address"
							name="email"
							onChange={handleChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
							onChange={handleChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							{type}
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

export default Form;
