import authRoute from './authRoute';
import userRoute from './userRoute';
import courseRoute from './courseRoute';
import menuRoute from './menuRoute';
// import postRoute from './postRoute';
import { Express } from 'express';
import postRoute from './postRoute';

export default function (app: Express) {
  authRoute(app);
  userRoute(app);
  courseRoute(app);
  menuRoute(app);
  postRoute(app);
}
