import { Request, Response } from "express";
import {insertUserRepository,} from "../repositorys/repositorys.js";
import {nameSchema,cellSchema} from "../schemas/schemas.js";


const insertUser = async (req: Request,res: Response) =>{
    const {name,cell}=req.body;
    try{
        if(!name || !cell){
            return res.sendStatus(400);
        };
        const cellValid = cellSchema.validate(cell);
        const nameValid = nameSchema.validate(name);
        
        if(nameValid.error || cellValid.error){
            return res.sendStatus(400);
        };
        insertUserRepository(nameValid.value,cellValid.value);
        return res.sendStatus(200);
    }catch(err){
        return res.status(500).send(err.message);
    };
};


export { insertUser };