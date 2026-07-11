import { useEffect } from "react";

import { SearchTaskBar } from "./SearchTaskBar.jsx";
import { LabelTaskList } from "./LabelTaskList.jsx";
import { FilteredTasks } from "./FilteredTasks.jsx";

import styles from "../styles/SideBar.module.css"

export function SideBar ({handleTaskSearching, tasks, deleteTaskFromlocal, handleToggleCheck, getTasksByLabel, taskCounter}) {
    return (
        <aside className={`${styles.asideContainer} side-content`}>
            <SearchTaskBar 
                handleTaskSearching={handleTaskSearching}
            />
            <FilteredTasks 
                tasks={tasks}
                deleteTaskFromlocal={deleteTaskFromlocal}
                handleToggleCheck={handleToggleCheck}
            />
            <h2>Tags</h2>
            <LabelTaskList 
                getTasksByLabel={getTasksByLabel}
                taskCounter={taskCounter}
            />
        </aside>
    )
}