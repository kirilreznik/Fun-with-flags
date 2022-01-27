import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import { useReducer } from "react";
import { initialAppState } from "./reducers/initialAppState";
import AppReducer from "./reducers/AppReducer";
import AppContext from "./context/app-context";
const AppRouter = () => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default AppRouter;
