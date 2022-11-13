import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { Service } from "../protocols/protocols.js";

type User = {
    id: number,
    name: string,
    cell: number
};


const  insertUserRepository = (name:string,cell:number):void=>{
    connection.query(`INSERT INTO users (name,cell) VALUES ($1,$2)`,[name,cell]);
};

const  insertServicesRepository = (name:string,price:number):void=>{
    connection.query(`INSERT INTO services (name,price) VALUES ($1,$2)`,[name,price]);
};

const listServicesRepository = (): Promise <QueryResult<Service>> =>{
    return (connection.query(`SELECT * FROM services`));
};

const deleteServicesRepository = (id:number)=>{
    return (connection.query(`DELETE FROM services WHERE id=$1`,[id]));
};

//tipar os retornos

const listUserRepository = (id:number): Promise <QueryResult<User>> =>{
    return (connection.query(`SELECT * FROM users WHERE id=$1`,[id]));
};
const insertMeetingRepository = (userId:number, date:string, hour:string): Promise <QueryResult<string>>=>{
    return connection.query(`INSERT INTO meetings ("userId",date,hour) VALUES ($1,$2,$3)`,
    [userId,date,hour]);
};
const listMeetingTimeRepository = (hour:string):Promise<QueryResult<string>> => {
    return (connection.query(`SELECT * FROM meetings WHERE hour = $1`,[hour]));
};
const meetingServiceRepository = (meetingId:number,serviceID:number):Promise<QueryResult<string>>=>{
    return (connection.query(`INSERT INTO meetingService ("meetingId", "serviceId") VALUES ($1,$2)`,[meetingId,serviceID]));
};
const getIdMeetingRepository= (userId:number, date:string, hour:string): Promise <QueryResult<any>>=>{
    return connection.query(`SELECT * FROM meetings WHERE "userId"=$1 AND date=$2 AND hour=$3 `,
    [userId,date,hour]);
};
const getServiceId = (id:number):Promise<QueryResult<any>>=>{
    return (connection.query(`SELECT * FROM services WHERE id=$1`,[id]));
};

export {insertUserRepository, 
        insertServicesRepository,
        listServicesRepository,
        deleteServicesRepository,
        listUserRepository,
        insertMeetingRepository,
        listMeetingTimeRepository,
        meetingServiceRepository,
        getIdMeetingRepository,
        getServiceId
    };