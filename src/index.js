import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import Main01 from "./layouts/Main01";
import EventHandler01 from "./examples/eventHandler";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Main01 />
  </StyledEngineProvider>,
  rootElement
);
