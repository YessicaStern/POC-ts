import { route } from "./routes/routes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const server=express();
server.use(express.json());
server.use(cors());

server.use(route);

server.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`);
});
