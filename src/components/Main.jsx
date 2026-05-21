import { MainTitle } from "./MainTitle.jsx";
import { TasksList } from "./TasksList.jsx";
import { TaskCounter } from "./TaskCounter.jsx";

export function Main ({ useLocalStorage, tasksList, colors }) {
    return (
        <main className="main-content">
            <MainTitle useLocalStorage={useLocalStorage} />
            <TasksList tasks={tasksList} colors={colors} />
            <TaskCounter />
        </main>
    )
}