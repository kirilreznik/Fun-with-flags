import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

export const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const StyledLogo = styled("img")({
  width: "200px",
  height: "auto",
  position: "relative",
  paddingTop: "10px",
});
