import pg from "pg";
// import { db } from "../config.js";

// A pool was created for the database connection
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// a fucntion to query the database
export default async function query(text, params) {
  return pool.query(text, params);
}
