import express from 'express';
import Cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(Cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
