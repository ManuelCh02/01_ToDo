import { useState, useEffect } from "react";

import { MainTitle } from "./MainTitle.jsx";
import { TasksList } from "./TasksList.jsx";
import { TaskCounter } from "./TaskCounter.jsx";

export function Main ({ useLocalStorage, tasksList, colors, deleteTaskFromlocal}) {

    const [completedTasks, setCompletedTasks] = useState({
        numberOfTasks: 0,
        tasksCompleted: 0
    })

    useEffect(() => {
        completedTasks.numberOfTasks = JSON.parse(localStorage.getItem('tasks')).length
    })

    const handleTaskCounter = (counter) => {
        setCompletedTasks(counter)
    }

    return (
        <main className="main-content">
            <MainTitle useLocalStorage={useLocalStorage} svgStyles={colors} />
            <TasksList 
                tasks={tasksList} 
                colors={colors} 
                deleteTaskFromlocal={deleteTaskFromlocal}
                handleTaskCounter={handleTaskCounter}
            />
            <TaskCounter completedTasks={completedTasks} />
        </main>
    )
}