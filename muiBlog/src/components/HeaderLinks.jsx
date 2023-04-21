import { Box, Button } from "@mui/material";

const buttons = [
	"Technology",
	"Design",
	"Culture",
	"Business",
	"Politics",
	"Opinion",
	"Science",
	"Health",
	"Style",
	"Travel",
];

export default function HeaderLinks() {
	return (
		<Box sx={{ display: "flex", mt: 1, overflow: "scroll" }}>
			{buttons.map((button) => (
				<Button variant="text" className="header-link-button" key={button}>
					{button}
				</Button>
			))}
		</Box>
	);
}
