import Visitor from "./layouts/visitors";
import Admin from "./layouts/admins/index";
import React, { useState } from "react";

export const AppOpenContext = React.createContext(false);

const App = () => {
  const [appOpen, setAppOpen] = useState(false);

  return (
    <AppOpenContext.Provider value={{appOpen, setAppOpen}}>
      <Admin />
    </AppOpenContext.Provider>
  );
};

export default App;
