const productsModel = require('../models/productsModel');

const featuresProducts = async function (req, res, next) {
   try {
      const findProducts = await productsModel.find();
      // features modela add
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

module.exports = { featuresProducts, categoryProducts, searchByName };
