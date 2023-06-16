import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },

    setTodos: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
