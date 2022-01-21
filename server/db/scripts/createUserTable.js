import query from "../index.js";

const sqlString =
  "CREATE TABLE IF NOT EXISTS users(userID SERIAL PRIMARY KEY, f_name TEXT, l_name TEXT, email TEXT, githubUser TEXT, password VARCHAR(32), location TEXT, intrests TEXT)";

  // creates user table in the database.
const createUser = async () => {
  const res = await query(sqlString);
  console.log(res);
};

createUser();
