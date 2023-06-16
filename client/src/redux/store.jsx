import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import todoReducer from "./todo";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});
