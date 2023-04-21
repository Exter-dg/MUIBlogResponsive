/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export default function BlogParagraph({ children }) {
	return (
		<Typography
			mt={2}
			variant="body2"
			sx={{
				fontSize: "1.1rem",
				fontWeight: "300",
				letterSpacing: "1%",
			}}>
			{children}
		</Typography>
	);
}
