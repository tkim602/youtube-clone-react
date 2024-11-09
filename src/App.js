import React, { useState } from "react";
import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <Router>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path ="/" element={<Home sidebar={sidebar} />}  />
        <Route path ="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
};

