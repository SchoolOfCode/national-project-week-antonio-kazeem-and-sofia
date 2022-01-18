import express from 'express';
import { createUsers } from '../models/users.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({ message: 'I wish we had some information to give you ☹️' });
});

router.post('/', async (req, res) => {
    const createUser = await createUsers(req.body);
    res.json({
        success: true,
        message: 'User created...',
        payload: createUser,
    });
});
export default router;
