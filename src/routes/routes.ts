import { testeFunction } from "../contollers/conrollers.js";
import express from "express";

const route= express.Router();

route.get('/teste', testeFunction );

export {route};