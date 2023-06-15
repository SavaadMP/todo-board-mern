import React from "react";
import { Routes, Route } from "react-router-dom";

// * Components
import Home from "./pages/Home";
// import SideBar from "./components/SideBar/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <main>
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default App;
