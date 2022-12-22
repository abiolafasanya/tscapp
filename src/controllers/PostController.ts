import { Request, Response, NextFunction } from 'express';
import Post from '../model/Post';
import { CustomRequest } from './../utils/index';

export default class PostController {
  public static index = async (req: Request, res: Response) => {
    console.log(req);

    try {
      const post = await Post.find().populate('author', 'userId email username');
      return res
        .status(200)
        .json({ success: true, message: 'Record results', post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static show = async (req: Request, res: Response) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post == null)
        return res.status(404).json({ message: 'Cannot find post' });
      return res
        .status(200)
        .json({ success: true, message: 'Record result', post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static create = async (req: Request, res: Response) => {
    let body = req.body;
    let author = (req as CustomRequest).token;
    let newPost = { ...body, author: author.id };
    console.log(author);
    try {
      const post = await Post.create(newPost);
      if (!post)
        return res
          .status(400)
          .json({ message: 'Bad request check your inputs' });
      return res
        .status(200)
        .json({ success: true, message: 'Record created', post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static update = async (req: Request, res: Response) => {
    let body = req.body;
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
      if (!post)
        return res
          .status(400)
          .json({ message: 'Bad request check your inputs' });
      return res
        .status(200)
        .json({ success: true, message: 'Record updated', post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  public static destroy = async (req: Request, res: Response) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post == null)
        return res.status(404).json({ message: 'Cannot find post' });
      post.remove();
      return res.status(200).json({ success: true, message: 'Record deleted' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
