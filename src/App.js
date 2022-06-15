import Visitor from "./layouts/visitors";
import Admin from "./layouts/admins/index";
import React, { useState } from "react";

export const AppOpenContext = React.createContext(false);
export const SelectedVisitorInfoContext = React.createContext([]);

const App = () => {
  const [appOpen, setAppOpen] = useState(false);
  const [selectedVisitorInfo, setSelectedVisitorInfo] = useState([]);

  return (
    <AppOpenContext.Provider value={{ appOpen, setAppOpen }}>
      <SelectedVisitorInfoContext.Provider
        value={{ selectedVisitorInfo, setSelectedVisitorInfo }}
      >
        <Admin />
      </SelectedVisitorInfoContext.Provider>
    </AppOpenContext.Provider>
  );
};

export default App;
