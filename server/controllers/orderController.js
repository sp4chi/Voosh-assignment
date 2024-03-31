import { createError } from '../utils/error.js';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';

export const addOrder = async (req, res, next) => {
  try {
    /*const user = await User.findById(req.user.id);
    if (req.body.phoneNumber !== user.phoneNumber) {
      return next(createError(400, 'Wrong phone number'));
    }*/

    const newOrder = new Order({ userId: req.user.id, ...req.body });

    await newOrder.save();

    res.status(201).json('Order added successfully');
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.params.id });
    if (orders.length === 0) {
      return next(createError(404, 'No orders found!'));
    }

    res.status(200).json(orders);
  } catch (error) {
    next(createError(404, 'No order found'));
  }
};
