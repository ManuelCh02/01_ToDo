import styles from "../styles/TaskCounter.module.css"

export function TaskCounter ({completedTasks}) {
    console.log(completedTasks)

    return (
        <section className={styles.counterContainer}>
            <p>
                COMPLETED {completedTasks.tasksCompleted}/{completedTasks.numberOfTasks}
            </p>
        </section>
    )
}