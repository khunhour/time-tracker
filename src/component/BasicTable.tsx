import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";

interface Props {
	data: { x: string }[];
}
const BasicTable: React.FC<Props> = ({ data }) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<TableContainer
				component={Paper}
				elevation={4}
				style={{
					maxWidth: "1000px",
				}}
			>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Work Start</TableCell>
							<TableCell>Work End</TableCell>
							<TableCell>Break Start</TableCell>
							<TableCell>Break End</TableCell>
							<TableCell>Total Work</TableCell>
							<TableCell>Total Break</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Work Start</TableCell>
							<TableCell>Work End</TableCell>
							<TableCell>Break Start</TableCell>
							<TableCell>Break End</TableCell>
							<TableCell>Total Work</TableCell>
							<TableCell>Total Break</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default BasicTable;
