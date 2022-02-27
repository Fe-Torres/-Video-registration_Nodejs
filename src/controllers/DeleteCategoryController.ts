import { Request, Response } from "express";
import { DeleteCategoryService } from './../services/DeleteCategoryService';


export class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const service = new DeleteCategoryService();
        const {id} = request.params;

        const result = await service.execute(id); 
        if (result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.status(204).json(result);
    }
}