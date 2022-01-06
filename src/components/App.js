import { CssBaseline, Box, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useReducer } from "react";
import AppReducer from "../reducer/AppReducer";
import AppContext from "../context/app-context";
import StyledBar from "./StyledAppBar";
import { initialAppState } from "../reducer/initialAppState";
import Game from "./Game";
import AlertSlide from "./AlertSlide";
import BackgroundBox from "../Styles/styled-components/BackgroundBox";
import StyledStartBtn from "../Styles/styled-components/StyledStatrBtn";

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  useEffect(() => {
    dispatch({ type: "SET_COUNTRY" });
    dispatch({ type: "GET_OPTIONS" });
  }, [state.countries]);
  useEffect(() => {
    if (state.strikes.length === 3) {
      dispatch({ type: "SET_STATUS_LOST" });
      dispatch({ type: "OPEN_ALERT" });
    }
  }, [state.strikes]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <CssBaseline />
        <StyledBar status={state.status} />
        <AlertSlide open={state.openAlert}></AlertSlide>
        <BackgroundBox />
        <Box align="center">
          {state.status === undefined && <StyledStartBtn />}
          {state.status === "playing" && <Game />}
        </Box>
      </AppContext.Provider>
    </>
  );
};

export default App;
