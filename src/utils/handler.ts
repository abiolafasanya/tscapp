import {
  Express,
  Response,
  NextFunction,
  Request,
  ErrorRequestHandler,
} from 'express';

export const notFound = (req: Request, res: Response) => {
  return res.status(404).json('Page not found');
};

// export const errorhandler = (err: Error, req: Request, res: Response, next:NextFunction) => {

//     res.status(statusCode).json(message);
//   };
