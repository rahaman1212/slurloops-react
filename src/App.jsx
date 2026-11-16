import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Pages/Login";
import NewAccount from "./Pages/NewAccount";
import "./App.css";

function Home() {
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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="NewAccount" element={<NewAccount />} />
          <Route path="Login" element={<Login />} />
          <Route path="NewAccount/Login" element={<Login />} />
          <Route path="Login/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
