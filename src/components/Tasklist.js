import Task from "./Task";

const Tasklist = (props) => {
  console.log("in tasks list");
  const taskitems = props.taskslist;
  console.log(props.taskslist);

  const notCompletedTasks = taskitems.filter((t) => t.status === "N");
  const CompletedTasks = taskitems.filter((t) => t.status === "Y");

  const istherecompletedtasks = CompletedTasks.length === 0;

  const taskupdateHandler = (changedtask) => {
    console.log("changed task handler");
    console.log(changedtask);
    props.ondataadd(changedtask);
  };

  if (istherecompletedtasks)
    return (
      <div>
        {notCompletedTasks.map((t) => (
          <Task
            cn="task"
            ontaskupdate={taskupdateHandler}
            key={t.taskid}
            taskid={t.taskid}
            taskaction={t.taskaction}
            status={t.status}
            date={t.date}
          ></Task>
        ))}
      </div>
    );
  else
    return (
      <div>
        {notCompletedTasks.map((t) => (
          <Task
            cn="task"
            ontaskupdate={taskupdateHandler}
            key={t.taskid}
            taskid={t.taskid}
            taskaction={t.taskaction}
            status={t.status}
            date={t.date}
          ></Task>
        ))}

        <div className="ctheader">completed tasks</div>

        {CompletedTasks.map((t) => (
          <Task
            ontaskupdate={taskupdateHandler}
            cn="comtask"
            key={t.taskid}
            taskid={t.taskid}
            taskaction={t.taskaction}
            status={t.status}
            date={t.date}
          ></Task>
        ))}
      </div>
    );
};

export default Tasklist;
