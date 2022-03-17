import React from "react";
import "./TaskManager.css";
import Tasklist from "./Tasklist";
import Taskform from "./Taskform";

const TaskManager = (props) => {
  const tobepassedfunc = props.onDatareceived;
  const dataAddHandler = (props) => {
    console.log("in task manager");
    console.log(props);
    tobepassedfunc(props);
  };

  console.log("in main screen page");

  console.log(props.taskslist);

  const tdate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateformatted = tdate.toLocaleDateString("en-IN", options);

  return (
    <div className="taskmanager">
      <div className="header">{dateformatted} -- To Do </div>
      <Tasklist
        ondataadd={dataAddHandler}
        taskslist={props.taskslist}
      ></Tasklist>
      <Taskform ondataadd={dataAddHandler}></Taskform>
    </div>
  );
};

export default TaskManager;
