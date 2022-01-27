import React, { useEffect, useContext } from "react";
import { Container } from "@mui/material";
import OptionButton from "../button-option/OptionButton";
import Flag from "../flag/Flag";
import AppContext from "../../context/app-context";
import ErrorAlert from "../error-alert/ErrorAlert.js";
import { GamePaper, GameContainer, GameDivider } from "./Game.styled";
import Strikes from "../strikes/Strikes";
import Score from "../score/Score";
const Game = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (state.options.length !== 3) {
      dispatch({ type: "GET_OPTIONS" });
    }
  }, [state.options]);
  return (
    <>
      <ErrorAlert open={state.error === "TRY AGAIN"}></ErrorAlert>
      <GameContainer>
        <GamePaper elevation={24}>
          <Score score={state.score} />
          <GameDivider />
          {state.currentCountry && <Flag />}
          {state.options.map((option, index) => {
            return (
              <Container key={index}>
                <OptionButton option={option} />
              </Container>
            );
          })}
          <GameDivider />
          <Strikes />
        </GamePaper>
      </GameContainer>
    </>
  );
};
export default Game;
