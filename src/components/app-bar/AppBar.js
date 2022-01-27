import React from "react";
import { AppBar, ThemeProvider, Button, Box } from "@mui/material";
import { theme } from "../../index";
import Drawer from "../drawer/Drawer";
import { StyledToolBar, StyledLogo } from "./AppBar.styled";
import logo from "../../assets/background.png";

const StyledBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" elevation={0} color="transparent">
        <StyledToolBar>
          <StyledLogo src={logo} alt="logo" />
          <Drawer />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Button color="text" href="/">
              HOME
            </Button>
            <Button color="text" href="/leaderboard">
              Leaderboard
            </Button>
          </Box>
        </StyledToolBar>
      </AppBar>
    </ThemeProvider>
  );
};
export default StyledBar;
