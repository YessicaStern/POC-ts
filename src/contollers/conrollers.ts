import { Request, Response } from "express";

const testeFunction=(req: Request,res: Response)=>{
    res.send('ooook');
}
export { testeFunction };