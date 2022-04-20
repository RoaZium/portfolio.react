import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Info, Login, Main, Nav } from "./pages";
// import axios from 'axios';

export default function App() {
  const [userInfo, setUserInfo] = React.useState("devstone");
  return (
    <Router>
      <p>fwef</p>
{/*       <Routes>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/info" render={() => <Info userInfo={userInfo} />} />
      </Routes> */}
    </Router>
  );
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

/* function App() {

  const sendRequest = async() => {
    const response = await axios.get('http://localhost:5000');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();    
  });

  return (
    <div className="App">
      <p>hjw2</p>      
    </div>
  );
}

export default App; */