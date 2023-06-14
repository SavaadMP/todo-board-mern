import React from "react";
import Todo from "../Todo/Todo";

const CompletedTask = () => {
  return (
    <div className="task_table">
      <h5>Completed Tasks</h5>
      <hr />

      <div className="todos">
        <Todo text="Designed Header Section" />
        <Todo text="Designed hero section" />
        <Todo text="listen a podcast" />
      </div>
    </div>
  );
};

export default CompletedTask;
