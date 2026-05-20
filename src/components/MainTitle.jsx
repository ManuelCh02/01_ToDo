import { AddTaskBtn } from "./AddTaskBtn.jsx"

export function MainTitle ({ useLocalStorage }) {
    return (
        <section>
            <h2>Selected Label Here</h2>
            <AddTaskBtn useLocalStorage={useLocalStorage} />
        </section>
    )
}