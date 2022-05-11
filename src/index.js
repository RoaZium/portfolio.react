import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import Visitor from "./layouts/visitors/Main";
import { BrowserRouter } from "react-router-dom";
import Frame from "./layouts/frame/index";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <Visitor />
    </StyledEngineProvider>
  </BrowserRouter>,
  rootElement
);
