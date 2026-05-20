import { useState } from "react"

import { AddTaskModal } from "./AddTaskModal.jsx"

export function AddTaskBtn ({ useLocalStorage }) {
    const [modal, setModal] = useState(false)

    return (
        <>
            <button onClick={() => setModal(true)} >
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