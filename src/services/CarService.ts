import Service, { ServiceError } from '.';
import { Car, CarInterface } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(
    model = new CarModel(),
  ) {
    super(model);
  }

  create = async (data: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarInterface.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(data);
  };
}

export default CarService;