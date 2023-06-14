import React from "react";
import "./AddTodo.scss";

const AddTodo = () => {
  return (
    <div>
      <div className="addTodo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)" }}
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
        <input type="text" placeholder="Enter the task and hit enter" />
      </div>
    </div>
  );
};

export default AddTodo;
