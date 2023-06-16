import React, { useEffect } from "react";

import ShowDate from "../components/Date/Date";
import AddTodo from "../components/AddToDo/AddTodo";
import UpcomingTask from "../components/UpcomingTask/UpcomingTask";
import OngoingTask from "../components/OngoingTask/OngoingTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";

import "./Pages.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/todo";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3300/api/user/alltodos", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();

      dispatch(setTodos(data));
    };

    if (user) {
      fetchTodos();
    }
  }, []);

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
