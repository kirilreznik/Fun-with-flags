import { Button } from "@mui/material";
import { useContext } from "react";
import AppContext from "../context/app-context";
import { ThemeProvider } from "@mui/material";
import { theme } from "..";
const StyledStartBtn = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme}>
      <Button
        align="center"
        color="text"
        size="large"
        style={{
          marginTop: "auto",
          fontSize: "35px",
        }}
        onClick={() => {
          dispatch({ type: "SET_STATUS_PLAYING" });
        }}
      >
        Lets Have Fun with flags
      </Button>
    </ThemeProvider>
  );
};
export default StyledStartBtn;
