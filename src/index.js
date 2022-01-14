import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./routers/AppRouter";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
