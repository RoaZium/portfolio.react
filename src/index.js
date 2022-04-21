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
    <div className="App">
      <CssBaseline />
      <Main />
    </div>
    {/* <Appbar /> */}
    {/* <header>
      <Appbar />
    </header> */}
    {/* <App /> */}
    {/* <StateHook text={'hjw hjw hjw hjw'} maxLength={2} /> */}
  </BrowserRouter>,
  document.getElementById("root")
);
