import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
export default function Drawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          key={"Home"}
          onClick={() => {
            navigate("/");
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          key={"Leaderboard"}
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <ListItemIcon>
            <LeaderboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Leaderboard"} />
        </ListItem>
        )
      </List>
    </Box>
  );

  return (
    <div style={{ marginLeft: "5rem" }}>
      <React.Fragment key={"right"}>
        <Button
          sx={{ display: { xs: "block", sm: "block", lg: "none", xl: "none" } }}
          onClick={toggleDrawer("right", true)}
        >
          <MenuIcon color="text" />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
