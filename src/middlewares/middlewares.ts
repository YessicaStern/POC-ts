import { Request, Response , NextFunction} from "express";
import { listUserRepository, getServiceId, userGodRepository } from "../repositorys/repositorys.js";
import { dateSchema } from "../schemas/schemas.js";


const validUserDateHour = async (req:Request, res:Response, next:NextFunction)=>{
    const {userId,date,hour,serviceId}=req.body;

    if(!userId || !date || !hour || !serviceId){
        return res.status(400).send({message:"incorrect data"});
    };
    try{
        const users = (await listUserRepository(userId)).rows;
        const service = (await getServiceId(serviceId)).rows;
        if(users.length===0 || service.length===0){
            return res.status(404).send({message: "Not found"});
        };

        const dateValid= dateSchema.validate(date);
        const today = new Date();

        if(dateValid.value <  today){
            return res.status(400).send({message: "date invalid"});
        };

        let newHour= Number (hour.replace(":", ""));
        if((newHour >= 800 && newHour <= 1130)||(newHour >= 1300 && newHour <= 1730)){
            res.locals.body = req.body;
            return next();
        };
        return res.status(400).send({message: "invalid time"});
    }catch(err){
        return res.status(500).send(err.message);
    };
};

const userGod = async (req:Request, res: Response, next: NextFunction)=>{
    const {id,userId} = req.body;
    try{
        const response = (await userGodRepository(id,userId)).rows;
        if(!response[0]){
            return res.status(404).send({message: "meeting not found"})
        };
        return next();
    }catch(err){
        return res.status(500).send(err.message);
    };
}
export { validUserDateHour , userGod}