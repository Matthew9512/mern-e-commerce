const usersModel = require('../models/usersModel');
const productsModel = require('../models/productsModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async function (req, res, next) {
   try {
      const { username, password, email } = req.body;

      if (!username || !password || !email) return res.status(400).json({ message: `User data required` });

      const checkDuplicate = await usersModel.findOne({ email });

      if (checkDuplicate) return res.status(409).json({ message: `Email is invalid or already taken` });

      const bcryptPassword = await bcrypt.hash(password, 10);

      await usersModel.create({
         username,
         email,
         password: bcryptPassword,
      });

      res.status(200).json({ message: `Account successfully created, welcome ${username}` });
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

      const user = await usersModel.findById(id).select('_id username email orderHistory createdAt');

      res.status(200).json(user);
   } catch (error) {
      next(error.message);
   }
};

const buyProducts = async function (req, res, next) {
   try {
      const { userID, ...orderArr } = req.body;

      const usersOrder = await usersModel.findByIdAndUpdate(
         { _id: userID },
         {
            $push: { orderHistory: orderArr },
         },
         { new: true }
      );

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

      res.status(200).json(usersOrder);
   } catch (error) {
      next(error.message);
   }
};

module.exports = { register, login, getUser, buyProducts };
