const productsModel = require('../models/productsModel');
const salesModel = require('../models/salesModel');

// products res limit per request
const _resLimit = 8;

// get sale info
const getSaleInfo = async function (req, res, next) {
   const [sale] = await salesModel.find();

   res.status(200).json(sale);
};

const getProducts = async function (req, res, next) {
   try {
      const { page } = req.params;

      const pagesAmount = Math.ceil((await productsModel.countDocuments()) / _resLimit);

      const products = await productsModel
         .find()
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      res.status(200).json({ products, pagesAmount });
   } catch (error) {
      next(error.message);
   }
};

const categoryProducts = async function (req, res, next) {
   try {
      const { category } = req.params;

      if (!category) return res.status(404).json({ message: 'No data provided' });

      let products;
      if (category === 'all') products = await productsModel.find();
      else products = await productsModel.find({ category });

      res.status(200).json({ products });
   } catch (error) {
      next(error.message);
   }
};

const searchByName = async (req, res, next) => {
   try {
      const { name } = req.query;

      const productRegex = new RegExp(name, 'i');

      const products = await productsModel.find({ name: productRegex });

      if (!products.length)
         return res.status(404).json({
            message: `Looks like we can't find products that you are looking for, please change your criteria or see our full offer ;)`,
         });

      res.status(200).json({ products });
   } catch (error) {
      next(error.message);
   }
};

const getProductByID = async (req, res, next) => {
   try {
      const { id } = req.params;

      const product = await productsModel.findById(id);

      res.status(200).json(product);
   } catch (error) {
      next(error.message);
   }
};

module.exports = { getProducts, categoryProducts, searchByName, getProductByID, getSaleInfo };
