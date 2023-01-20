import App from './app';
import carRouter from './routes/car';

const server = new App();

server.addRouter(carRouter.router);

export default server;
