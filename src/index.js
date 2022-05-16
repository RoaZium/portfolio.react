import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import Visitor from "./layouts/visitors/Main";
import { BrowserRouter } from "react-router-dom";
import Frame from "./layouts/frame/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("root");

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <Visitor />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
