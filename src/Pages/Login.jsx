function Login() {
  return (
    <>
      <section>
        <h1>Login</h1>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Enter Email" required />
          <br />
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" required />
          <br />
          <button className="CTA">
            <link to="/">Submit</link>
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
