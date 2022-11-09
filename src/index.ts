import { route } from "./routes/routes.js";
import express from "express";

const server=express();

server.use(route);

server.listen(5000, ()=>{
    console.log("listening to port 5000");
});
