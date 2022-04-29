import { Car } from '../../interfaces/CarInterface';
import { Document, ObjectId } from 'mongoose';

export interface CarMock extends Car {
  _id: ObjectId;
};

export type ICarMock = CarMock & Document;

export const carMockReq = {
  model: 'Ferrari',
  year: 2019,
  color: 'red',
  buyValue: 100000,
  seatsQty: 2,
  doorsQty: 2,
};

export const carMockRes = {
  _id: '823hd8387eh72390uw',
  ...carMockReq,
};

export const CarMockInterface = {
  ...carMockRes,
} as ICarMock;