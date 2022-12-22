import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

export const SECRET_KEY: Secret = config.secret.jwt || 'secret';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const authHeader = req.header('Authorization')?.replace('Bearer ', '');
    const authHeader = req.headers.authorization; // If token doesn't Exit
    if (!authHeader) {
      res.status(401).json({
        status: 401,
        message: 'no token, authorization denied',
      });
      return;
    }

    const token = authHeader.split(' ')[1];

    // if (!token) {
    //   throw new Error();
    // }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;
    // console.log(decoded);
    next();
  } catch (err) {
    res.status(401).send('Please authenticate');
  }
};
