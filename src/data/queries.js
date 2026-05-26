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

export const updateCompletedQuery = async (checked, taskId) => {
    await client.execute({
        sql: `UPDATE todo_tasks SET completed = ? WHERE id = ?`,
        args: [checked ? 1 : 0, taskId]
    })
}

export const filterTasksByLabel = async (value) => {
    if (value === 'all') return await client.execute({
        sql: `SELECT * FROM todo_tasks`,
    })
    return await client.execute({
        sql: `SELECT * FROM todo_tasks WHERE labels LIKE ?`,
        args: [`%${value}%`]
    })
}

export const getTaskCountByLabel = async () => {
    return await client.execute(`
        SELECT json_each.value as label, COUNT(*) as count
        FROM todo_tasks, json_each(todo_tasks.labels)
        WHERE todo_tasks.completed = 0
        GROUP BY json_each.value 
    `)
}