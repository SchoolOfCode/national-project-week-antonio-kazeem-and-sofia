import query from "../db/index.js";

// export const createtodo = async (body) => {
//   const { task, priority } = body;
//   const response = await query(
//     "INSERT INTO todos(task, priority) VALUES ($1, $2) RETURNING *",
//     [task, priority]
//   );
//   return response.rows;
// };

// export const getTodos = async () => {
//   const response = await query("SELECT * FROM todos");
//   console.log(response.rows);
//   return response.rows;
// };
