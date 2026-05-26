import { createContext, useState, useEffect } from "react";

// CREATE CONTEXT
export const TaskContext = createContext();

function TaskProvider({ children }) {
  // TASK STATE
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
  });
    
      // SAVE TASKS TO LOCALSTORAGE
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    )

  }, [tasks])
    
    

  return (
    <TaskContext.Provider
      value={
        {
          tasks,
          setTasks
        }
      }
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider
