import authRoute from './authRoute';
import userRoute from './userRoute';
import courseRoute from './courseRoute';
import { Express } from 'express';

export default function (app: Express) {
  authRoute(app);
  userRoute(app);
  courseRoute(app);
}
