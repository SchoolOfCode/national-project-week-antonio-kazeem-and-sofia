import express from "express";
import { createUsers, getUsers } from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function(req, res) {
  const getUser = await getUsers();
  res.json({ success: true, message: "Its working", payload: getUser });
});

router.post("/", async (req, res) => {
  const createUser = await createUsers(req.body);
  res.json({
    success: true,
    message: "User created...",
    payload: createUser
  });
});
export default router;
