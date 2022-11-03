import { Express } from 'express';
import controller from '../controllers/AuthController';

export default function (app: Express) {
  app.post('/api/auth', controller.authenticate);
  app.post('/api/auth/signup', controller.createAuth);
}
