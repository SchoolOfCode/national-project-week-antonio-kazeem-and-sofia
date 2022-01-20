import express from "express";
import { createtodo, getTodos } from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const getTodoList = await getTodos();
  res.json({ success: true, message: "Its working", payload: getTodoList });
});

router.post("/", async (req, res) => {
  const createTodos = await createtodo(req.body);
  res.json({
    success: true,
    message: "User created...",
    payload: createTodos
  });
});

export default router;
