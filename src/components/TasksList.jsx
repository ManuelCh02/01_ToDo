import { useEffect, useState } from "react"

export function TasksList ({ tasks }) {
    let tasksList = JSON.parse(localStorage.getItem('tasks'))

    useEffect(() => {
        tasksList = tasks
    }, [tasks])


    return (
        <section>
            <ul>
                {
                    tasksList.map(task => (
                        <li>{task}</li>
                    ))
                }
            </ul>
        </section>
    )
}