const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   category: String,
   sale: Boolean,
   discount: {
      type: Number,
      default: 0,
   },
   sizesArr: [
      {
         size: String,
         available: Number,
      },
   ],
});

module.exports = mongoose.model('products', productsSchema);
