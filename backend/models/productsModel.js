const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   category: String,
   features: Boolean,
   discount: { type: Boolean, default: false },
});

module.exports = mongoose.model('products', productsSchema);
