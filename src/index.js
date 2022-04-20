import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Nav from './pages/Nav';
import Main from './pages/Main'
import Login from './pages/Login'
import Info from './pages/Info'
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from "react-router-dom";

const [userInfo, setUserInfo] = React.useState("devstone");

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/info" render={(props) => <Info {...props} userInfo={userInfo} />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
