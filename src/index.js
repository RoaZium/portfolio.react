import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import Main from "./layouts/Main01";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Main />
  </StyledEngineProvider>,
  rootElement
);
