import pg from "pg";
const pool = new pg.Pool({
connectionString: process.env.DATABASE_URL,

});

export default async function query(text, params) {
  return pool.query(text, params);
}
