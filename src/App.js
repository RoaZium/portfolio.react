// import Children from "./examples/props";
import Main from "./layouts/Main";

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
