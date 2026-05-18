import { MainTitle } from "./MainTitle.jsx";
import { TasksList } from "./TasksList.jsx";
import { TaskCounter } from "./TaskCounter.jsx";

export function Main () {
    return (
        <>
            <MainTitle />
            <TasksList />
            <TaskCounter />
        </>
    )
}