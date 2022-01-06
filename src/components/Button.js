import { Button } from "@material-ui/core";
import React from "react";
import AppContext from "../context/app-context";
import { useContext } from "react";

const StyledButton = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e) => {
    if (state.currentCountry.name === e.target.innerHTML) {
      dispatch({
        type: "REMOVE_COUNTRY",
        payload: { name: e.target.innerHTML },
      });
      dispatch({ type: "CLEAR_ERROR" });
      dispatch({ type: "ADD_TO_SCORE" });
    } else {
      dispatch({ type: "SET_ERROR" });
      dispatch({ type: "STRIKE" });
    }
  };
  return (
    <Button
      color="secondary"
      className="optionBtn"
      onClick={handleClick}
      variant="text"
    >
      {props.option}
    </Button>
  );
};
export default StyledButton;
