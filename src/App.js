import Visitor from "./layouts/visitors";
import Admin from "./layouts/admins/index";
import React, { useState } from "react";

export const AppOpenContext = React.createContext(false);
export const VisitorInfoContext = React.createContext([]);

const App = () => {
  const [appOpen, setAppOpen] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState([]);

  return (
    <AppOpenContext.Provider
      value={({ appOpen, setAppOpen }, { visitorInfo, setVisitorInfo })}
    >
      <Admin />
    </AppOpenContext.Provider>
  );
};

export default App;
