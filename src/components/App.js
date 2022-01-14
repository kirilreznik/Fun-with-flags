import { CssBaseline, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/app-context";
import StyledBar from "./StyledAppBar";
import Game from "./Game";
import AlertSlide from "./AlertSlide";
import StyledStartBtn from "./StyledStatrBtn";
import { appButtonContainer } from "../Styles/Styles";
import { appGameContainer } from "../Styles/Styles";

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: "GET_LEADERS" });
  }, []);
  useEffect(() => {
    if (state.options.includes(state.currentCountry.name) === false) {
      dispatch({ type: "GET_OPTIONS" });
    } else {
      dispatch({ type: "SET_COUNTRY" });
      dispatch({ type: "GET_OPTIONS" });
    }
  }, [state.currentCountry]);
  useEffect(() => {
    if (state.strikes.length === 3) {
      dispatch({ type: "SET_STATUS_LOST" });
      dispatch({ type: "OPEN_ALERT" });
    }
  }, [state.strikes]);
  return (
    <>
      <CssBaseline />
      <StyledBar status={state.status} />
      <div className="background">
        <AlertSlide open={state.openAlert}></AlertSlide>
        <Container style={appButtonContainer}>
          {state.status === undefined && <StyledStartBtn />}
        </Container>
        <Container style={appGameContainer}>
          {state.status === "playing" && <Game />}
        </Container>
      </div>
    </>
  );
};

export default App;
