import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const UpcomingTask = () => {
  const { todo } = useSelector((state) => state.todo);
  console.log(todo);

  return (
    <div className="task_table">
      <h5>Upcoming Tasks </h5>
      <hr />

      <div className="todos">
        {todo &&
          todo.map((task) => {
            return <Todo key={task._id} text={task} />;
          })}
      </div>
    </div>
  );
};

export default UpcomingTask;
