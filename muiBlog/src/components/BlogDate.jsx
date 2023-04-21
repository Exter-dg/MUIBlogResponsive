/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export default function BlogDate({ children }) {
	return (
		<Typography
			variant="body2"
			sx={{
				mt: "1rem",
				fontStyle: "italic",
				fontSize: "1.1rem",
				fontWeight: "300",
			}}>
			{children}
		</Typography>
	);
}
