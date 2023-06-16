import React from "react";
import { useSelector } from "react-redux";

const Todo = ({ text, status }) => {
  const { user } = useSelector((state) => state.user);

  const changeStatus = async () => {
    const response = await fetch(
      "http://localhost:3300/api/user/changeStatus/" + text._id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          status: status,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    window.location.reload();
  };

  const removeTodo = async () => {
    const response = await fetch(
      "http://localhost:3300/api/user/deleteTodo/" + text._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    window.location.reload();
  };

  return (
    <div className="todo">
      <p>{text.title}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {status == "done" ? null : (
          <svg
            onClick={() => changeStatus()}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            style={{ fill: "#00FF00", marginRight: "10px" }}
          >
            <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
            <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
          </svg>
        )}

        <svg
          onClick={removeTodo}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)" }}
        >
          <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Todo;
