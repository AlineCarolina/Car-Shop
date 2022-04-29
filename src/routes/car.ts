import Router from '.';
import CarController from '../controllers/CarController';
import { Car } from '../interfaces/CarInterface';

const carRouter = new Router<Car>(new CarController());
carRouter.init();

export default carRouter;