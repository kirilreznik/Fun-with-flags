import React, { useContext } from "react";
import AppContext from "../../context/app-context";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../index";
import { StyledButton } from "./OptionButton.styled";

const OptionButton = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e) => {
    if (state.currentCountry.name === e.target.name) {
      dispatch({
        type: "REMOVE_COUNTRY",
        payload: { name: e.target.name },
      });
      dispatch({ type: "SET_COUNTRY" });
      dispatch({ type: "CLEAR_ERROR" });
      dispatch({ type: "ADD_TO_SCORE" });
    } else {
      dispatch({ type: "SET_ERROR" });
      dispatch({ type: "STRIKE" });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        color="text"
        name={props.option}
        onClick={handleClick}
        variant="text"
      >
        {props.option}
      </StyledButton>
    </ThemeProvider>
  );
};
export default OptionButton;
