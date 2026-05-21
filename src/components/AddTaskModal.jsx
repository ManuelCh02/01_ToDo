import { useState } from "react"

export function AddTaskModal ({ isOpen, onClose, useLocalStorage }) {
    if (!isOpen) return null

    const [taskValue, setTaskValue] = useState({ value: "", labels: [] })

    const handleAddTaskBtn = (taskValue) => {
        const newTask = {
            value: taskValue.value,
            labels: taskValue.labels
        }

        console.log(newTask)

        useLocalStorage(newTask)
    }

    return (
        <div>
            <div>
                <div>
                    <h2>Add a new Task</h2>
                </div>
                <input 
                    type="textarea" 
                    value={taskValue.value}
                    onChange={(e) => setTaskValue({ ...taskValue, value: e.target.value })}
                />
                <div>
                    <button onClick={() => { handleAddTaskBtn(taskValue); onClose(); }}>Add</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
                <div>
                    <ul>
                        <li onClick={() => setTaskValue({ ...taskValue, labels: [...taskValue.labels, "today"]})}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Today</span>
                        </li>
                        <li onClick={() => setTaskValue({...taskValue, labels: [...taskValue.labels, "work"]})}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Work</span>
                        </li>
                        <li onClick={() => setTaskValue({...taskValue, labels: [...taskValue.labels, "study"]})}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Study</span>
                        </li>
                        <li onClick={() => setTaskValue({...taskValue, labels: [...taskValue.labels, "colelge"]})}>
                            <svg fill="#ffffff" width="20px" height="20px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"/></svg>
                            <span>College</span>
                        </li>
                        <li onClick={() => setTaskValue({...taskValue, labels: [...taskValue.labels, "personal"]})}>
                            <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="#ffffff" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.611606 0 0 229.611606 0 512s229.611606 512 512 512 512-229.611606 512-512S794.258081 0 512 0z m309.102571 815.890048c-9.773479-52.776788-32.83889-102.686689-67.502164-144.386867a38.937541 38.937541 0 0 0-54.99211-4.951896 38.937541 38.937541 0 0 0-4.951896 54.99211c35.184525 42.351743 54.601171 95.91041 54.601171 151.032833 0 0.912191 0.260626 1.824383 0.260626 2.736574-68.023416 44.436752-149.20845 70.369051-236.518198 70.369051s-168.364469-25.932298-236.518198-70.369051c0-0.912191 0.260626-1.69407 0.260626-2.736574 0-130.182744 105.944515-236.257572 236.257572-236.257572 121.712395 0 220.750318-99.037923 220.750318-220.750318s-99.037923-220.750318-220.750318-220.750318-220.750318 99.037923-220.750318 220.750318c0 70.499364 33.229829 133.179944 84.8338 173.576992-89.003818 42.872996-154.811911 126.533978-173.186053 226.614405C125.7521 737.571901 78.187834 630.193942 78.187834 512 78.187834 272.745228 272.745228 78.187834 512 78.187834s433.812166 194.557394 433.812166 433.812166c-0.130313 118.193942-47.694579 225.571901-124.709595 303.890048zM369.307203 415.698651c0-78.578773 63.983711-142.562484 142.562484-142.562484s142.562484 63.983711 142.562484 142.562484c0 78.709086-63.983711 142.562484-142.562484 142.562484S369.307203 494.277424 369.307203 415.698651z" /></svg>
                            <span>Personal</span>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
    )
}