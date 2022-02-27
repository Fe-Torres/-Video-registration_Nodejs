import { GetAllVideosService } from './../services/GetAllVideosService';
import { Request, Response } from "express";


export class GetAllVideosController{
    async handle(request: Request, response: Response){
        const service = new GetAllVideosService;

        const result = await service.execute(); 
        if (result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }
}