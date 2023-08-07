const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
   {
      username: String,
      password: String,
      email: String,
      orderHistory: [
         {
            productName: String,
            productPrice: String,
            orderDate: { type: Date, default: Date.now },
         },
      ],
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('user', usersSchema);
