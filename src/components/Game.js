import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import OptionButton from "./OptionButton";
import Flag from "../components/Flag";
import AppContext from "../context/app-context";
import { useContext } from "react";
import { flagStyle } from "../Styles/Styles";
import Score from "./Score";
import ErrorAlert from "./ErrorAlert.js";
import Divider from "@mui/material/Divider";
import { gameContainer, scoreText, optionBtn, divider } from "../Styles/Styles";
const Game = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <ErrorAlert open={state.error === "TRY AGAIN"}></ErrorAlert>
      <Container style={gameContainer}>
        <Paper elevation={24} style={flagStyle}>
          <Container>
            <Typography variant="h3" style={scoreText}>
              SCORE:{state.score}
            </Typography>
          </Container>
          <Divider variant="middle" style={divider} />
          <Container>{state.currentCountry && <Flag />}</Container>

          {state.options.map((option, index) => {
            return (
              <Container key={index} style={optionBtn}>
                <OptionButton option={option} />
              </Container>
            );
          })}
          <Container>
            <Divider variant="middle" style={divider} />
            <Score />
          </Container>
        </Paper>
      </Container>
    </>
  );
};
export default Game;
