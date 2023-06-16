import React from "react";

import ShowDate from "../components/Date/Date";
import AddTodo from "../components/AddToDo/AddTodo";
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import OngoingTask from "../components/OngoingTask/OngoingTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";

import "./Pages.scss";

const Home = () => {
  return (
    <section className="home-container">
      <ShowDate />
      <AddTodo />

      <div className="tasks">
        <UpcomingTask />
        <OngoingTask />
        <CompletedTask />
      </div>
    </section>
  );
};

export default Home;
