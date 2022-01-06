import { CssBaseline, Box, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useReducer } from "react";
import AppReducer from "./reducer/AppReducer";
import AppContext from "./context/app-context";
import StyledBar from "./components/StyledAppBar";
import { initialAppState } from "./reducer/initialAppState";
import Game from "./components/Game";
import AlertSlide from "./components/AlertSlide";
const background = require("./assets/site-background.jpg");
const btnBackground = require("../src/assets/background.png");

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
        <AlertSlide></AlertSlide>
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
          {state.status === undefined && (
            <Button
              size="large"
              style={{ marginTop: "16rem", fontSize: "35px" }}
              onClick={() => {
                dispatch({ type: "SET_STATUS_PLAYING" });
              }}
            >
              Lets Have Fun with flags
            </Button>
          )}
          {state.status === "playing" && <Game />}
        </Box>
      </AppContext.Provider>
    </>
  );
};

export default App;
