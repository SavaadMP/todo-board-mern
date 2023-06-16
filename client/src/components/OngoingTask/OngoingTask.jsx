import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const OngoingTask = () => {
  const { todo } = useSelector((state) => state.todo);

  const ongoingTasks = todo.filter((todo) => {
    return todo.status === "ongoing";
  });

  return (
    <div className="task_table">
      <h5>Ongoing Tasks</h5>
      <hr />

      <div className="todos">
        {ongoingTasks &&
          ongoingTasks?.map((task) => {
            return <Todo key={task._id} status="completed" text={task} />;
          })}
      </div>
    </div>
  );
};

export default OngoingTask;
