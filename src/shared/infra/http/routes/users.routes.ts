import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/createUser/UpdateUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();


usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);

export { usersRoutes };
