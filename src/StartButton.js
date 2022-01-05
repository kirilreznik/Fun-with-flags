import React from "react";
import AppContext from "./context/app-context";
import { useContext } from "react";
import { Button } from "@material-ui/core";
const StartButton = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Button
      onClick={() => {
        dispatch({ type: "SET_COUNTRY" });
        dispatch({ type: "GET_OPTIONS" });
        console.log(state.currentCountry);
      }}
    >
      Start Game
    </Button>
  );
};

export default StartButton;
