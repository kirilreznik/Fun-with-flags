import { CssBaseline } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/app-context";
import StyledBar from "../components/app-bar/AppBar";
import Game from "../components/game/Game";
import AlertSlide from "../components/alert-slide/AlertSlide";
import StyledStartBtn from "../components/button-start/StatrButton";
const HomePage = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (state.options.length < 3) {
      dispatch({ type: "GET_OPTIONS" });
    }
  }, [state.options]);
  useEffect(() => {
    dispatch({ type: "GET_LEADERS" });
  }, []);
  useEffect(() => {
    if (!state.options.includes(state.currentCountry.name)) {
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
      <CssBaseline>
        <StyledBar status={state.status} />
        <div className="background">
          <AlertSlide open={state.openAlert} />
          {!state.status && <StyledStartBtn />}
          {state.status === "playing" && <Game />}
        </div>
      </CssBaseline>
    </>
  );
};

export default HomePage;
