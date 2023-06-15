import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/user";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const Signup = async (username, email, password) => {
    const response = await fetch("http://localhost:3300/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
      // * ==================== save the user to local storage ==========================
      localStorage.setItem("User", JSON.stringify(data));

      dispatch(registerUser(data));
      setIsLoading(false);
      setError(null);

      navigate("/");
    }
  };

  return { Signup, error, isLoading };
};
