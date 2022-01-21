import express from "express";

// functions where imported to query the database
import { createUsers, getUsers } from "../models/users.js";

const router = express.Router();

// This handles get requests to users.
router.get("/", async function (req, res) {
  console.log("query", req.query);
  const getUser = await getUsers();
  res.json({ success: true, message: "Its working", payload: getUser });
});

// This handles post request to users
router.post("/", async (req, res) => {
  const createUser = await createUsers(req.body);
  res.json({
    success: true,
    message: "User created...",
    payload: createUser
  });
});
export default router;
