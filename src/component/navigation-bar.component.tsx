import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { FunctionComponent } from "react";

export const NavigationBar: FunctionComponent = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: "20px" }}>
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" href="./home.html">
            <img
              alt="Brand"
              src="./images/smartParksLogo.png"
              height="50"
              width="50"
            />
          </IconButton>
          <Typography variant="h6">Welcome To Smart Parks</Typography>
          <Button color="inherit" href="./home.html">
            Home
          </Button>
          <Button color="inherit" href="./apppage.html">
            Android Application
          </Button>
          <Button color="inherit" href="./smartsign.html">
            Customer Sign-Up
          </Button>
          <Button color="inherit" href="./map.html">
            Registered Car Parks
          </Button>
          <Button color="inherit" href="./view.html">
            Slot Status
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
