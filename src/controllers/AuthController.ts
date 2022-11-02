import { Request, Response } from 'express';
import Auth from '../model/Auth';

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

    let user;
    if (username) user = await Auth.findOne({ username });

    if (email) user = await Auth.findOne({ email });

    if (user) {
      let isMatch = await user.comparePassword(password);
      if (isMatch) {
       return res.status(200).json({
          success: true,
          message: 'Login successful',
          data: user,
        });
      } else {
       return res.status(400).json({
          success: false,
          message: 'Incorrect username or password',
        });
      }
    }
    return res.status(400).json({ message: 'Invalid username or password' });
  };
}
