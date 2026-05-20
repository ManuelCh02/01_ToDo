import { MainTitle } from "./MainTitle.jsx";
import { TasksList } from "./TasksList.jsx";
import { TaskCounter } from "./TaskCounter.jsx";

export function Main ({ useLocalStorage, tasksList }) {
    return (
        <>
            <MainTitle useLocalStorage={useLocalStorage} />
            <TasksList tasks={tasksList} />
            <TaskCounter />
        </>
    )
}