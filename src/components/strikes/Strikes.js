import React, { useContext } from "react";
import { Stack } from "@mui/material";
import AppContext from "../../context/app-context";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { ScoreText } from "../score/Score.styled";
import { StrikesBox } from "./Strikes.styled";
const Strikes = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <ScoreText variant="h3">STRIKES:</ScoreText>
      <StrikesBox>
        <Stack direction="row" spacing={0}>
          {state.strikes.map((strike, index) => {
            return <DangerousIcon key={index} color="error" />;
          })}
        </Stack>
      </StrikesBox>
    </>
  );
};
export default Strikes;
