/* eslint-disable react/prop-types */
import { Box, ListItem } from "@mui/material";

export default function BlogList({ list, listType = "none" }) {
	return (
		<Box mt={2}>
			{list.map((listItem) => (
				<ListItem
					key={listItem}
					sx={{
						display: "list-item",
						listStyleType: listType,
						marginLeft: 2,
						fontSize: "1.1rem",
						fontFamily: "roboto",
						fontWeight: "300",
						letterSpacing: "1%",
						textDecoration: "none",
					}}>
					{listItem}
				</ListItem>
			))}
		</Box>
	);
}
