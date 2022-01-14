import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import App from "../components/App";
import LeaderBoardPage from "../components/LeaderBoardPage";
import { useReducer } from "react";
import { initialAppState } from "../reducer/initialAppState";
import AppReducer from "../reducer/AppReducer";
import AppContext from "../context/app-context";
const AppRouter = () => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/leaderboard/" element={<LeaderBoardPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default AppRouter;
