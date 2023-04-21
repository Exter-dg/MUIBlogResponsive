/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export default function BlogHeading({ children }) {
	return (
		<Typography variant="h5" mt={3}>
			{children}
		</Typography>
	);
}
