const productsModel = require('../models/productsModel');

// handle sale
const saleHandler = async function (req, res, next) {
   await productsModel.updateMany({ category: 'helmets' }, { sale: true, discount: 50 }, { new: true });
};

const featuresProducts = async function (req, res, next) {
   try {
      //    await saleHandler();
      const findProducts = await productsModel.find();
      // .splice(0, 2)
      res.status(200).json(findProducts);
   } catch (error) {
      next(error.message);
   }
};

const categoryProducts = async function (req, res, next) {
   try {
      const { category } = req.params;

      if (!category) return res.status(404).json({ message: 'No data provided' });

      let findProducts;
      if (category === 'all') findProducts = await productsModel.find();
      else findProducts = await productsModel.find({ category });

      res.status(200).json(findProducts);
   } catch (error) {
      next(error.message);
   }
};

const searchByName = async (req, res, next) => {
   try {
      const { name } = req.query;

      const productRegex = new RegExp(name, 'i');

      const findProducts = await productsModel.find({ name: productRegex });

      res.status(200).json(findProducts);
   } catch (error) {
      next(error.message);
   }
};

const getProduct = async (req, res, next) => {
   try {
      const { id } = req.params;

      const product = await productsModel.findById(id);

      res.status(200).json(product);
   } catch (error) {
      next(error.message);
   }
};
module.exports = { saleHandler, featuresProducts, categoryProducts, searchByName, getProduct };
