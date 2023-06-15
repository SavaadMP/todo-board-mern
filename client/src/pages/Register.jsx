import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

import "./auth.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Signup, error } = useSignup({});

  const register = async (event) => {
    event.preventDefault();
    await Signup(username, email, password);
  };

  return (
    <section className="register-container">
      <div className="">
        <div className="register_title">
          <h1>Register an account</h1>
        </div>

        <form onSubmit={register}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              id="username"
              placeholder="eg: John doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="eg: todoboard@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password should be strong"
            />
          </div>

          <div className="form-group">
            <button>Register</button>
          </div>

          {error && (
            <div className="error-box">
              <p>{error}</p>
            </div>
          )}

          <div className="form-group">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
