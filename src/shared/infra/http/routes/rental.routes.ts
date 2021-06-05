import { Router } from "express";
import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { RentalByUserController } from "@modules/rentals/useCases/createRental/RentalByUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const rentalByUserController = new RentalByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.get("/", ensureAuthenticated, rentalByUserController.handle);

export { rentalRoutes };
