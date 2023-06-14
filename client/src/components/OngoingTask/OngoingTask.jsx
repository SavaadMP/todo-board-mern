import React from "react";
import Todo from "../Todo/Todo";

const OngoingTask = () => {
  return (
    <div className="task_table">
      <h5>Ongoing Tasks</h5>
      <hr />

      <div className="todos">
        <Todo text="Complete login page" />
      </div>
    </div>
  );
};

export default OngoingTask;
