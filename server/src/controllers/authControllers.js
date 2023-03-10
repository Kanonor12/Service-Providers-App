import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Service from '../models/Service.js';
import User from '../models/Users.js';
import { createError } from '../utils/error.js';

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, 'User not found'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!isPasswordCorrect) return next(createError(404, 'Wrong password or username'));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(201)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};

export const registerService = async (req, res, next) => {
  const newService = new Service(req.body);

  try {
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    ...req.body,
    password: hash,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (error) {
    next(error);
  }
};
