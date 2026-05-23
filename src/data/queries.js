import { client } from "./client.js";

export const getTable = async () => {
    return await client.execute('SELECT * FROM todo_tasks')
}

export const saveTask = async (newTask) => {
    await client.execute({
        sql: `INSERT INTO todo_tasks (
            value, labels, completed
        ) VALUES (?, ?, ?)`,
        args: [
            newTask.value,
            JSON.stringify(newTask.labels),
            newTask.completed ? 1 : 0
        ]
    })
}

export const deleteTask = async (taskId) => {
    await client.execute({
        sql: `DELETE FROM todo_tasks WHERE id = ?`,
        args: [taskId]
    })
}