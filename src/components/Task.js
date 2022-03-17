import React from "react";
import "./Task.css";

const Task = (props) => {
  console.log("props--in task page");
  console.log(props.task);
  const taskupdateHandler = (event) => {
    console.log();
    if (props.status === "N") {
      console.log("-------------update action----------------------");

      const updatedtask = {
        taskid: props.taskid,
        taskaction: props.taskaction,
        status: "Y",
        date: props.date,
      };
      console.log(updatedtask);
      props.ontaskupdate(updatedtask);
    } else {
      const updatedtask = {
        taskid: props.taskid,
        taskaction: props.taskaction,
        status: "N",
        date: props.date,
      };
      props.ontaskupdate(updatedtask);
    }
  };
  return (
    <div className={props.cn}>
      <span
        className={props.cn === "task" ? "dot" : "cdot"}
        onClick={taskupdateHandler}
      >
        {" "}
      </span>
      {"     "} {props.taskaction}
    </div>
  );
};

export default Task;
