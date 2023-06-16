import React, { useEffect, useState } from "react";
import "./SideBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import { loginUser } from "../../redux/user";

const SideBar = () => {
  const { user } = useSelector((state) => state.user);
  const [menu, showMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const { logout } = useLogout();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const userDetails = await JSON.parse(localStorage.getItem("User"));

      if (userDetails) {
        dispatch(loginUser(userDetails));
      }
    };

    fetchUsers();
    setLoading(false);
  }, [localStorage.getItem("User")]);

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={!user ? { display: "none" } : null}>
      {!menu ? (
        <svg
          onClick={() => showMenu(!menu)}
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          style={{ fill: " rgba(0, 0, 0, 1) " }}
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      ) : (
        <svg
          onClick={() => showMenu(!menu)}
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          style={{ fill: " rgba(0, 0, 0, 1) " }}
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
      )}

      <section className={`${menu ? "side-bar active" : "side-bar"}`}>
        <div className="side-bar-container">
          <div className="sidebar_title">
            <h1>Todo Board 👋</h1>
          </div>

          <hr />

          <div className="sidebar_links">
            <ul>
              <li>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#645f5f" }}
                  >
                    <path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path>
                    <path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path>
                  </svg>
                  Tasks
                </Link>
              </li>
              <li onClick={logoutHandler}>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#645f5f" }}
                  >
                    <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                  </svg>
                  Logout
                </Link>
              </li>
              {user && !loading ? (
                <div className="acc_details">
                  <h4>{user.username}</h4>
                  <p>{user.email}</p>
                </div>
              ) : (
                <div className="acc_details">
                  <p>Loading</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
