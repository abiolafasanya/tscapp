import config from '../config/config';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

interface Itoken {
  data: any;
  secret?: string;
  expiresIn?: any;
}

const generateAuthToken = async (payload: any) => {
  console.log(payload);
  try {
    const res = {
      accessToken: generateToken(payload, config.secret.jwt, '15m'),
      refreshToken: generateToken(payload, config.secret.refresh, '7d'),
    };
    return res;
  } catch (error) {
    throw new Error('Token generation failed');
  }
};

const generateToken = (payload: any, secret: any, expiresIn: any) => {
  return jwt.sign(payload, secret, { expiresIn: expiresIn });
};

export const generateKey = () => crypto.randomBytes(48).toString('hex');

export default generateAuthToken;
