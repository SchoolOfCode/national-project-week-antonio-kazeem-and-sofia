import query from "../db/index.js";

// this creates users in the database
export const createUsers = async (body) => {
  const { fname, lname, email, githubUser, password, location, intrests } =
    body;
  const response = await query(
    "INSERT INTO users(f_name, l_name, email, githubUser, password, location, intrests) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [fname, lname, email, githubUser, password, location, intrests]
  );
  return response.rows;
};

// this gets all users in the database
export const getUsers = async () => {
  const response = await query("SELECT * FROM users");
  return response.rows;
};

// this gets login details from the database
export const getLogin = async (body) => {
  console.log(body);
  const { email, password } = body;

  const response = await query(
    "SELECT * FROM users WHERE email=$1 AND password =$2",
    [email, password]
  );
  return response.rows;
};

// this gets users from the database by query
export async function getUsersByQuery(location, intrest) {
  if (location !== undefined) {
    const res = await query(
      `SELECT * FROM users WHERE location ILIKE '%'||$1||'%'`,
      [location]
    );
    return res.rows;
  } else {
    const res = await query(
      `SELECT * FROM users WHERE intrests ILIKE '%'||$1||'%'`,
      [intrest]
    );
    return res.rows;
  }
}
