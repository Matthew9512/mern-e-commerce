const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
const productsModel = require('../models/productsModel');
const bcrypt = require('bcrypt');
const usersUtils = require('../utils/usersFn');

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

      const accessToken = jwt.sign({ email, id: user._id }, process.env.ACCESS_TOKEN, { expiresIn: '15m' });

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

      const usersOrder = await usersModel
         .findByIdAndUpdate(
            { _id: userID },
            {
               $push: { orderHistory: orderArr },
            },
            { new: true }
         )
         .select('_id username email orderHistory createdAt');

      const { order } = orderArr;

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

      await usersUtils.sendNotifications(usersOrder, order, res, next);

      res.status(200).json({ usersOrder, message: `Product purchase correctly` });
   } catch (error) {
      next(error.message);
   }
};

const deleteAcc = async function (req, res, next) {
   try {
      const { id } = req.body;

      const findUser = await usersModel.findOneAndDelete(id);

      res.status(200).json({ message: `Account successfully deleted` });
   } catch (error) {
      next(error.message);
   }
};

module.exports = { register, usersPersonalData, login, getUser, buyProducts, deleteAcc };
