import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateHook from "./examples/useStateHook";
import Appbar from "./components/Appbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "./layouts/Main";
import PropsExample from "./examples/props";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

//props example.01
/* ReactDOM.render(
  <>
    <PropsExample title="222" body="health" />
  </>,
  rootElement
); */

// props example.02
/* ReactDOM.render(
  <>
    <PropsExample name="HJW" color="blue" brand="Rapido" />
  </>,
  rootElement
); */
