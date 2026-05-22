import { AddTaskBtn } from "./AddTaskBtn.jsx"

import styles from "../styles/MainTitle.module.css"

export function MainTitle ({ useLocalStorage, svgStyles }) {
    return (
        <section className={styles.mainTitle}>
            <h2>College</h2>
            <AddTaskBtn useLocalStorage={useLocalStorage} svgStyles={svgStyles} />
        </section>
    )
}