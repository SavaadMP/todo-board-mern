import React from "react";
import "./auth.scss";

const Register = () => {
  return (
    <section className="register-container">
      <div className="">
        <div className="register_title">
          <h1>Register an account</h1>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="eg: John doe"
            />
          </div>
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
            <button>Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
