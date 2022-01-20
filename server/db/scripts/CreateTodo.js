import query from "../index.js";

const sqlString =
  "CREATE TABLE IF NOT EXISTS todos(userID SERIAL PRIMARY KEY, task TEXT, priority TEXT)";

const createTodo = async () => {
  const res = await query(sqlString);
  console.log(res);
};

createTodo();
