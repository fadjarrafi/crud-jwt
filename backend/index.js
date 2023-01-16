import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import cors from "cors";
import router from './route/index.js';
import cookieParser from "cookie-parser";
dotenv.config();
const app =express();

try {
    await db.authenticate();
    console.log('Db connected....');

} catch (error) {
    console.error(error)
}

app.use(cors({ credentials:true, origin:'http://localhost:5000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'))