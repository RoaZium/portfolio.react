import Visitor from "./layouts/visitors";
import React, { useState } from "react";

export const AppOpenContext = React.createContext(false);
export const SelectedVisitorInfoContext = React.createContext([]);
export const GlobalContext = React.createContext();

const App = () => {
  const [globalVariable, setGlobalVariable] = useState({
    appOpen: true,
    agreePrivacy: false,
    visitorID: "1111",
    // visitor: [{ visitorID: "TT" }],
  });
  const [appOpen, setAppOpen] = useState(false);
  const [selectedVisitorInfo, setSelectedVisitorInfo] = useState([]);

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      <AppOpenContext.Provider value={{ appOpen, setAppOpen }}>
        <SelectedVisitorInfoContext.Provider
          value={{ selectedVisitorInfo, setSelectedVisitorInfo }}
        >
          <Visitor />
        </SelectedVisitorInfoContext.Provider>
      </AppOpenContext.Provider>
    </GlobalContext.Provider>
  );
};

export default App;
