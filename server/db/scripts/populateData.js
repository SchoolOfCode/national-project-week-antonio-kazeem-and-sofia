import { data } from "../../data/data.js";
import query from "../index.js";

// populates the user table
const createUser = async () => {
  data.forEach(async (item) => {
    const fname = item.fname;
    const lname = item.lname;
    const email = item.email;
    const githubUser = item.githubUser;
    const password = item.password;
    const location = item.location;
    const intrests = item.intrests;
    const res = await query(
      "INSERT INTO users(f_name,l_name,email,githubUser,password,location,intrests) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [fname, lname, email, githubUser, password, location, intrests]
    );
    console.log(res);
  });
};

createUser();

 