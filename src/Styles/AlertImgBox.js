import React from "react";
import { Box } from "@mui/material";
const bazinga = require("../assets/bazinga.jpg");
const AlertImgBox = () => {
  return (
    <Box>
      <img
        style={{ height: "12rem", padding: "10px", paddingTop: "40px" }}
        src={bazinga}
      ></img>
    </Box>
  );
};

export default AlertImgBox;
