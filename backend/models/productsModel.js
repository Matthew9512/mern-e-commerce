const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
   title: String,
   price: String,
   img: String,
   description: String,
});

module.exports = mongoose.model('products', productsSchema);
