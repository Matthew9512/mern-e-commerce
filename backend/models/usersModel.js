const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
   {
      username: String,
      password: String,
      email: String,
      orderHistory: [
         {
            productID: String,
            amount: Number,
            price: String,
            name: String,
            size: String,
            image: String,
            orderDate: { type: Date, default: Date.now },
         },
      ],
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('user', usersSchema);
