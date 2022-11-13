import { Service,ServiceOrEmpty } from "../protocols/protocols.js";
import {
    insertServicesRepository, 
    listServicesRepository,
    deleteServicesRepository 
   } from "../repositorys/repositorys.js";
import { Request, Response } from "express";
import { nameSchema } from "../schemas/schemas.js";

const insertServices = async (req:Request, res: Response) => {
    const {name,price}=req.body;
    try{
        if(!name || !price){
            return res.sendStatus(400);
        };
        const nameValid = nameSchema.validate(name);
        if(nameValid.error){
            return res.sendStatus(400);
        };
        let numberPrice = Number(price);
        numberPrice = numberPrice * 100000;

        insertServicesRepository(nameValid.value,numberPrice);
        return res.sendStatus(200);
    }catch(err){
        return res.status(500).send(err.message);
    };
};

const listServices = async (req:Request, res: Response) => {
    try{
        const services:Service[] = (await listServicesRepository()).rows;
        const newServices = services.map((e:Service)=>{
            let id= e.id;
            let newPrice = e.price/100000;
            let name=e.name;
            return ({id,name,newPrice});
        });

        return res.send(newServices);
    }catch(err){
        return res.status(500).send(err.message);
    };
};

const deleteServices =async (req:Request, res: Response) => {
    const { id }= req.body;
    try{
        const exists:Service[]= (await listServicesRepository()).rows;
        const existsId:ServiceOrEmpty[] = exists.filter((e)=>{
            if(e.id===id){
                return e;
            }
        });
        if(existsId.length===0){
            return res.status(404).send({message: "service not found"});
        }
        await deleteServicesRepository(id);
        return res.sendStatus(200);
    }catch(err){
        return res.status(500).send(err.message);
    };
};

export {listServices ,insertServices, deleteServices}