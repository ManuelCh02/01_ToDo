import styles from "../styles/TaskCounter.module.css"

export function TaskCounter ({totalTasks}) {
    return (
        <section className={styles.counterContainer}>
            <p>
                COMPLETED {totalTasks.completed}/{totalTasks.total}
            </p>
        </section>
    )
}