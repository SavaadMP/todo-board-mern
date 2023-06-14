import React from "react";
import "./auth.scss";

const Login = () => {
  return (
    <section className="register-container">
      <div className="">
        <div className="register_title">
          <h1>Login to your account</h1>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="eg: todoboard@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password should be strong"
            />
          </div>

          <div className="form-group">
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
