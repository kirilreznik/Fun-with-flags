import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import StyledButton from "../Button";
import Flag from "../Flag";
import AppContext from "../context/app-context";
import { useContext } from "react";
const Game = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Container align="center" style={{ opacity: "0.99", marginTop: "3rem" }}>
      <Paper
        elevation={24}
        style={{
          marginTop: "7rem",
          marginLeft: "30rem",
          marginRight: "30rem",
          height: "440px",
          paddingTop: "5rem",
        }}
      >
        {state.currentCountry && <Flag />}
        <Container>
          {state.options.map((option, index) => {
            return (
              <Container key={index} style={{ marginTop: "0.8rem" }}>
                <StyledButton option={option} />
              </Container>
            );
          })}
        </Container>
        <Container style={{ marginTop: "2rem" }}>
          <Typography color="error">{state.error}</Typography>
        </Container>
      </Paper>
    </Container>
  );
};
export default Game;
