import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon from 'sinon';
import CarModel, { carSchema } from '../../../models/CarModel';
import { CarMockInterface } from '../../mocks/CarMock';

describe('CarModel', () => {
  let carModel = new CarModel(mongoose.model('Car', carSchema));

  const carMock = [CarMockInterface];

  describe('#create', () => {
    before(() => {
      Sinon.stub(carModel.model, 'create').resolves(CarMockInterface)
    });

    after(() => {
      Sinon.restore();
    });

    it('should create a new car', async () => {
      const car = await carModel.create(CarMockInterface);
      expect(car).to.be.an('object');
      expect(car).to.have.property('_id');
      expect(car).to.have.property('model');
      expect(car).to.have.property('year');
      expect(car).to.have.property('color');
      expect(car).to.have.property('buyValue');
      expect(car).to.have.property('seatsQty');
      expect(car).to.have.property('doorsQty');
    });
  });
});