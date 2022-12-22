import { Express } from 'express';
import controller from '../controllers/MenuController';
import { auth } from './../middlewares/auth';

export default function (app: Express) {
  app.get('/menus', auth, controller.index);
  app.get('/menu/:id', auth, controller.show);
  app.post('/menu', auth, controller.create);
  app.put('/menu/:id', auth, controller.update);
  app.delete('/menu/:id', auth, controller.destroy);
}
