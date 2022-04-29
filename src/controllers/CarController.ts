import { Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res | void> => {
    try {
      const car = await this.service.create(req.body);
      if (!car) {
        return res.status(400).json({ error: 'Car not created' });
      }
      if ('error' in car) {
        return res.status(400).json(car);
      }
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}

export default CarController;