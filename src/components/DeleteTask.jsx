export function DeleteTask ({ taskToDelete, deleteTaskFromlocal }) {

    const handleDeleteTask = (taskId) => {
        deleteTaskFromlocal(taskId)
    }

    return (
        <dialog id="my-dialog">
            <h4>Delete task?</h4>
            <p>This task will be permanently deleted</p>
            <button commandfor="my-dialog" command="close">Cancel</button>
            <button 
                commandfor="my-dialog" 
                command="close"
                onClick={() => handleDeleteTask(taskToDelete)}
            >
                Delete
            </button>
        </dialog>
    )
}