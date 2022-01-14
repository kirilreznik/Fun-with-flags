import { Button } from "@mui/material";
import React from "react";
import AppContext from "../context/app-context";
import { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../index";

const OptionButton = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e) => {
    if (state.currentCountry.name === e.target.name) {
      dispatch({
        type: "REMOVE_COUNTRY",
        payload: { name: e.target.innerHTML },
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
      <Button
        color="text"
        name={props.option}
        className="optionBtn"
        onClick={handleClick}
        variant="text"
      >
        {props.option}
      </Button>
    </ThemeProvider>
  );
};
export default OptionButton;
