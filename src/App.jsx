import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Pages/Login";
import "./App.css";
import NewAccount from "./Pages/NewAccount";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <Login />
    </>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="NewAccount" element={<NewAccount />} />
          <Route path="NewAccount/Login" element={<Login />} />
          <Route path="NewAccount/Login/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
