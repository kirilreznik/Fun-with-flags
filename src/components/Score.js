import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Stack } from "@mui/material";
import AppContext from "../context/app-context";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { scoreBox, strikesText, strikesBox } from "../Styles/Styles";
const Score = () => {
  const { state } = useContext(AppContext);
  return (
    <Box style={scoreBox}>
      <Box style={{ paddingRight: "0" }}>
        <Typography variant="h3" style={strikesText}>
          STRIKES:
        </Typography>
      </Box>
      <Box style={strikesBox}>
        <Stack direction="row" spacing={0}>
          {state.strikes.map((strike, index) => {
            return <DangerousIcon key={index} color="error"></DangerousIcon>;
          })}
        </Stack>
      </Box>
    </Box>
  );
};
export default Score;
