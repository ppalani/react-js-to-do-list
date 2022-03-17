import React, { useState } from "react";
import "./Taskform.css";

const Taskform = (props) => {
  const taskSubmithandler = (event) => {
    event.preventDefault();
    console.log("in submit handler");
    console.log(inputEntered);
    updateInput(() => "");

    const newtask = {
      taskid: Math.random().toString(),
      taskaction: inputEntered,
      status: "N",
      date: new Date(),
    };
    props.ondataadd(newtask);
  };

  const [inputEntered, updateInput] = useState("");

  const enterTextlistener = (event) => {
    console.log(event.target.value);
    updateInput(() => event.target.value);
  };

  return (
    <form onSubmit={taskSubmithandler}>
      <div className="taskform">
        <lable>+</lable>
        <input
          className="ipclass"
          type="text"
          pattern=".*"
          placeholder="Add a new task"
          value={inputEntered}
          onChange={enterTextlistener}
        />
      </div>
    </form>
  );
};

export default Taskform;
