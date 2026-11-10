import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
