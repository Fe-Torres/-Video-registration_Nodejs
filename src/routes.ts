import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosControllers';

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/video", new CreateVideoController().handle);
routes.get("/video", new GetAllVideosController().handle);


export {routes};