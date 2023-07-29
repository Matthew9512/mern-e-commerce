const productsModel = require('../models/productsModel');

const featuresProducts = async function (req, res, next) {
   try {
      const findProducts = await productsModel.find();

      res.status(200).json(findProducts);
   } catch (error) {
      next(error.message);
   }
};

module.exports = { featuresProducts };
