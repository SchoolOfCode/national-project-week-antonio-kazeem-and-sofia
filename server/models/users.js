import query from '../db';

export const createUsers = async (body) => {
    const { fname, lname, email, githubUser, password, location, interests } =
        body;
    const response = await query(
        'INSERT INTO users(f_name, l_name, email, githubUser, password, location, interests) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [fname, lname, email, githubUser, password, location, interests]
    );
    return response;
};
