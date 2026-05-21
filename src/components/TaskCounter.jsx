import styles from "../styles/TaskCounter.module.css"

export function TaskCounter () {
    return (
        <section className={styles.counterContainer}>
            <p>
                COMPLETED 4/5
            </p>
        </section>
    )
}