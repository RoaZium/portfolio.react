// import Visitor from "./layouts/visitors";
import Admin from "./layouts/admins/index";
import React, { useState } from "react";
import ContextExample from "./Docs/Context";

export const AppOpenContext = React.createContext(false);

const App = () => {
  const [appOpen, setAppOpen] = useState(false);

  return (
    <ContextExample />
/*     <AppOpenContext.Provider value={{appOpen, setAppOpen}}>
      <Admin />
    </AppOpenContext.Provider> */
  );
};

export default App;
