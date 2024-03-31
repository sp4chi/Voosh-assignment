import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import bcrpyt from 'bcryptjs';
import { createError } from '../utils/error.js';

export const addUser = async (req, res, next) => {
  try {
    const salt = bcrpyt.genSaltSync(10);
    const hash = bcrpyt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();

    res.status(200).send('User has been created!');
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

    if (!user) {
      return next(createError(404, 'User not found!'));
    }

    const isCorrect = await bcrpyt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return next(createError(400, 'Wrong Credentials'));
    }

    const { password, ...others } = user._doc;

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};
