import { Request,Response } from "express";
import { insertMeetingRepository,
        listMeetingTimeRepository, 
        meetingServiceRepository,
        getIdMeetingRepository } from "../repositorys/repositorys.js";

const listMeeting= (req: Request, res: Response)=>{
    return res.send("list");
};

const insertMeeting= async (req: Request, res: Response)=>{
    const {userId,date,hour,serviceId} = res.locals.body;
    try{
        const meetings = (await listMeetingTimeRepository(hour)).rows;
        if(meetings.length===0){
            const response = await insertMeetingRepository(userId,date,hour);
            const getIdResponse = (await getIdMeetingRepository(userId,date,hour)).rows;;
            let meetingId = getIdResponse[0].id;
            const insertService= await meetingServiceRepository(meetingId,serviceId);
            console.log(insertService)
            if(response.command==="INSERT" && insertService.command==='INSERT'){
                return res.send(201);
            };
            return res.status(400).send({message: "Bad Request"});
        } return res.status(409).send({message: "time not available"});
    }catch(err){
        return res.status(500).send(err.message);   
    };
};

const deleteMeeting= (req: Request, res: Response)=>{
    
    return res.send("delete");
};

const editMeeting= (req: Request, res: Response)=>{
    return res.send("edit");
};

export {listMeeting, insertMeeting, deleteMeeting, editMeeting}