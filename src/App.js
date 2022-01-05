import { CssBaseline, Box, Button, Avatar, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useReducer } from "react";
import AppReducer from "./reducer/AppReducer";
import AppContext from "./context/app-context";
import StyledBar from "./components/StyledAppBar";
import { initialAppState } from "./reducer/initialAppState";
import Game from "./components/Game";
import { useState } from "react";
import TransitionAlerts from "./components/Alert";
const background = require("./assets/site-background.jpg");
const btnBackground = require("../src/assets/background.png");

const App = () => {
  const [status, setStatus] = useState();
  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  useEffect(() => {
    dispatch({ type: "SET_COUNTRY" });
    dispatch({ type: "GET_OPTIONS" });
  }, [state.countries]);
  useEffect(() => {
    if (state.strikes.length === 3) {
      dispatch({ type: "OPEN_ALERT" });
      setStatus();
    }
  }, [state.strikes]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <CssBaseline />
        <StyledBar status={status} />
        <TransitionAlerts></TransitionAlerts>
        <Box
          style={{
            borderRadius: "20px",
            backgroundImage: `url(${background})`,
            backgroundColor: "purple",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "90vh",
            opacity: "0.4",
            position: "absolute",
            width: "90%",
            marginLeft: "5rem",
          }}
        ></Box>
        <Box align="center" style={{ backgroundImage: { btnBackground } }}>
          {!status && (
            <Button
              onClick={() => {
                setStatus("playing");
              }}
            >
              <Paper></Paper>
              Lets Have Fun with flags
            </Button>
          )}
          {status && <Game />}
        </Box>
      </AppContext.Provider>
    </>
  );
};

export default App;
