import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    // * ================== Remove User from storage ======================
    localStorage.removeItem("User");
    dispatch(logoutUser(null));
  };
  return { logout };
};
