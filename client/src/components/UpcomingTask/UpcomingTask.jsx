import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const UpcomingTask = () => {
  const { todo } = useSelector((state) => state.todo);

  const upcomingTasks = todo.filter((todo) => {
    return todo.status === "upcoming";
  });

  return (
    <div className="task_table">
      <h5>Upcoming Tasks </h5>
      <hr />

      <div className="todos">
        {upcomingTasks &&
          upcomingTasks?.map((task) => {
            return <Todo key={task._id} status="ongoing" text={task} />;
          })}
      </div>
    </div>
  );
};

export default UpcomingTask;
