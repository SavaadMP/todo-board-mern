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

    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload._id);
    },
  },
});

export const { addTodo, setTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
