import { Pool } from "pg"

let pool: null | Pool = null;


export function getPool(): Pool {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
        throw Error("database url not found")
    }

    if (!pool) {
        pool = new Pool({ connectionString })
    }

    return pool
}



export async function closePool(): Promise<void> {
    if (pool) {
        await pool.end()
    }
}