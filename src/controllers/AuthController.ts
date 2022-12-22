import { Request, Response } from 'express';
import Auth from '../model/Auth';
import { CustomRequest } from '../utils';
// import generateAuthToken from '../utils/generate';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export default class AuthController {
  static createAuth = async (req: Request, res: Response) => {
    let { email, username, password } = req.body;

    const user = new Auth({ email, username, password });

    await user
      .save()
      .then((user) => {
        res.status(200).json({
          success: true,
          message: 'User created successfully',
          data: user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          message: 'User not created',
          error: err,
        });
      });
  };

  public static authenticate = async (req: Request, res: Response) => {
    let { username, email, password } = req.body;
    if (email == undefined && username == undefined)
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password',
      });
    if (password == undefined)
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password',
      });

    try {
      let user;
      if (username) user = await Auth.findOne({ username });

      if (email) user = await Auth.findOne({ email });

      if (user) {
        let isMatch = await user.comparePassword(password);
        if (isMatch) {
          // const token = await generateAuthToken(user);
          let payload = {
            id: user._id,
            email: user.email,
            username: user.username,
          };
          let accessToken = jwt.sign(payload, config.secret.jwt, {
            expiresIn: '15m',
          });
          let refreshToken = jwt.sign(payload, config.secret.refresh, {
            expiresIn: '15m',
          });
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: 'strict',
          });
          return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: user,
            accessToken: accessToken,
          });
        } else {
          return res.status(400).json({
            success: false,
            message: 'Incorrect username or password',
          });
        }
      }
      return res.status(400).json({ message: 'Invalid username or password' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

  public static logout = async (req: Request, res: Response) => {
    res.clearCookie('refreshToken');
    console.log(req.session);
    req.session.destroy((err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Error logging out',
        });
      } else
        res.status(200).json({
          success: true,
          message: 'Logged out successfully',
        });
    });
  };
}
