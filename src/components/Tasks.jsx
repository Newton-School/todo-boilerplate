import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import addDays from "date-fns/addDays";
import isToday from "date-fns/isToday";

const FORMAT = "dd/MM/yyyy";
function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}
const AddTask = ({ onCancel, onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);
  return (
    <div className="add-task-dialog">
      <input data-tid="inputask" value={task}  />
      <div className="add-task-actions-container">
        <div className="btns-container">
          <button
           
            data-tid="addTaskButton"
            className="add-btn"
           
          >
            Add Task
          </button>
          <button
            className="cancel-btn"
            
          >
            Cancel
          </button>
        </div>
        <div className="icon-container">
          <input data-tid="dataChoose"/>
          <DayPickerInput
            onDayChange={(day) => setDate(day)}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              modifiers: {
                disabled: [{ before: new Date() }],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const TASKS_HEADER_MAPPING = {
  INBOX: "Inbox",
  TODAY: "Today",
  NEXT_7: "Next 7 days",
};

const TaskItems = ({ selectedTab, tasks }) => {
  let tasksToRender = [...tasks];


 

  return (
    <div className="task-items-container">
      {tasksToRender.map((task) => (
        <div className="task-item">
          <p data-tid="todayTask">{task.text}</p>
          <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
        </div>
      ))}
    </div>
  );
};

const Tasks = ({ selectedTab }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);


  return (
    <div className="tasks">
      <h1>{TASKS_HEADER_MAPPING[selectedTab]}</h1>
      {selectedTab === "INBOX" ? (
        <div 
          className="add-task-btn"
          
        >
          <span data-tid="addTaskDiv" className="plus">+</span>
          <span className="add-task-text">Add Task</span>
        </div>
      ) : null}
      {showAddTask && (
        <AddTask
          
          
        />
      )}
      {tasks.length > 0 ? (
        <TaskItems  />
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  );
};

export default Tasks;
