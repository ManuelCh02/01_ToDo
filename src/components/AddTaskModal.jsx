export function AddTaskModal ({ isOpen, onClose }) {
    if (!isOpen) return null
    return (
        <div>
            <div>
                <div>
                    <h2>Add a new Task</h2>
                </div>
                <input type="textarea" />
                <div>
                    <button onClick={onClose}>Add</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}