/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export default function BlogTitle({ children }) {
	return (
		<Typography variant="h5" sx={{ fontSize: "2.4rem", fontWeight: "400" }}>
			{children}
		</Typography>
	);
}
