import React from "react";
import StyledBar from "../components/app-bar/AppBar";
import { CssBaseline } from "@mui/material";
import LeaderTable from "../components/leader-table/LeaderTable";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import AppContext from "../context/app-context";

const LeaderBoardPage = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: "GET_LEADERS" });
  }, []);
  return (
    <>
      <CssBaseline />
      <StyledBar />
      <div className="background">
        <Box
          style={{
            width: "80%",
            position: "relative",
            margin: "auto",
            top: "80px",
          }}
        >
          <LeaderTable leaderBoard={state.leaderBoard} />
        </Box>
      </div>
    </>
  );
};

export default LeaderBoardPage;
