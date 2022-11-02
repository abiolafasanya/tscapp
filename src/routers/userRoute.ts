import { Express } from 'express';
import controller from '../controllers/UserController';

export default function (app: Express) {
  app.get('/users', controller.getUsers);
  app.get('/user/:id', controller.getUser);
  app.post('/user', controller.createUser);
  app.put('/user/profile/:id', controller.updateProfile);
  app.delete('/user/:id', controller.deleteUser);
}
