import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.scss";
import { addTodo } from "../../redux/todo";

const AddTodo = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const addTask = async () => {
    if (!task == "") {
      const response = await fetch("http://localhost:3300/api/user/addtodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          task: task,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(addTodo(data));
      }
    }
  };

  return (
    <div>
      <div className="addTodo">
        <svg
          onClick={addTask}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)" }}
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter the task..."
        />
      </div>
    </div>
  );
};

export default AddTodo;
