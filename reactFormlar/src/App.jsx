import { useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };
  const DeleteTaskByID = (id) => {
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletedTasks);
  };
  const editTaskByID = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <main className="app">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={DeleteTaskByID}
        onUpdate={editTaskByID}
      />
    </main>
  );
}

export default App;
