import { Router } from 'express';
import usercontroller from './app/controllers/usercontroller';
import sessioncontroller from './app/controllers/sessioncontroller';
import authorization from './app/middlewares/auth';

const routes = new Router();

routes.post('/signup', usercontroller.store);

routes.post('/session', sessioncontroller.store);

routes.put('/users', authorization, usercontroller.update);

routes.get('/users', usercontroller.showUsers);

routes.delete('/users', usercontroller.deleteUser )

export default routes;
