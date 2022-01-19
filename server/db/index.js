import pg from 'pg';
import { db } from '../config.js';

const pool = new pg.Pool({
connectionString: config.URL
    ssl: { rejectUnauthorized: false },
});

export default async function query(text, params) {
    return pool.query(text, params);
}
