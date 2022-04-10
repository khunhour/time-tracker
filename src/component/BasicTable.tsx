import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDate } from "../utils/formatDate";
import { formatHour } from "../utils/formatHour";
import { Typography } from "@mui/material";
import { formatDuration } from "../utils/formatDuration";

interface Props {
	data: any;
}
const BasicTable: React.FC<Props> = ({ data }) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Typography variant="h4" my={2}>
				Today
			</Typography>
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
						{data.map((ele: any) => {
							return (
								<TableRow>
									<TableCell>
										{formatDate(ele.workStartTime)}
									</TableCell>
									<TableCell>
										{formatHour(ele.workStartTime)}
									</TableCell>
									<TableCell>
										{formatHour(ele.breakStartTime)}
									</TableCell>
									<TableCell>
										{formatHour(ele.breakEndTime)}
									</TableCell>
									<TableCell>
										{formatHour(ele.workEndTime)}
									</TableCell>
									{console.log(ele.totalWorkTime)}
									<TableCell>{ele.totalBreakTime}</TableCell>
									<TableCell>{ele.totalWorkTime}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default BasicTable;
