import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

import "./auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <section className="register-container">
      <div className="">
        <div className="register_title">
          <h1>Login to your account</h1>
        </div>

        <form onSubmit={handleLogin}>
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
            <button>Login</button>
          </div>

          {error && (
            <div className="error-box">
              <p>{error}</p>
            </div>
          )}

          <div className="form-group">
            <p>
              Don't have an account yet? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
