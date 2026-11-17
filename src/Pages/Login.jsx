import { Link } from "react-router";
import "./Login.css";
function Login() {
  return (
    <>
      <section className="Login-card">
        <div class="logo wobble">🥨 SlurpLoops</div>
        <h1>Login</h1>
        <form action="">
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" required />
          <br />
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" required />
          <br />
          <button className="CTA a">
            <Link to="/">Submit</Link>
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
