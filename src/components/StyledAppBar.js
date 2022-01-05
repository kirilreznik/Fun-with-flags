import React from "react";
import { AppBar, Toolbar, Container, Button } from "@material-ui/core";
import Score from "./Score";
const background = require("../assets/background.png");
const StyledBar = (props) => {
  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar>
        <Container align="left">
          <img style={{ width: "200px", height: "85%" }} src={background}></img>
        </Container>
        {props.status && <Score></Score>}
        <Container
          style={{ marginRight: "0", width: "500px", padding: "0" }}
          align="right"
        >
          <Button>Click</Button>
          <Button>Click</Button>
          <Button>Click</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default StyledBar;
