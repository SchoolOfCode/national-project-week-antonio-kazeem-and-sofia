// packages that where imported and used.
import express from "express";
import cors from "cors";
import logger from "morgan";

import usersRouter from "./routes/users.js";
import todosRouter from "./routes/todos.js";


const app = express();


app.use(cors());
app.use(express.json());

// a router is used for http requests.
app.use("/users", usersRouter);
app.use("/todos", todosRouter);

export default app;
