import pg from 'pg';
import { db } from '../config.js';

const pool = new pg.Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password:db.password ,
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

export default async function query(text, params) {
    return pool.query(text, params);
}
