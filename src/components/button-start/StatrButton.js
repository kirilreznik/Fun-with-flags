import { useContext } from "react";
import AppContext from "../../context/app-context";
import { ThemeProvider } from "@mui/material";
import { theme } from "../..";
import { StartButton, StartButtonContainer } from "./StartButton.styled";
const StyledStartBtn = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme}>
      <StartButtonContainer>
        <StartButton
          align="center"
          color="text"
          size="large"
          style={{}}
          onClick={() => {
            dispatch({ type: "SET_STATUS_PLAYING" });
          }}
        >
          Lets Have Fun with flags
        </StartButton>
      </StartButtonContainer>
    </ThemeProvider>
  );
};
export default StyledStartBtn;
