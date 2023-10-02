const usersModel = require('../models/usersModel');
const productsModel = require('../models/productsModel');
const ordersModel = require('../models/ordersModel');

const _resLimit = 10;

const getUsers = async function (req, res, next) {
   try {
      const { page } = req.params;

      const pagesAmount = Math.ceil((await usersModel.countDocuments()) / _resLimit);

      const usersList = await usersModel
         .find()
         .limit(_resLimit)
         .skip((page - 1) * _resLimit)
         .select('username email createdAt _id');

      res.status(200).json({ usersList, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const getUsersDetails = async function (req, res, next) {
   try {
      const { id, page } = req.params;
      const usersDetails = await usersModel.findById(id).select('orderHistory');

      const pagesAmount = Math.ceil(usersDetails.orderHistory.length / _resLimit);

      const orderHistory = usersDetails.orderHistory.slice((page - 1) * _resLimit, page * _resLimit);

      res.status(200).json({ orderHistory, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const deleteUser = async function (req, res, next) {
   try {
      const { id } = req.body;

      await usersModel.findByIdAndDelete(id);

      res.status(200).json({ message: `User successfully deleted` });
   } catch (error) {
      next(error.message);
   }
};

const getProducts = async function (req, res, next) {
   try {
      const { page } = req.params;

      const pagesAmount = Math.ceil((await productsModel.countDocuments()) / _resLimit);

      const productsList = await productsModel
         .find()
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      res.status(200).json({ productsList, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const createNewProducts = async function (req, res, next) {
   try {
      const { name, price, image, category, description, ...sizes } = req.body.formData;

      const sizesArr = Object.entries(sizes).map(([key, value]) => {
         return {
            size: key,
            available: value,
         };
      });

      await productsModel.create({ name, price, image, category, description, sizesArr });

      res.status(200).json({ message: `Product successfully created` });
   } catch (error) {
      next(error.message);
   }
};

const deleteProduct = async function (req, res, next) {
   try {
      const { id } = req.body;

      await productsModel.findByIdAndDelete(id);

      res.status(200).json({ message: `Product successfully deleted` });
   } catch (error) {
      next(error.message);
   }
};

const editProduct = async function (req, res, next) {
   try {
      const { id } = req.params;
      const { name, price, image, category, description, ...sizes } = req.body.formData;

      const sizesArr = Object.entries(sizes).map(([key, value]) => {
         return {
            size: key,
            available: value,
         };
      });

      await productsModel.findByIdAndUpdate(id, { name, price, image, category, description, sizesArr });

      res.status(200).json({ message: `Product successfully updated` });
   } catch (error) {
      next(error.message);
   }
};

const getOrders = async function (req, res, next) {
   try {
      const { page } = req.params;

      const pagesAmount = Math.ceil((await ordersModel.countDocuments()) / _resLimit);

      const ordersList = await ordersModel
         .find()
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      res.status(200).json({ ordersList, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const getStatistics = async function (req, res, next) {
   // ===
   // const currentDate = new Date(2023, 8, 1); // September
   // const futureDate = new Date(2023, 9, 1);
   // ===
   const date = new Date();
   const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
   const futureDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

   try {
      const totalOrders = await ordersModel.countDocuments();
      const totalUsers = await usersModel.countDocuments();
      const totalIncomes = (await ordersModel.find().select('price amount')).reduce(
         (acc, order) => acc + +(order?.price * order?.amount),
         0
      );

      const monthlyUsers = await usersModel.aggregate([
         {
            $match: {
               createdAt: {
                  $gte: currentDate,
                  $lt: futureDate,
               },
            },
         },
      ]);

      const monthlyOrders = await ordersModel
         .aggregate([
            {
               $match: {
                  createdAt: {
                     $gte: currentDate,
                     $lt: futureDate,
                  },
               },
            },
         ])
         .sort({ createdAt: -1 });

      res.status(200).json({ monthlyUsers: monthlyUsers.length, monthlyOrders, totalOrders, totalUsers, totalIncomes });
   } catch (error) {
      next(error.message);
   }
};

module.exports = {
   getUsers,
   getUsersDetails,
   deleteUser,
   getProducts,
   createNewProducts,
   deleteProduct,
   editProduct,
   getOrders,
   getStatistics,
};
