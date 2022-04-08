import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
	error: string;
}

const ErrorMsg: React.FC<Props> = ({ error }) => {
	const trimedMsg = error.slice(10);
	return <Typography color="error">{trimedMsg}</Typography>;
};

export default ErrorMsg;
