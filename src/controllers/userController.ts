import { Request, Response, NextFunction } from 'express';
import User, { Profile } from '../model/User';

const createUser = async (req: Request, res: Response) => {
  const body = req.body;
  const user = new User(body);
  const profile = new Profile(body);
  try {
    const newUser = await user.save();
    const newProfile = await profile.save();
    console.log({newUser}, {newProfile})
    return res.status(201).json({
      success: true,
      message: 'user account created',
      user: newUser,
      profile: newProfile,
    });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate(
      'userId',
      'username _id email'
    );
    if (user == null) {
      console.log(user, 'not found');
      return res.status(404).json({ message: 'Cannot find user' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateProfile = async (req: Request, res: Response) => {
  let body = req.body;
  try {
    const user = await User.findOne({ userId: req.params.id });
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    let profile = await Profile.findOneAndUpdate(
      { userId: req.params.id },
      body,
      { new: true }
    );
    if (profile)
      return res.status(201).json({ message: 'Profile Updated', profile });
    else return res.status(404).json({ message: 'Profile Not Found' });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    await user.remove();
    await Profile.findOne({ userId: user.userId });
    res.status(200).json({ message: 'Deleted user' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default {
  createUser,
  getUsers,
  getUser,
  updateProfile,
  deleteUser,
};
