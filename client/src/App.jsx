import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { loginUser } from "./redux/user";

// * Components
import Home from "./pages/Home";
import SideBar from "./components/SideBar/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userDetails = await JSON.parse(localStorage.getItem("User"));

      if (userDetails) {
        dispatch(loginUser(userDetails));
      }
    };

    if (user) {
      fetchUser();
    }
  }, []);

  return (
    <main>
      {localStorage.getItem("User") && <SideBar />}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </main>
  );
};

export default App;
