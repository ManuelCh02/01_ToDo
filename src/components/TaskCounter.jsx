import styles from "../styles/TaskCounter.module.css"

export function TaskCounter ({totalTasks}) {
    console.log(totalTasks)

    return (
        <section className={styles.counterContainer}>
            <p>
                COMPLETED 0/{totalTasks}
            </p>
        </section>
    )
}