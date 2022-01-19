import express from "express";
import { createUsers, getUsers, getUsersByQuery } from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  console.log("query", req.query);
  res.json({ message: "its working" });
});

//   const {intrest, location} = req.query
//   if(location!==undefined||intrest!==undefined){
//     const userbyQuery = await getUsersByQuery(location,intrest)
//      res.json({ success: true, message: "Its working", payload: userbyQuery });
//   }else{
//   const getUser = await getUsers();
//   res.json({ success: true, message: "Its working", payload: getUser });
// }});

// router.post("/", async (req, res) => {
//   const createUser = await createUsers(req.body);
//   res.json({
//     success: true,
//     message: "User created...",
//     payload: createUser
//   });
// });

export default router;
