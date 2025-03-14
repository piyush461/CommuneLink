import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col max-md:h-[100svh] h-screen">
      <BrowserRouter>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex-1 overflow-y-scroll transition-all ease 200 ${isOpen ? 'max-md:blur-sm touch-none max-md:overflow-hidden' : 'max-md:blur-none'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
