import { route } from "./routes/routes.js";
import express from "express";
var server = express();
server.use(route);
server.listen(5000, function () {
    console.log("listening to port 5000");
});
