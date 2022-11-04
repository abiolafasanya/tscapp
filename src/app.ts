import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import mongoose from 'mongoose';
import config from './config/config';
import routers from './routers';
import Logger from './utils/Logger';

const app = express();

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => Logger.log('connected to mongoose and mongodb'))
  .catch((error) => Logger.error(error.message));

const startServer = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '* ');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Origin, Accept, Authorization'
    );
    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE'
      );
      return res.status(200).json();
    }
    next();
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    // On request method
    res.on('finish', () =>
      Logger.log(
        `Incoming request: -> Method: [${req.method}] -> Url [${req.url}]
    -> IP [${req.socket.remoteAddress}] -> status: [${res.statusCode}]`
      )
    );

    next();
  });

  // error handler
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.error(error);
    res.status(500).json({
      message: error,
    });
  });

  app.get('/ping', (req, res, next) =>
    res.status(200).json({ message: 'pong' })
  );

  // Routes
  routers(app);

  const server = http.createServer(app);
  server.listen(config.server.port, () =>
    Logger.log(`Server running on port ${config.server.port}`)
  );
};

startServer();
