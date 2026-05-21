import { useState } from "react"

import { AddTaskModal } from "./AddTaskModal.jsx"

import styles from "../styles/addTaskBtn.module.css"

export function AddTaskBtn ({ useLocalStorage }) {
    const [modal, setModal] = useState(false)

    return (
        <>
            <button 
                onClick={() => setModal(true)} 
                className={styles.addTaskBtn}
            >
                + Add Task
            </button>
            <AddTaskModal 
                isOpen={modal} 
                onClose={() => setModal(false)}
                useLocalStorage={useLocalStorage}    
            />
        </>
    )
}