import query from '../db/index.js';

export const createUsers = async (body) => {

    const { fname, lname, email, githubUser, password, location, intrests } =
        body;
    const response = await query(
        'INSERT INTO users(f_name, l_name, email, githubUser, password, location, intrests) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [fname, lname, email, githubUser, password, location, intrests]
    );
    return response.rows;
};
export const getUsers = async () => {
    
    const response = await query(
       "SELECT * FROM users"
    );
    return response.rows;
};
