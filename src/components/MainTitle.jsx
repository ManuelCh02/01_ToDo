import { AddTaskBtn } from "./AddTaskBtn.jsx"

import styles from "../styles/MainTitle.module.css"

export function MainTitle ({ useLocalStorage }) {
    return (
        <section className={styles.mainTitle}>
            <h2>College</h2>
            <AddTaskBtn useLocalStorage={useLocalStorage} />
        </section>
    )
}