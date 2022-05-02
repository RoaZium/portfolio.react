import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import Main01 from "./layouts/Main01";
import EventHandler01 from "./examples/eventHandler";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <Main01 />
    </StyledEngineProvider>
  </BrowserRouter>,
  rootElement
);
