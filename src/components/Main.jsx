import { useState, useEffect } from "react";

import { MainTitle } from "./MainTitle.jsx";
import { TasksList } from "./TasksList.jsx";
import { TaskCounter } from "./TaskCounter.jsx";

export function Main ({ useLocalStorage, tasksList, colors, deleteTaskFromlocal, totalTasks, handleTaskCounter, handleToggleCheck, getTasksByLabel}) {

    return (
        <main className="main-content">
            <MainTitle 
                useLocalStorage={useLocalStorage} 
                svgStyles={colors} 
                getTasksByLabel={getTasksByLabel}
            />
            <TasksList 
                tasks={tasksList} 
                colors={colors} 
                deleteTaskFromlocal={deleteTaskFromlocal}
                handleTaskCounter={handleTaskCounter}
                handleToggleCheck={handleToggleCheck}
            />
            <TaskCounter totalTasks={totalTasks} />
        </main>
    )
}