import { Express } from 'express';
import controller from '../controllers/PostController';
import { auth } from './../middlewares/auth';

export default function (app: Express) {
  app.get('/posts', auth, controller.index);
  app.get('/post/:id', auth, controller.show);
  app.post('/post', auth, controller.create);
  app.put('/post/:id', auth, controller.update);
  app.delete('/post/:id', auth, controller.destroy);
}
