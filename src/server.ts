import App from './app';
import carRouter from './routes/car';

const server = new App();

server.addRouter(carRouter.router);

export default server;

// import CustomRouter from './routes/Router';

// import exampleController from './controllers/controller-example';

// import { example } from './interfaces/ExampleInterface';

// const exampleController = new exampleController();

// const exampleRouter = new CustomRouter<Car>();
// exampleRouter.addRoute(exampleController);
