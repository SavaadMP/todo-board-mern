import React from "react";
import Todo from "../Todo/Todo";

const UpcomingTask = () => {
  return (
    <div className="task_table">
      <h5>Upcoming Tasks</h5>
      <hr />

      <div className="todos">
        <Todo text="Complete Authentication" />
        <Todo text="Complete Todo App" />
        <Todo text="Walk 20 Mints" />
      </div>
    </div>
  );
};

export default UpcomingTask;
