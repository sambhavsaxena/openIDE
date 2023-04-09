import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IDE from "./screens/IDE";
import Home from "./screens/Home";
import Error from "./screens/Error";
import About from "./screens/About";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ide" element={<IDE />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
};

export default App;
