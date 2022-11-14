import { Request,Response } from "express";
import { insertMeetingRepository,
        listMeetingTimeRepository, 
        meetingServiceRepository,
        getIdMeetingRepository,
        deleteMeetingRepository,
        deleteMeetingServiceRepository,
        upHourDateRepository,
        upServiceRepository,
        listMeetingRepository
     } from "../repositorys/repositorys.js";

const listMeeting= async (req: Request, res: Response)=>{
    const response = (await listMeetingRepository()).rows;
    return res.send(response);    
};


const insertMeeting= async (req: Request, res: Response)=>{
    const {userId,date,hour,serviceId} = res.locals.body;
    try{
        const meetings = (await listMeetingTimeRepository(hour,date)).rows;
        if(meetings.length===0){
            const response = await insertMeetingRepository(userId,date,hour);
            const getIdResponse = (await getIdMeetingRepository(userId,date,hour)).rows;
            let meetingId = getIdResponse[0].id;
            const insertService= await meetingServiceRepository(meetingId,serviceId);
            if(response.rowCount===1 && insertService.rowCount===1){
                return res.sendStatus(201);
            };
            return res.status(400).send({message: "Bad Request"});
        } return res.status(409).send({message: "time not available"});
    }catch(err){
        return res.status(500).send(err.message);   
    };
};


const deleteMeeting= async (req: Request, res: Response)=>{
    const {id}= req.body;
    try {
        const response = (await deleteMeetingServiceRepository(id));
        if(response.rowCount===1){
            const response2 = (await deleteMeetingRepository(id));
            if(response2.rowCount===1){
                return res.sendStatus(200);
            }
            return res.status(400).send({message: "error when deleting "});
        }
        return res.status(400).send({message: "error when deleting "});
    }catch(err){
        return res.status(500).send(err.message);
    };
};


const editMeeting= async(req: Request, res: Response)=>{
    const {id, hour,date,serviceId} =req.body;
    try{
        const upHourDate = await upHourDateRepository(hour,date,id);
        if(upHourDate.rowCount===1){
            const upService = await upServiceRepository(serviceId,id);
            if(upService.rowCount===1){
                return res.sendStatus(200);
            };
            return res.status(400).send({messagem: "error update"});
        } ;
        return res.status(400).send({messagem: "error update"});    
    }catch(err){
        return res.status(500).send(err.message);
    };
};

export {listMeeting, insertMeeting, deleteMeeting, editMeeting}