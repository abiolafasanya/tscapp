import dotenv from 'dotenv';

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
};

export default config;
