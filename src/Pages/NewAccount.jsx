import { Link } from "react-router";
import "./NewAccount.css";
function NewAccount() {
  return (
    <>
      <section className="Account-card">
        <form action="">
          <h1>Create An Account</h1>
          <label for="name">Name: </label>
          <input type="text" name="" placeholder="Enter Name" required />
          <br />

          <label for="email">Email: </label>
          <input type="text" name="" placeholder="Enter Email" required />
          <br />

          <label for="password">Passord: </label>
          <input type="password" placeholder="Enter Password" required />
          <br />

          <label for="password">Confirm Passsword</label>
          <input type="password" placeholder="Confirm Password" required />
          <br />

          <button className="CTA-button">
            <Link to="Login">Create Account</Link>
          </button>
        </form>
      </section>
    </>
  );
}

export default NewAccount;
