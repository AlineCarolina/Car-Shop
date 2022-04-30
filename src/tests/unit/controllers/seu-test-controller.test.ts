import chai from 'chai';
import chaiHttp = require('chai-http');
import Sinon = require('sinon');
import App from '../../../app';
import CarController from '../../../controllers/CarController';
import { Car } from '../../../interfaces/CarInterface';
import Router from '../../../routes';
import CarService from '../../../services/CarService';
import { CarMockInterface, carMockReq } from '../../mocks/CarMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('CarController', () => {
  let carService = new CarService();

  let carController = new CarController(carService);

  let carRouter = new Router<Car>(carController);

  carRouter.init();

  let server = new App()
  
  server.addRouter(carRouter.router);

  describe('#create', async () => {
    it('should create a new car', async () => {
      Sinon.stub(carService, 'create').resolves(CarMockInterface);
      const res = await chai.request(server.app)
        .post('/cars')
        .send({
          ...carMockReq,
        });
      expect(res.status).to.be.equal(201);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('_id');
      expect(res.body).to.have.property('model');
      expect(res.body).to.have.property('year');
      expect(res.body).to.have.property('color');
      expect(res.body).to.have.property('buyValue');
      expect(res.body).to.have.property('seatsQty');
      expect(res.body).to.have.property('doorsQty');
      Sinon.restore();
    });

    it('should return a 400 error when the car is not valid', async () => {
      Sinon.stub(carService, 'create').resolves({
        error: 'Error',
      });
      const res = await chai.request(server.app)
        .post('/cars')
        .send({
          ...carMockReq,
          doorsQty: 15,
        });
      expect(res.status).to.be.equal(400);
      expect(result.body).to.be.deep.eq({ error: 'Error' });
      Sinon.restore();
    });
  });
});