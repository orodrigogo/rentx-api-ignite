import { Router } from "express";
import { ListCarsController } from '../../../../modules/cars/useCases/listCars/ListCarsController';
import { SyncPullCarsController } from '../../../../modules/cars/useCases/sync/SyncPullCarsController';

const carsRoutes = Router();

const listCarsController = new ListCarsController();
const syncPullCarsController = new SyncPullCarsController();

carsRoutes.get("/", listCarsController.handle);
carsRoutes.get("/sync/pull", 
  syncPullCarsController.handle
);


export { carsRoutes };
