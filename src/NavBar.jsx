import { Link } from "react-router";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <header class="header">
        <div class="logo wobble">🥨 SlurpLoops</div>
        <nav class="nav">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <Link to="Login">Login</Link>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
