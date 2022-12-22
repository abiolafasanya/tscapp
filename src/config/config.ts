import dotenv from 'dotenv';
import { JwtPayload, Secret } from 'jsonwebtoken';

dotenv.config();

let mongo_uri;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

switch (process.env.NODE_ENV) {
  case 'production':
    mongo_uri =
      'mongodb+srv://fastbeet:' +
      MONGO_PASSWORD +
      '@cluster0.uhz9qsw.mongodb.net/tscapp';
    break;
  case 'development':
    mongo_uri = 'mongodb://localhost/tscapp';
    break;

  default:
    break;
}

const MONGO_URI = mongo_uri;
const PORT = process.env.PORT || 5000;

const config = {
  mongo: {
    url: MONGO_URI || 'mongodb://localhost/tscapp',
  },
  server: {
    port: PORT,
  },
  env: process.env.NODE_ENV,
  secret: {
    jwt: process.env.JWT_SECRET_KEY || 'secret',
    refresh: process.env.REFRESH_SECRET_KEY || '',
    cookies: process.env.COOKIES_SECRET_KEY || '',
  },
  secretKey: (secret: any) => {
    if (secret == null) {
      secret = process.env.JWT_SECRET_KEY;
    }
    const SECRET_KEY: Secret = secret;
    return SECRET_KEY;
  },
};

export default config;
