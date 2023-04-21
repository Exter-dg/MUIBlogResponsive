import "./App.css";

import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Container,
	Divider,
	Grid,
	Link,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import HeaderLinks from "./components/HeaderLinks";
import Header from "./components/Header";
import sampleImage from "./assets/sampleImage.jpeg";
import BlogTitle from "./components/BlogTitle";
import BlogDate from "./components/BlogDate";
import BlogParagraph from "./components/BlogParagraph";
import BlogHeading from "./components/BlogHeading";
import BlogSubHeading from "./components/BlogSubHeading";
import BlogList from "./components/BlogList";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const list1 = [
	"Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
	"Donec id elit non mi porta gravida at eget metus.",
	"Nulla vitae elit libero, a pharetra augue.",
];

const list2 = [
	"Vestibulum id ligula porta felis euismod semper.",
	"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	"Maecenas sed diam eget risus varius blandit sit amet non magna.",
];

const archivesList = [
	"March 2020",
	"February 2020",
	"January 2020",
	"November 1999",
	"October 1999",
	"September 1999",
	"August 1999",
	"July 1999",
	"June 1999",
	"May 1999",
	"April 1999",
];

function App() {
	return (
		<>
			<Container disableGutters>
				<Header></Header>
				<Divider disableGutters></Divider>
				<HeaderLinks></HeaderLinks>
				<Grid
					container
					rowSpacing={4}
					mt={0}
					paddingTop={0}
					sx={{
						maxWidth: "100%",
						position: "relative",
					}}>
					<Grid item xs={12} sx={{ paddingTop: "0.5rem !important" }}>
						<Box
							padding={6}
							className="feature-box"
							sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
							<Typography
								variant="h3"
								sx={{ maxWidth: { md: "50%", xs: "100%" } }}>
								Title of a longer featured blog post
							</Typography>
							<Typography
								variant="h5"
								mt={2}
								sx={{ maxWidth: { md: "50%", xs: "100%" } }}>
								Multiple lines of text that form the lede, informing new readers
								quickly and efficiently about what's most interesting in this
								post's contents.
							</Typography>
							<Link href="#" variant="body1">
								Continue reading...
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card sx={{ marginRight: { xs: 0, md: "1rem" } }}>
							<CardActionArea
								sx={{ display: "flex", alignItems: "flex-start" }}>
								<Box sx={{ flexGrow: "3", maxWidth: "100%", padding: "1rem" }}>
									<Typography variant="h5" fontWeight={400}>
										Featured post
									</Typography>
									<Typography
										variant="caption"
										sx={{ fontSize: "1.1rem", color: "grey" }}>
										Nov 12
									</Typography>
									<Typography
										variant="body2"
										sx={{
											lineHeight: "1.8rem",
											fontSize: "1.1rem",
											marginTop: "0.5rem",
											marginBottom: "1rem",
											fontWeight: "200",
										}}>
										This is a wider card with supporting text below as a natural
										lead-in additional content.
									</Typography>
									<Link
										href="#"
										variant="body1"
										sx={{ fontSize: "1.1rem", textDecoration: "none" }}>
										Continue reading...
									</Link>
								</Box>
								<Box
									sx={{
										flexGrow: "1",
										maxWidth: { xs: "0%", sm: "30%" },
										border: "1px solid green",
									}}>
									<CardMedia
										component="img"
										sx={{
											maxWidth: "100%",
											height: "13rem	",
											objectFit: "cover",
										}}
										image={sampleImage}
										alt="Live from space album cover"
									/>
								</Box>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card sx={{ marginLeft: { xs: 0, md: "1rem" } }}>
							<CardActionArea
								sx={{ display: "flex", alignItems: "flex-start" }}>
								<Box sx={{ flexGrow: "3", maxWidth: "100%", padding: "1rem" }}>
									<Typography variant="h5" fontWeight={400}>
										Post title
									</Typography>
									<Typography
										variant="caption"
										sx={{ fontSize: "1.1rem", color: "grey" }}>
										Nov 11
									</Typography>
									<Typography
										variant="body2"
										sx={{
											lineHeight: "1.8rem",
											fontSize: "1.1rem",
											marginTop: "0.5rem",
											marginBottom: "1rem",
											fontWeight: "200",
										}}>
										This is a wider card with supporting text below as a natural
										lead-in additional content.
									</Typography>
									<Link
										href="#"
										variant="body1"
										sx={{ fontSize: "1.1rem", textDecoration: "none" }}>
										Continue reading...
									</Link>
								</Box>
								<Box
									sx={{
										flexGrow: "1",
										maxWidth: { xs: "0%", sm: "30%" },
										border: "1px solid green",
									}}>
									<CardMedia
										component="img"
										sx={{
											maxWidth: "100%",
											height: "13rem	",
											objectFit: "cover",
										}}
										image={sampleImage}
										alt="Live from space album cover"
									/>
								</Box>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={8} mt={3}>
						<Box sx={{ marginRight: "1rem" }}>
							<Typography variant="h5">From the firehose</Typography>
							<Divider
								disableGutters
								sx={{ mt: "0.5rem", mb: "1rem" }}></Divider>
							<BlogTitle>Sample blog post</BlogTitle>
							<BlogDate>
								April 1, 2020 by <Link>Olivier</Link>
							</BlogDate>
							<BlogParagraph>
								This blog post shows a few different types of content that are
								supported and styled with Material styles. Basic typography,
								images, and code are all supported. You can extend these by
								modifying Markdown.js.
							</BlogParagraph>
							<BlogParagraph>
								Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
								sem lacinia quam venenatis vestibulum. Sed posuere consectetur
								est at lobortis. Cras mattis consectetur purus sit amet
								fermentum.
							</BlogParagraph>
							<BlogParagraph>
								Curabitur blandit tempus porttitor.
								<Typography display="inline">
									Nullam quis risus eget urna mollis
								</Typography>{" "}
								ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
								id elit.
							</BlogParagraph>
							<BlogParagraph>
								Etiam porta sem malesuada magna mollis euismod. Cras mattis
								consectetur purus sit amet fermentum. Aenean lacinia bibendum
								nulla sed consectetur.
							</BlogParagraph>

							<BlogHeading>Heading</BlogHeading>
							<BlogParagraph>
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
								ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
								ac consectetur ac, vestibulum at eros.
							</BlogParagraph>

							<BlogSubHeading>Sub Heading 1</BlogSubHeading>
							<BlogParagraph>
								Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus.
							</BlogParagraph>

							<BlogSubHeading>Sub Heading 2</BlogSubHeading>
							<BlogParagraph>
								Cum sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
								consectetur. Etiam porta sem malesuada magna mollis euismod.
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet risus.
							</BlogParagraph>
							<BlogList list={list1} style="disc"></BlogList>
							<BlogParagraph>
								Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
								elit libero, a pharetra augue.
							</BlogParagraph>
							<BlogList list={list2} style="number"></BlogList>
							<BlogParagraph>
								Cras mattis consectetur purus sit amet fermentum. Sed posuere
								consectetur est at lobortis.
							</BlogParagraph>
							<Box mt={7}>
								<BlogTitle>Another blog post</BlogTitle>
								<BlogDate>
									March 23, 2020 by <Link>Matt</Link>
								</BlogDate>
								<BlogParagraph>
									Cum sociis natoque penatibus et magnis dis parturient montes,
									nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
									ornare sem lacinia quam venenatis vestibulum. Sed posuere
									consectetur est at lobortis. Cras mattis consectetur purus sit
									amet fermentum.
								</BlogParagraph>
								<BlogParagraph>
									Curabitur blandit tempus porttitor.
									<Typography display="inline">
										ullam quis risus eget urna mollis
									</Typography>
									N ornare vel eu leo. Nullam id dolor id nibh ultricies
									vehicula ut id elit.
								</BlogParagraph>
								<BlogParagraph>
									Etiam porta sem malesuada magna mollis euismod. Cras mattis
									consectetur purus sit amet fermentum. Aenean lacinia bibendum
									nulla sed consectetur.
								</BlogParagraph>
								<BlogParagraph>
									Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
									auctor. Duis mollis, est non commodo luctus, nisi erat
									porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.
								</BlogParagraph>
							</Box>
							<Box mt={7}>
								<BlogTitle>New feature</BlogTitle>
								<BlogDate>
									March 14, 2020 by <Link>Tom</Link>
								</BlogDate>
								<BlogParagraph>
									Cum sociis natoque penatibus et magnis dis parturient montes,
									nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
									consectetur. Etiam porta sem malesuada magna mollis euismod.
									Fusce dapibus, tellus ac cursus commodo, tortor mauris
									condimentum nibh, ut fermentum massa justo sit amet risus.
								</BlogParagraph>
								<BlogList style="disc" list={list1}></BlogList>
								<BlogParagraph>
									Etiam porta sem malesuada magna mollis euismod. Cras mattis
									consectetur purus sit amet fermentum. Aenean lacinia bibendum
									nulla sed consectetur.
								</BlogParagraph>
								<BlogParagraph>
									Donec ullamcorper nulla non metus auctor fringilla. Nulla
									vitae elit libero, a pharetra augue.
								</BlogParagraph>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={4} mt={3}>
						<Box sx={{ marginLeft: "1rem" }}>
							<Box
								sx={{ backgroundColor: "#EEEEEE", borderRadius: "1%" }}
								p={3}>
								<Typography variant="h5">About</Typography>
								<Typography
									variant="body1"
									sx={{ marginTop: 2, fontWeight: "300", fontSize: "1.1rem" }}>
									Etiam porta sem malesuada magna mollis euismod. Cras mattis
									consectetur purus sit amet fermentum. Aenean lacinia bibendum
									nulla sed consectetur.
								</Typography>
							</Box>
							<Box mt={4}>
								<Typography variant="h5">Archives</Typography>
								<Box mt={2}>
									{archivesList.map((listItem) => {
										return (
											<ListItemText key={listItem} m={0} p={0}>
												<Link
													sx={{
														fontSize: "1.1rem",
														fontWeight: "300",
														fontFamily: "roboto",
													}}>
													{listItem}
												</Link>
											</ListItemText>
										);
									})}
								</Box>
							</Box>
							<Box mt={4}>
								<Typography variant="h5" mb={1}>
									Social
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										columnGap: "0.5rem",
									}}>
									<GitHubIcon sx={{ color: "#1976D2" }}></GitHubIcon>
									<Link
										sx={{
											fontSize: "1.1rem",
											fontWeight: "300",
											fontFamily: "roboto",
										}}>
										Github
									</Link>
								</Box>
								<Box
									mt={1}
									sx={{
										display: "flex",
										alignItems: "center",
										columnGap: "0.5rem",
									}}>
									<TwitterIcon sx={{ color: "#1976D2" }}></TwitterIcon>
									<Link
										sx={{
											fontSize: "1.1rem",
											fontWeight: "300",
											fontFamily: "roboto",
										}}>
										Twitter
									</Link>
								</Box>
								<Box
									mt={1}
									sx={{
										display: "flex",
										alignItems: "center",
										columnGap: "0.5rem",
									}}>
									<FacebookIcon sx={{ color: "#1976D2" }}></FacebookIcon>
									<Link
										sx={{
											fontSize: "1.1rem",
											fontWeight: "300",
											fontFamily: "roboto",
										}}>
										Facebook
									</Link>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid xs={12}>
						<Box textAlign="center" mt={10}>
							<Typography variant="h5">Footer</Typography>
							<Typography
								variant="body2"
								mt={2}
								sx={{
									color: "rgba(0, 0, 0, 0.6)",
									fontSize: "1.1rem",
									fontWeight: "300",
								}}>
								Something here to give the footer a purpose!
							</Typography>
							<Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
								Copyright ©{" "}
								<Link
									sx={{
										color: "rgba(0, 0, 0, 0.6)",
										fontSize: "1rem",
										fontWeight: "300",
									}}>
									Your Website
								</Link>{" "}
								2023.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default App;
