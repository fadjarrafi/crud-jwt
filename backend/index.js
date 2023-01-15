import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import router from './route/index.js';
dotenv.config();
const app =express();

try {
    await db.authenticate();
    console.log('Db connected....');

} catch (error) {
    console.error(error)
}

app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'))