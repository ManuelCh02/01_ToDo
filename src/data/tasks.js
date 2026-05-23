import { client } from "./client.js"

export const initDb = async () => {
    await client.execute(`DROP TABLE IF EXISTS todo_tasks`)
    await client.execute(`
        CREATE TABLE IF NOT EXISTS todo_tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            value TEXT NOT NULL,
            labels TEXT DEFAULT '[]',
            completed INTEGER DEFAULT 0
        )
    `)
}