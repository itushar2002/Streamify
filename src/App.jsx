import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Video from "./screens/Video/Video";

const App = () => {
  const [sidebar, setsidebar] = useState(true);
  return (
    <div className="app">
      <Nav setsidebar={setsidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video />}></Route>
      </Routes>
    </div>
  );
};

export default App;


// AIzaSyCiIq8kyKegN4wp_2s7yT48mu2mWuimTL0