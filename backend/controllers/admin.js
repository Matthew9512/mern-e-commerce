const usersModel = require('../models/usersModel');
const productsModel = require('../models/productsModel');
const ordersModel = require('../models/ordersModel');
const salesModel = require('../models/salesModel');

const _resLimit = 10;

const manageSale = async function (req, res, next) {
   try {
      let { discount, category } = req.body;

      // remove sale for products if theres no body with req
      if (!discount && !category) {
         await productsModel.updateMany({ sale: true }, { sale: false, discount: 0 });

         // update sale info
         await salesModel.updateMany({}, { sale: false, discount: 0 });
         return res.status(200).json({ message: 'Sale successfully removed' });
      }

      // remove sale from current products
      await productsModel.updateMany({ sale: true }, { sale: false, discount: 0 });

      // active sale for all products
      if (category === 'all') await productsModel.updateMany({}, { sale: true, discount });

      // active sale for specific category
      await productsModel.updateMany({ category }, { sale: true, discount });

      // update sale info
      await salesModel.updateMany({}, { sale: true, discount });
      res.status(200).json({ message: 'Sale successfully activated' });
   } catch (error) {
      next(error.message);
   }
};

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

const sortUsersDetails = async function (req, res, next) {
   try {
      const { id, page } = req.params;

      let queryKey = req.query.sortBy;

      const usersDetails = await usersModel.findById(id).select('orderHistory');
      const pagesAmount = Math.ceil(usersDetails.orderHistory.length / _resLimit);

      if (queryKey === 'date') queryKey = 'orderDate';

      const queryOrder = req.query.order === 'decr' ? -1 : 1;

      const orderHistory = usersDetails.orderHistory
         .sort((a, b) => {
            const firstValue = a[queryKey];
            const secValue = b[queryKey];

            if (firstValue < secValue) return -1 * queryOrder;
            if (firstValue > secValue) return 1 * queryOrder;
            return 0;
         })
         .slice((page - 1) * _resLimit, page * _resLimit);

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

const sortUsers = async function (req, res, next) {
   try {
      const { page } = req.params;
      let queryKey = req.query.sortBy;

      const pagesAmount = Math.ceil((await usersModel.countDocuments()) / _resLimit);

      const queryOrder = req.query.order === 'decr' ? -1 : 1;

      if (queryKey === 'name') queryKey = 'username';
      if (queryKey === 'date') queryKey = 'createdAt';

      const usersList = await usersModel
         .find()
         .sort({ [queryKey]: queryOrder })
         .limit(_resLimit)
         .skip((page - 1) * _resLimit)
         .select('username email createdAt _id');

      res.status(200).json({ usersList, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

// PRODUCTS
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

const sortProducts = async function (req, res, next) {
   try {
      const { page } = req.params;

      let queryKey = req.query.sortBy;

      const pagesAmount = Math.ceil((await productsModel.countDocuments()) / _resLimit);

      const queryOrder = req.query.order === 'decr' ? -1 : 1;

      const productsList = await productsModel
         .find()
         .sort({ [queryKey]: queryOrder })
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      res.status(200).json({ productsList, pagesAmount });
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
         .sort({ createdAt: -1 })
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      res.status(200).json({ ordersList, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const sortOrders = async function (req, res, next) {
   try {
      const { page } = req.params;

      let queryKey = req.query.sortBy;

      const pagesAmount = Math.ceil((await ordersModel.countDocuments()) / _resLimit);

      if (queryKey === 'user') queryKey = 'username';
      if (queryKey === 'date') queryKey = 'createdAt';

      const queryOrder = req.query.order === 'decr' ? -1 : 1;

      const ordersList = await ordersModel
         .find()
         .sort({ [queryKey]: queryOrder })
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
   manageSale,
   getUsers,
   getUsersDetails,
   sortUsersDetails,
   deleteUser,
   sortUsers,
   getProducts,
   createNewProducts,
   deleteProduct,
   editProduct,
   sortProducts,
   getOrders,
   sortOrders,
   getStatistics,
};
