const productsModel = require('../models/productsModel');

// products res limit per request
const _resLimit = 8;

// update products in db with sale
// ==> first remove old sale, by setting salse: false and discount to 0, then set new sale <==
const saleHandler = async function () {
   const saleInfo = 40;
   await productsModel.updateMany({ category: 'leather-suits' }, { sale: true, discount: saleInfo }, { new: true });
   return saleInfo;
};

const getProducts = async function (req, res, next) {
   let saleInfo;
   try {
      // activate to set sale
      saleInfo = await saleHandler();
      const { page } = req.params;

      const pagesAmount = Math.ceil((await productsModel.countDocuments()) / _resLimit);

      const products = await productsModel
         .find()
         .limit(_resLimit)
         .skip((page - 1) * _resLimit);

      if (saleInfo)
         res.cookie('saleInfo', saleInfo, {
            sameSite: 'None',
            secure: true,
            domain: '.vercel.app',
            maxAge: 7 * 24 * 60 * 60 * 1000,
         });
      // https://justride.vercel.app/
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
module.exports = { saleHandler, getProducts, categoryProducts, searchByName, getProductByID };
