import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Visualizer from "./pages/Visualizer";
import { useSelector } from "react-redux";


const App = () => {

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div   className={`h-screen transition-colors duration-500 ${
      theme === "light"
        ? "bg-white text-black"
        : "bg-gray-900 text-white"
    }`}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/visualizer" element={<Visualizer/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
