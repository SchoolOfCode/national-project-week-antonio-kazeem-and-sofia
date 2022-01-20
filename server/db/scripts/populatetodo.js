import { dataTodo } from "../../data/data.js";
import  query  from "../index.js";
const createTodo = async () => {
  dataTodo.forEach(async (item) => {
    const task = item.task;
    const priority = item.priority;
    const res = await query(
      "INSERT INTO todos(task, priority) VALUES ($1,$2) RETURNING *",
      [task, priority]
    );
    console.log(res);
  });
};

createTodo();
