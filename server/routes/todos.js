import express from "express";
import {createTodos, getTodos} from "../models/todo.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const createTodo = await createTodos(req.body);
  res.json({
    success: true,
    message: "User created...",
    payload: createTodo
  });
});

router.get("/", async function (req, res) {
  const getTodo = await getTodos();
  res.json({ success: true, message: "Its working", payload: getTodo });
});

export default router;
