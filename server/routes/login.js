import express from "express";
import { getLogin } from "../models/users.js";

const router = express.Router();

router.post("/", async function (req, res) {
 console.log("ddd",req.body)
  const getLog = await getLogin(req.query);
  console.log(getLog)

  res.json({ success: true, message: "I working", payload: getLog });
});

export default router;
