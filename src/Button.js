import { Button } from "@material-ui/core";
import React, { useState } from "react";
import AppContext from "./context/app-context";
import { useContext } from "react";

const StyledButton = (props) => {
  const [answer, setAnswer] = useState();
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (e) => {
    if (state.currentCountry.name === e.target.innerHTML) {
      setAnswer(e.target.innerHTML);
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

/* if (e.target.innerHTML === props.currentCountry.name) {
  props.setUsedCountries([...props.usedCountries, e.target.innerHTML]);
} else {
  console.log(props.currentCountry.name);
  console.log(e.target.innerHTML);
} */
