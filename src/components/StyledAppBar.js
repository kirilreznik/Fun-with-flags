import React from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Box } from "@mui/material";
import { theme } from "../index";
import { ThemeProvider } from "@mui/material";
import Drawer from "./Drawer";
import { logoImg, logoImgBox, toolBar } from "../Styles/Styles";
const background = require("../assets/background.png");

const StyledBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="fixed" elevation={0} color="transparent">
          <Toolbar sx={toolBar}>
            <Box>
              <img style={logoImg} src={background}></img>
            </Box>
            <Box sx={logoImgBox}>
              <Button color="text" href="/">
                HOME
              </Button>
              <Button color="text" href="/leaderboard">
                Leaderboard
              </Button>
            </Box>
            <Drawer />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default StyledBar;
