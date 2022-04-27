import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { Admin01, Admin02, Admin03, Admin04 } from "./layouts/admin";
import { Visitor01, Visitor02, Visitor03, Visitor04, Visitor05 } from "./layouts/visitors";

import Main from "./layouts/Main";

import Appbar from "./components/Appbar";

const App = () => {
  return (
/*     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Admin01" element={<Admin01 />} />
        <Route path="/Admin02" element={<Admin02 />} />
        <Route path="/Admin03" element={<Admin03 />} />
        <Route path="/Admin04" element={<Admin04 />} />
      </Route>
    </Routes> */

    <div className="App">
      <Main />
    </div>
    
/*     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Admin01" element={<Admin01 />} />
        <Route path="/Admin02" element={<Admin02 />} />
        <Route path="/Admin03" element={<Admin03 />} />
        <Route path="/Admin04" element={<Admin04 />} />
      </Route>
    </Routes> */
    
    /*          <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>  */
  );
};

export default App;
