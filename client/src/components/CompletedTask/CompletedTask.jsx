import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const CompletedTask = () => {
  const { todo } = useSelector((state) => state.todo);

  const completedTasks = todo.filter((todo) => {
    return todo.status === "completed";
  });

  return (
    <div className="task_table">
      <h5>Completed Tasks</h5>
      <hr />

      <div className="todos">
        {completedTasks &&
          completedTasks?.map((task) => {
            return <Todo key={task._id} status="done" text={task} />;
          })}
      </div>
    </div>
  );
};

export default CompletedTask;
