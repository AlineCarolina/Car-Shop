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
}

export default Service;