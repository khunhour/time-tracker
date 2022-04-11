import React from "react";
import BasicTable from "./BasicTable";
import Typography from "@mui/material/Typography";

const History: React.FC<any> = ({ data }) => {
	return (
		<>
			<Typography variant="h4" my={2} textAlign="center">
				Work History
			</Typography>
			<BasicTable data={data} />
		</>
	);
};

export default History;
