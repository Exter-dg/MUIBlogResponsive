/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export default function BlogSubHeading({ children }) {
	return (
		<Typography
			variant="subtitle1"
			mt={2}
			sx={{ fontSize: "1.1rem", fontWeight: "400" }}>
			{children}
		</Typography>
	);
}
