import { Request, Response, NextFunction } from 'express';
import Menu from '../model/Menu';

export default class menuController {
  public static index = async (req: Request, res: Response) => {
    try {
      const menu = await Menu.find();
      return res
        .status(200)
        .json({ success: true, message: 'Record results', menu });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static show = async (req: Request, res: Response) => {
    try {
      const menu = await Menu.findById(req.params.id);
      if (menu == null)
        return res.status(404).json({ message: 'Cannot find menu' });
      return res
        .status(200)
        .json({ success: true, message: 'Record result', menu });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static create = async (req: Request, res: Response) => {
    let body = req.body;
    try {
      const menu = await Menu.create(body);
      if (!menu)
        return res
          .status(400)
          .json({ message: 'Bad request check your inputs' });
      return res
        .status(200)
        .json({ success: true, message: 'Record created', menu });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static update = async (req: Request, res: Response) => {
    let body = req.body;
    try {
      const menu = await Menu.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
      if (!menu)
        return res
          .status(400)
          .json({ message: 'Bad request check your inputs' });
      return res
        .status(200)
        .json({ success: true, message: 'Record updated', menu });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static destroy = async (req: Request, res: Response) => {
    try {
      const menu = await Menu.findById(req.params.id);
      if (menu == null)
        return res.status(404).json({ message: 'Cannot find menu' });
      menu.remove();
      return res.status(200).json({ success: true, message: 'Record deleted' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
