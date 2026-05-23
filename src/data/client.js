import { createClient } from '@libsql/client'

const url = import.meta.env.VITE_TURSO_DATABASE_URL
const authToken = import.meta.env.VITE_TURSO_AUTH_TOKEN

if (!url || !authToken) {
    throw new Error("Faltan TURSO_DATABASE_URL y/o TURSO_AUTH_TOKEN")
}

export const client = createClient({ url, authToken })