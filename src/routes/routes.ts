import { insertUser } from "../contollers/userCconroller.js";
import { listServices, insertServices, deleteServices  } from "../contollers/servicesController.js";
import { listMeeting, insertMeeting, deleteMeeting, editMeeting } from "../contollers/meetingsController.js";
import express from "express";

import { userGod, validUserDateHour } from "../middlewares/middlewares.js";

const route= express.Router();

route.post("/", insertUser ); //registra nome e telefone do usuário

route.get("/services", listServices ); //lista os serviços disponíveis
route.post("/services", insertServices ); // inseri os serviços
route.delete("/services", deleteServices ); //deleta serviços pelo id

route.get("/meeting", listMeeting);
route.post("/meeting", validUserDateHour ,insertMeeting);
route.delete("/meeting", userGod ,deleteMeeting);
route.put("/meeting", userGod , validUserDateHour ,editMeeting);


export {route};