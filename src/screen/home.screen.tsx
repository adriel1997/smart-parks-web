import {
    Bolt as BoltIcon,
    Groups as GroupIcon,
    Settings as SettingIcon,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    ImageList,
    ImageListItem,
    Typography
} from "@mui/material";
import { FunctionComponent } from "react";
import smartParksLogo from "../assets/smartParksLogo.png";

const HomeBanner: FunctionComponent = () => (
  <Container
    sx={{
      textAlign: "center",
      paddingTop: "100px",
      paddingBottom: "100px",
    }}
  >
    <Typography variant="h1" sx={{ marginBottom: "20px" }}>
      Smart Parks
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: "20px" }}>
      An application for booking at select parking spaces.
    </Typography>
    <Button
      variant="contained"
      sx={{ marginRight: "10px" }}
      //onClick={() => (window.location.href = "./apppage.html")}
    >
      Android application
    </Button>
    <Button variant="contained">Employee Log-In</Button>
  </Container>
);

const AboutUs: FunctionComponent = () => (
  <Container sx={{ marginBottom: "20px" }}>
    <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "center" }}>
      <img alt="Brand" src={smartParksLogo} height="100" width="100" />
      About Us
    </Typography>
    <Typography
      variant="body1"
      sx={{ marginBottom: "20px", textAlign: "center" }}
    >
      Smart Parks is a comprehensive solution for car park management, empowers
      car park owners by facilitating efficient utilization of parking spaces.
      It goes beyond mere collection of fees from motorists, it serves as a
      strategic tool for optimizing parking operations, making it analogous to
      any other business venture. In addition to the financial aspect of renting
      parking spaces, Smart Parks strategically enforces free time limits. This
      is particularly valuable for retailers aiming to ensure a steady turnover
      of parking spaces, enhancing accessibility for their genuine customers. By
      diligently enforcing time limits, the system contributes to a dynamic and
      well-managed parking environment. Smart Parks is designed to guarantee the
      adherence to car park terms and conditions, providing a structured
      framework for both owners and users. The system ensures that each parking
      space is utilized correctly, promoting fair and efficient use of the
      available resources. Through its robust features, Smart Parks not only
      streamlines the payment process but also actively contributes to the
      overall traffic management ecosystem, fostering a seamless experience for
      both car park owners and users alike.
    </Typography>
  </Container>
);

interface ServiceType {
  title: string;
  detail: string;
  icon: JSX.Element;
}

const services: ServiceType[] = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Faster Booking",
    detail:
      "It allows for quick parking as the application uses a real time database to search for free parking spot, thereby eliminating time ,fuel and effort while looking for a parking spot.",
  },
  {
    icon: <SettingIcon fontSize="large" />,
    title: "Owner's Involvement",
    detail:
      "By utilizing a secure database we have allowed the car park owners to an ability to look after their customer's car and trust by allowing an emergency owner id which allows them to contact the car owner in case of a mishap.",
  },
  {
    icon: <GroupIcon fontSize="large" />,
    title: "User Friendly",
    detail:
      "It provides the user a sign in and authentication option, thereby allowing for secure booking. Additionally, we have put in various payment options such as PayPal, PayTM and cash on the spot.",
  },
];

const Services: FunctionComponent = () => {
  return (
    <Container
      id="services"
      sx={{
        paddingTop: "20px",
        paddingBottom: "40px",
        textAlign: "center",
        height: 20,
      }}
    >
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid xs={12} sm={4}>
            <Container maxWidth="sm">
              <Card>
                {service.icon}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.detail}
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ApplicationImageList: FunctionComponent = () => {
  return (
    <ImageList
      sx={{ width: 500, mt: 30, placeContent: "center" }}
      variant="masonry"
      cols={3}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://adriel1997.github.io/linkedProjects/smartparks/images/appLoginPage.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "    https://adriel1997.github.io/linkedProjects/smartparks/images/appOwnerPage.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://adriel1997.github.io/linkedProjects/smartparks/images/appBookingPage.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://adriel1997.github.io/linkedProjects/smartparks/images/appConfirmationPage.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://adriel1997.github.io/linkedProjects/smartparks/images/appPaymentPage.jpg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
];

export const HomeScreen: FunctionComponent = () => (
  <Box>
    <Container>
      <HomeBanner />
    </Container>
    <Container>
      <AboutUs />
    </Container>
    <Container>
      <Services />
    </Container>
    <Container sx={{ placeContent: "center", display: "flex" }}>
      <ApplicationImageList />
    </Container>
    <Container className="c" sx={{ textAlign: "center", marginBottom: "20px" }}>
      {/* ... Content for What Now? section ... */}
    </Container>
    {/* 
{/* Footer Section */}
    {/* <footer>
  <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0e0e0' }}>
    <Typography variant="body2" sx={{ color: 'darkgreen' }}>
      Copyright © 2017 Smart Parks Limited.<br />
      Created by <a href="https://www.linkedin.com/in/adriealle-dsouza-955755117">Adriealle Dsouza</a>
    </Typography>
  </Paper>
</footer> */}
  </Box>
);
