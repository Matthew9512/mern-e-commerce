const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
const productsModel = require('../models/productsModel');
const bcrypt = require('bcrypt');
const usersUtils = require('../utils/usersFn');
const stripe = require('../config/stripe');
const saveOrderStatistics = require('../utils/saveOrderStatistics');

const register = async function (req, res, next) {
   try {
      const { username, password, email } = req.body;

      if (!username || !password || !email) return res.status(400).json({ message: `User data required` });

      const checkDuplicate = await usersModel.findOne({ email });

      if (checkDuplicate) return res.status(409).json({ message: `Email is invalid or already taken` });

      const bcryptPassword = await bcrypt.hash(password, 10);

      const user = await usersModel.create({
         username,
         email,
         password: bcryptPassword,
      });

      res.status(200).json({ message: `Account successfully created, welcome ${username}`, id: user.id });
   } catch (error) {
      next(error.message);
   }
};

const usersPersonalData = async function (req, res, next) {
   try {
      const { id, user } = req.body;

      const findUser = await usersModel.findByIdAndUpdate({ _id: id }, { usersData: user }, { new: true });

      res.status(200).json({ findUser, message: `Data successfully saved` });
   } catch (error) {
      next(error.message);
   }
};

const login = async function (req, res, next) {
   try {
      const { password, email } = req.body;

      if (!email || !password) return res.status(400).json({ message: `Please input correct email and password` });

      const user = await usersModel.findOne({ email });

      if (!user) return res.status(401).json({ message: `We cant find user with provided mail` });

      const bcryptPassword = await bcrypt.compare(password, user.password);

      if (!bcryptPassword) return res.status(401).json({ message: `Wrong email or password` });

      const accessToken = jwt.sign({ email, id: user._id, roles: user.roles }, process.env.ACCESS_TOKEN, {
         expiresIn: '1d',
      });

      const refreshToken = jwt.sign({ email, id: user._id }, process.env.REFRESH_TOKEN, { expiresIn: '7d' });

      res.cookie('jwt', refreshToken, {
         httpOnly: true,
         secure: true,
         sameSite: 'None',
         maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ accessToken, message: `Login successful, welcome back ${user.username}` });
   } catch (error) {
      next(error.message);
   }
};

const getUser = async function (req, res, next) {
   try {
      const { id } = req.params;

      const user = await usersModel.findById(id).select('_id username email orderHistory createdAt usersData');

      if (!user) return res.status(404).json({ message: 'User not found' });

      // jwt decoded user info
      const { id: userID } = req.user;

      if (id !== userID) return res.status(403).json({ message: `You are not authorized to access this information` });

      res.status(200).json(user);
   } catch (error) {
      next(error.message);
   }
};

const buyProducts = async function (req, res, next) {
   try {
      const { userID, ...orderArr } = req.body;

      // check if user send personal data
      usersUtils.checkUsersData(userID, res);

      // users order data
      const { order } = orderArr;

      // // stripe payment
      // stripe.stripeConfig(userID, order, res);
      // // stripe payment

      const usersOrder = await usersModel
         .findByIdAndUpdate(
            { _id: userID },
            {
               $push: { orderHistory: order },
            },
            { new: true }
         )
         .select('_id username email orderHistory createdAt');

      const productData = order.map((product) => {
         return {
            productID: product.productID,
            productSize: product.size,
            productAmount: product.amount,
         };
      });

      productData.forEach(async (product) => {
         await productsModel.updateOne(
            { _id: product.productID, 'sizesArr.size': product.productSize },
            { $inc: { 'sizesArr.$.available': -product.productAmount } }
         );
      });

      // save order id db for statistics
      saveOrderStatistics(order, usersOrder.username);

      await usersUtils.sendNotifications(usersOrder, order, next);

      res.status(200).json({ usersOrder, message: `Product purchase correctly` });
   } catch (error) {
      next(error.message);
   }
};

const logOut = (req, res) => {
   const cookies = req.cookies;

   if (!cookies?.jwt) return res.sendStatus(204);

   res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });

   res.status(200).json({ message: `Logout successful` });
};

const deleteAcc = async function (req, res, next) {
   try {
      const { id } = req.body;

      const user = await usersModel.findByIdAndDelete(id);

      if (!user) return res.status(404).json({ message: `User not found` });

      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });

      res.status(200).json({ message: `Account successfully deleted` });
   } catch (error) {
      next(error.message);
   }
};

module.exports = { register, usersPersonalData, login, getUser, buyProducts, logOut, deleteAcc };
