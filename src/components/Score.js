import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import { Stack } from "@mui/material";
import AppContext from "../context/app-context";
import DangerousIcon from "@mui/icons-material/Dangerous";
const Score = () => {
  const { state } = useContext(AppContext);
  return (
    <Container align="center">
      <Stack direction="row" spacing={2}>
        <Box>
          <Typography>SCORE:{state.score}</Typography>
        </Box>
        <Box style={{ paddingRight: "0" }}>
          <Typography>STRIKES:</Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={0}>
            {state.strikes.map((strike, index) => {
              return <DangerousIcon key={index} color="error"></DangerousIcon>;
            })}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
export default Score;
