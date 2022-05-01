import { ZodError } from 'zod';
import Model from '../models/index';

export interface ServiceError {
  error: ZodError | unknown;
}

abstract class Service<T> {
  constructor(
    public model: Model<T>,
  ) { }

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[] | ServiceError> {
    return this.model.read();
  }
}

export default Service;