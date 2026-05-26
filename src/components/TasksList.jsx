import { useEffect, useState } from "react"

import { DeleteTask } from "./DeleteTask.jsx"
import { VisualTag } from "./VisualTag.jsx"

import styles from "../styles/TasksList.module.css"

export function TasksList ({tasks, colors, deleteTaskFromlocal, handleTaskCounter, handleToggleCheck, setVisualTag}) {
    const [taskToDelete, setTaskToDelete] = useState(null)

    return (
        <section className={styles.tasksListContainer}>
            <div className={styles.taskListTitles}>
                <h2>Inbox</h2>
                <VisualTag 
                    setVisualTag={setVisualTag}
                />
            </div>
            <ul className={styles.tasksList}>
                {
                    (tasks || []).map(task => (
                        <li 
                            key={task.id} 
                            className={styles.taskElement}
                        >
                            <div className={styles.checkAndTask}>
                                <input 
                                    type="checkbox" 
                                    checked={task.completed ? true : false}
                                    className={styles.checkBox}
                                    onChange={(e) => {handleToggleCheck(e.target.checked, task.id)}}
                                />
                            </div>
                            <p className={styles.task, "taskItem"}>{task.value}</p>
                            <button 
                                command="show-modal" 
                                commandfor="my-dialog"
                                onClick={() => setTaskToDelete(task.id)}
                            >
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke={colors.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <DeleteTask 
                taskToDelete={taskToDelete} 
                deleteTaskFromlocal={deleteTaskFromlocal}
            />
        </section>
    )
}