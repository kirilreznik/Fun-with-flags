import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/HomePage";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./App";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      main: "#000000",
    },
  },
});
ReactDOM.render(
  <AppRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      ,
    </React.StrictMode>
  </AppRouter>,
  document.getElementById("root")
);
