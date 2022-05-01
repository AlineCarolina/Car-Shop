import { Router as R } from 'express';
import Controller from '../controllers/index';

class Router<T> {
  public router: R;

  constructor(
    public controller: Controller<T>,
    public route: string = controller.route,
  ) {
    this.router = R();
    this.init();
  }

  public init() {
    this.router.post(`${this.route}`, this.controller.create);
    this.router.get(`${this.route}`, this.controller.read);
  }
}

export default Router;
