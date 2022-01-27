import React from "react";
import { Box } from "@mui/material";
import bazinga from "../../assets/bazinga.jpg";
const AlertImage = () => {
  return (
    <Box>
      <img
        style={{ height: "12rem", padding: "10px", paddingTop: "40px" }}
        src={bazinga}
        alt="bazinga"
      ></img>
    </Box>
  );
};

export default AlertImage;
