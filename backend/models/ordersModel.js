const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema(
   {
      username: String,
      price: String,
      amount: {
         type: Number,
         default: 1,
      },
      name: String,
      image: String,
      status: Boolean,
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('order', ordersSchema);
