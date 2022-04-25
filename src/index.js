import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateHook from "./examples/useStateHook";
import Appbar from "./components/Appbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "./layouts/Main";

ReactDOM.render(
  <BrowserRouter>
    {/* <div className="App"> */}
      <Main />
    {/* </div> */}
  </BrowserRouter>,
  document.getElementById("root")
);
