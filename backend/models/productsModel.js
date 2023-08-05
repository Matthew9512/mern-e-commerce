const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
   name: String,
   price: String,
   salePrice: String,
   image: String,
   description: String,
   category: String,
   features: Boolean,
   sale: Boolean,
   discount: Number,
});

module.exports = mongoose.model('products', productsSchema);
