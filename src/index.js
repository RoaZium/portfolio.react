import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Visitor from "./layouts/visitors/Main";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Visitor />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
