import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ThemeProvider from "../components/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
