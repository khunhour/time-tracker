import React from "react";
import BasicTable from "./BasicTable";

const History: React.FC<any> = ({ data }) => {
	return (
		<>
			<BasicTable data={data} />
		</>
	);
};

export default History;
