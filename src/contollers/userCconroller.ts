import { Request, Response } from "express";
import {insertUserRepository,} from "../repositorys/repositorys.js";
import {nameSchema,cellSchema} from "../schemas/schemas.js";


const insertUser = async (req: Request,res: Response) =>{
    const {name,cell}=req.body;
    try{
        if(!name || !cell){
            return res.sendStatus(400);
        };
        const cellValid = cellSchema.validate(cell,{abortEarly:false});
        const nameValid = nameSchema.validate(name,{abortEarly:false});
        
        if(nameValid.error){
            return res.send(nameValid.error.details[0].message);
        };
        if(cellValid.error){
            return res.send(cellValid.error.details[0].message);
        };
        insertUserRepository(nameValid.value,cellValid.value);
        return res.sendStatus(200);
    }catch(err){
        return res.status(500).send(err.message);
    };
};


export { insertUser };