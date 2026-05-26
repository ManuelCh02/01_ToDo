import { AddTaskBtn } from "./AddTaskBtn.jsx"

import styles from "../styles/MainTitle.module.css"

export function MainTitle ({ useLocalStorage, svgStyles, getTasksByLabel }) {
    return (
        <section className={styles.mainTitle}>
            <label className={styles.labelForSelect}>
                <span className={styles.filterByText}>Filter by: </span>
                <select 
                className={styles.labelSelectorFilter}
                name="selectLabels" 
                id="selectLabels"
                onChange={(e) => getTasksByLabel(e.target.value)}
            >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="work">Work</option>
                    <option value="study">Study</option>
                    <option value="college">College</option>
                    <option value="personal">Personal</option>
                </select>
            </label>
            <AddTaskBtn useLocalStorage={useLocalStorage} svgStyles={svgStyles} />
        </section>
    )
}