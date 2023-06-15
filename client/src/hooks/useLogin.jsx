import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3300/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      // * ==================== save the user to local storage ======================
      const user = localStorage.setItem("User", JSON.stringify(data));
      dispatch(loginUser(user));

      setIsLoading(false);
      setError(null);

      navigate("/");
    }
  };

  return { login, error, isLoading };
};
