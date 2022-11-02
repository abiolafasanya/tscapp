import { Express } from 'express';
import controller from '../controllers/AuthController';

export default function (app: Express) {
  app.post('/auth', controller.authenticate);
  app.post('/auth/signup', controller.createAuth);
}
