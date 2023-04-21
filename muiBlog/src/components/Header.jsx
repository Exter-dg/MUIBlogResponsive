import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
	return (
		<Box sx={{ padding: "0 0.3rem" }}>
			<AppBar position="relative" color="transparent" elevation={0}>
				<Toolbar disableGutters>
					<Button variant="text">SUBSCRIBE </Button>
					<Typography sx={{ flexGrow: 1 }} align="center" variant="h5">
						Blog
					</Typography>
					<IconButton>
						<SearchIcon></SearchIcon>
					</IconButton>
					<Button variant="outlined">Sign Up</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
